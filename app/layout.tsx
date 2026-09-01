import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site, socialLinks } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Social Media Agentur Berlin | Content, Betreuung & Ads | Obscura",
    template: "%s | Obscura Berlin",
  },
  description:
    "Obscura ist deine Social Media Agentur aus Berlin für monatliche Betreuung, Video- & Content-Produktion und Werbeanzeigen. Ein Team für Sichtbarkeit, Markenauftritt und Wachstum.",
  keywords: [
    "Social Media Agentur Berlin",
    "Social Media Betreuung Berlin",
    "Content Produktion Berlin",
    "Videoproduktion Berlin",
    "Reels Agentur",
    "Meta Ads Agentur Berlin",
    "Performance Marketing Berlin",
    "monatliche Social Media Betreuung",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.domain,
    siteName: "Obscura",
    title: "Social Media Agentur Berlin | Content, Betreuung & Ads | Obscura",
    description:
      "Dein kompletter Social-Media-Auftritt – monatlich betreut. Strategie, Content, Veröffentlichung, Ads und Reporting aus einer Hand.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obscura – Social Media Agentur Berlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Agentur Berlin | Obscura",
    description:
      "Monatliche Social-Media-Betreuung, Content-Produktion und Ads aus Berlin.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F8F8F5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.legalName,
      url: site.domain,
      email: site.email,
      telephone: site.phoneHref,
      slogan: site.tagline,
      vatID: site.register.vatId,
      founder: site.management.map((name) => ({ "@type": "Person", name })),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressCountry: "DE",
      },
      ...(socialLinks.length > 0
        ? { sameAs: socialLinks.map((s) => s.href) }
        : {}),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.domain}/#localbusiness`,
      name: site.legalName,
      image: `${site.domain}/og.png`,
      url: site.domain,
      email: site.email,
      telephone: site.phoneHref,
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressCountry: "DE",
      },
      areaServed: "DE",
    },
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: "Obscura",
      inLanguage: "de-DE",
      publisher: { "@id": `${site.domain}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-surface"
        >
          Zum Inhalt springen
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
