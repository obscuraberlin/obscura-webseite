import { NextRequest, NextResponse } from "next/server";

/* Serverseitige Annahme der Formular-Anfragen.
   Hier liegt der Schutz, der frueher in anfrage.php stand: Die Seite
   laeuft als Node-Anwendung, PHP wird auf diesem Server nicht ausgefuehrt.

   Ablauf: pruefen -> bremsen -> an den Zustelldienst weiterreichen.
   Scheitert das, greifen im Browser weiterhin die bisherigen
   Ausweichwege (Web3Forms, FormSubmit). */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMPFAENGER = "info@obscura-berlin.de";
const MAX_BYTES = 24576;
const MAX_FELDER = 40;
const MAX_FELDLAENGE = 4000;
const LIMIT_STUNDE = 5;
const LIMIT_TAG = 20;

type Eintrag = { zeiten: number[] };
const zaehler = new Map<string, Eintrag>();

function herkunft(req: NextRequest): string {
  const kopf = req.headers;
  const direkt = kopf.get("cf-connecting-ip") || kopf.get("x-real-ip");
  if (direkt) return direkt.trim();
  const kette = kopf.get("x-forwarded-for");
  if (kette) return kette.split(",")[0].trim();
  return "unbekannt";
}

/* IP nur als Hashwert vorhalten - nie im Klartext speichern. */
async function schluessel(ip: string): Promise<string> {
  const daten = new TextEncoder().encode(ip);
  const hash = await crypto.subtle.digest("SHA-256", daten);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function zuviel(key: string): boolean {
  const jetzt = Date.now();
  const eintrag = zaehler.get(key) ?? { zeiten: [] };
  eintrag.zeiten = eintrag.zeiten.filter((t) => jetzt - t < 86_400_000);

  const stunde = eintrag.zeiten.filter((t) => jetzt - t < 3_600_000).length;
  const gesperrt = stunde >= LIMIT_STUNDE || eintrag.zeiten.length >= LIMIT_TAG;
  if (!gesperrt) eintrag.zeiten.push(jetzt);

  zaehler.set(key, eintrag);

  /* Speicher begrenzen: alte Eintraege gelegentlich verwerfen */
  if (zaehler.size > 5000) {
    for (const [k, v] of zaehler) {
      if (v.zeiten.every((t) => jetzt - t > 86_400_000)) zaehler.delete(k);
    }
  }
  return gesperrt;
}

function saeubern(wert: unknown): string {
  if (Array.isArray(wert)) wert = wert.filter((v) => typeof v !== "object").join(", ");
  if (typeof wert !== "string" && typeof wert !== "number") return "";
  return String(wert).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").slice(0, MAX_FELDLAENGE);
}

export async function POST(req: NextRequest) {
  const laenge = Number(req.headers.get("content-length") ?? 0);
  if (laenge > MAX_BYTES) {
    return NextResponse.json({ success: false, message: "Anfrage zu gross" }, { status: 413 });
  }

  const roh = await req.text();
  if (roh.length > MAX_BYTES) {
    return NextResponse.json({ success: false, message: "Anfrage zu gross" }, { status: 413 });
  }

  let daten: Record<string, unknown>;
  try {
    daten = JSON.parse(roh);
  } catch {
    return NextResponse.json({ success: false, message: "Keine Daten" }, { status: 400 });
  }
  if (!daten || typeof daten !== "object" || Array.isArray(daten)) {
    return NextResponse.json({ success: false, message: "Keine Daten" }, { status: 400 });
  }

  const felder = Object.keys(daten);
  if (felder.length === 0) {
    return NextResponse.json({ success: false, message: "Keine Daten" }, { status: 400 });
  }
  if (felder.length > MAX_FELDER) {
    return NextResponse.json({ success: false, message: "Zu viele Felder" }, { status: 400 });
  }

  /* Honigtopf: still mit Erfolg antworten, damit der Bot nichts lernt. */
  if (daten._honey) return NextResponse.json({ success: true, message: "ok" });

  if (zuviel(await schluessel(herkunft(req)))) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Zu viele Anfragen. Bitte melde dich direkt unter info@obscura-berlin.de oder +49 30 28678956.",
      },
      { status: 429, headers: { "Retry-After": "3600" } },
    );
  }

  /* Inhalte bereinigen und Steuerzeichen entfernen */
  const sauber: Record<string, string> = {};
  let inhalt = 0;
  for (const [k, v] of Object.entries(daten)) {
    if (k.startsWith("_")) continue;
    const wert = saeubern(v);
    if (wert.trim() !== "") inhalt++;
    sauber[k.replace(/[\u0000-\u001F\u007F]/g, " ").slice(0, 80)] = wert;
  }
  if (inhalt === 0) {
    return NextResponse.json({ success: false, message: "Keine Inhalte" }, { status: 400 });
  }

  const betreff = saeubern(daten._subject).replace(/[\r\n]/g, " ").slice(0, 150)
    || "Neue Anfrage über obscura-berlin.de";
  const antwort = typeof daten._replyto === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(daten._replyto)
    ? daten._replyto
    : "";

  /* Weiterreichen an den Zustelldienst. Der Schluessel steht in der
     Umgebung des Servers, nicht im ausgelieferten Seitenquelltext. */
  const web3 = process.env.WEB3FORMS_ACCESS_KEY;
  try {
    if (web3) {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: web3, subject: betreff, email: antwort, ...sauber }),
      });
      const j = await r.json().catch(() => null);
      if (r.ok && j?.success === true) return NextResponse.json({ success: true, message: "ok" });
    }

    const r = await fetch(`https://formsubmit.co/ajax/${EMPFAENGER}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...sauber,
        _subject: betreff,
        _template: "table",
        _captcha: "false",
        _replyto: antwort,
      }),
    });
    const j = await r.json().catch(() => null);
    if (r.ok && String(j?.success) === "true") {
      return NextResponse.json({ success: true, message: "ok" });
    }
    return NextResponse.json(
      { success: false, message: "Versand abgelehnt" },
      { status: 502 },
    );
  } catch {
    return NextResponse.json({ success: false, message: "Versand nicht erreichbar" }, { status: 502 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, message: "Nur POST" }, { status: 405 });
}
