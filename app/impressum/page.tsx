import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Obscura Digital Marketing GmbH.",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      {/* PLACEHOLDER – MIT ECHTEN OBSCURA DATEN ERSETZEN (§ 5 DDG / § 18 MStV) */}
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>

      <h2>Vertreten durch</h2>
      <p>
        Marcel Mancic
        <br />
        Maher Samir Moussa
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone}
        <br />
        E-Mail: {site.email}
        <br />
        Internet: www.obscura-berlin.de
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: Amtsgericht Charlottenburg
        <br />
        Registernummer: HRB 254391 B
      </p>

      {/* PLACEHOLDER: USt-IdNr. ergänzen, falls vorhanden */}
      <h2>Umsatzsteuer-ID</h2>
      <p>USt-IdNr. gemäß § 27 a UStG: PLACEHOLDER</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Marcel Mancic, Maher Samir Moussa – Anschrift wie oben</p>
    </LegalLayout>
  );
}
