import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Obscura Digital Marketing GmbH.",
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Der Schutz deiner personenbezogenen Daten ist uns wichtig. Nachfolgend
        informieren wir dich über die Verarbeitung personenbezogener Daten beim
        Besuch und der Nutzung dieser Website.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
        <br />
        Geschäftsführung: Maher Samir Moussa, Marcel Mancic
        <br />
        Telefon: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Website: www.obscura-berlin.de
      </p>

      <h2>Hosting &amp; Server-Logfiles</h2>
      <p>
        Diese Website wird bei einem externen Hosting-Anbieter betrieben, der
        als Auftragsverarbeiter für uns tätig ist. Beim Aufruf der Seiten
        werden automatisch Informationen in Server-Logfiles verarbeitet
        (u.&nbsp;a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
        Seite, übertragene Datenmenge, Browsertyp). Dies dient dem sicheren und
        stabilen Betrieb der Website. Rechtsgrundlage ist unser berechtigtes
        Interesse gemäß Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
      </p>

      <h2>Kontaktformular &amp; Erstgespräch-Anfrage</h2>
      <p>
        Wenn du uns über das Anfrage-Formular kontaktierst, verarbeiten wir die
        von dir angegebenen Daten (Auswahl zu Ziel, Unterstützung, Status und
        Startzeitpunkt sowie Name, Unternehmen, E-Mail, Telefon, Website,
        Instagram und deine freiwillige Projektbeschreibung) zur Bearbeitung
        deiner Anfrage. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
        lit.&nbsp;b und lit.&nbsp;f DSGVO.
      </p>
      <p>
        Für den technischen Versand des Formulars setzen wir den Dienst
        Web3Forms (Softworks LLC) als Auftragsverarbeiter ein. Die
        Formularinhalte werden über diesen Dienst verarbeitet und uns per
        E-Mail an {site.email} zugestellt. Ein Honeypot-Feld dient dem Schutz
        vor automatisiertem Spam.
      </p>

      <h2>Kontaktaufnahme per E-Mail, Telefon &amp; WhatsApp</h2>
      <p>
        Nimmst du per E-Mail oder Telefon Kontakt auf, verarbeiten wir deine
        Angaben zur Bearbeitung des Anliegens (Art.&nbsp;6 Abs.&nbsp;1
        lit.&nbsp;b und lit.&nbsp;f DSGVO). Der WhatsApp-Button verlinkt auf den
        externen Dienst WhatsApp (WhatsApp Ireland Ltd. / Meta). Erst mit dem
        Klick und dem Absenden einer Nachricht werden Daten an WhatsApp
        übertragen; es gelten die Datenschutzbestimmungen von WhatsApp. Die
        Nutzung ist freiwillig.
      </p>

      <h2>Schriftarten</h2>
      <p>
        Wir binden die verwendete Schriftart über die Schrift-Optimierung von
        Next.js ein. Die Schriftdateien werden dabei lokal mit der Website
        ausgeliefert (selbst gehostet); es findet kein Verbindungsaufbau zu
        Google-Servern statt.
      </p>

      <h2 id="cookies">Cookies, Local Storage &amp; Reichweitenmessung</h2>
      <p>
        Diese Website verwendet keine Analyse-, Tracking- oder Marketing-Dienste
        (z.&nbsp;B. Google Analytics, Google Tag Manager, Meta-Pixel) und setzt
        keine Marketing-Cookies. Es werden keine nicht notwendigen Cookies
        gesetzt und kein Local Storage zu Tracking-Zwecken verwendet. Aus diesem
        Grund ist kein Einwilligungsbanner erforderlich. Sollten künftig
        Analyse- oder Marketing-Dienste eingesetzt werden, erfolgt dies erst
        nach vorheriger Einwilligung über eine entsprechende Consent-Lösung.
      </p>

      <h2>Verlinkung sozialer Netzwerke</h2>
      <p>
        Sofern auf dieser Website Verlinkungen zu unseren Profilen in sozialen
        Netzwerken enthalten sind, handelt es sich um einfache Verlinkungen.
        Erst beim Klick auf einen solchen Link wirst du zum jeweiligen Anbieter
        weitergeleitet, dessen Datenschutzbestimmungen dann gelten.
      </p>

      <h2>Empfänger / Auftragsverarbeitung</h2>
      <p>
        Personenbezogene Daten geben wir nur an Dienstleister weiter, die uns
        bei der Bereitstellung der Website und der Bearbeitung von Anfragen
        unterstützen (insbesondere Hosting und Formularversand) und die auf
        Grundlage von Auftragsverarbeitungsverträgen für uns tätig sind.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur so lange, wie es für die
        genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
        bestehen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht,
        eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu
        widerrufen. Außerdem steht dir ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu.
      </p>

      <p style={{ fontSize: "0.85em", opacity: 0.7, marginTop: "2rem" }}>
        Hinweis: Diese Datenschutzerklärung bildet die tatsächlichen
        Verarbeitungen dieser Website ab. Der konkrete Hosting-Anbieter sowie
        etwaige spätere Dienste sind vor bzw. bei Änderung zu ergänzen; eine
        abschließende rechtliche Prüfung wird empfohlen.
      </p>
    </LegalLayout>
  );
}
