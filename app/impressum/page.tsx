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
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
        <br />
        {site.address.country}
      </p>

      <h2>Vertreten durch die Geschäftsführung</h2>
      <p>
        Maher Samir Moussa
        <br />
        Marcel Mancic
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Internet: www.obscura-berlin.de
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: {site.register.court}
        <br />
        Registernummer: {site.register.hrb}
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>USt-IdNr. gemäß § 27 a UStG: {site.register.vatId}</p>

      <h2>Steuernummer</h2>
      <p>{site.register.taxNr}</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Maher Samir Moussa und Marcel Mancic
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
        solche gekennzeichnet.
      </p>
    </LegalLayout>
  );
}
