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
      {/* PLACEHOLDER – Vollständige, rechtssichere Datenschutzerklärung durch
          Fachanwalt / Datenschutzbeauftragten ergänzen (DSGVO). */}
      <p>
        Der Schutz deiner personenbezogenen Daten ist uns wichtig. Nachfolgend
        informieren wir dich über die Verarbeitung deiner Daten beim Besuch
        dieser Website. Diese Erklärung ist ein Platzhalter und muss vor dem
        Livegang rechtssicher finalisiert werden.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
        <br />
        {site.email}
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Wenn du uns über das Erstgespräch-Formular kontaktierst, verarbeiten wir
        die von dir angegebenen Daten (Name, Unternehmen, E-Mail, Telefon,
        Website sowie freiwillige Angaben) zur Bearbeitung deiner Anfrage auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        PLACEHOLDER – Angaben zu eingesetzten Cookies, Tracking- und
        Analyse-Tools sowie Einwilligungsmanagement ergänzen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein
        Beschwerderecht bei einer Aufsichtsbehörde.
      </p>
    </LegalLayout>
  );
}
