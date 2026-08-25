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
      <p>PLACEHOLDER – Geschäftsführung</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone}
        <br />
        E-Mail: {site.email}
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: PLACEHOLDER Amtsgericht Berlin
        <br />
        Registernummer: HRB PLACEHOLDER
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>USt-IdNr. gemäß § 27 a UStG: PLACEHOLDER</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>PLACEHOLDER Name, Anschrift wie oben</p>
    </LegalLayout>
  );
}
