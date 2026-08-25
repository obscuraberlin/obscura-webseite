import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
          Fehler 404
        </p>
        <h1 className="mt-4 text-hero font-extrabold">Seite nicht gefunden.</h1>
        <p className="mt-4 text-lg text-ink/60">
          Diese Seite existiert nicht (mehr).
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-surface"
        >
          Zur Startseite →
        </Link>
      </div>
    </main>
  );
}
