/**
 * Zentrale Inhalts- und Konfigurationsdatei.
 *
 * Enthält die verifizierten Firmen-, Kontakt- und Referenzdaten von Obscura.
 * Es werden bewusst keine Kundennamen, Zahlen, Reichweiten oder Ergebnisse
 * erfunden; nicht verifizierbare Angaben (z. B. Social-Profile) bleiben leer.
 */

export const site = {
  name: "OBSCURA",
  legalName: "Obscura Digital Marketing GmbH",
  domain: "https://www.obscura-berlin.de",
  city: "Berlin",
  tagline: "Social Media. Content. Performance.",
  email: "info@obscura-berlin.de",
  phone: "030 28678956",
  phoneHref: "+493028678956",
  whatsapp: "+49 157 58117356",
  whatsappHref: "4915758117356",
  address: {
    street: "Flemingstr. 12",
    zip: "10557",
    city: "Berlin",
    country: "Deutschland",
  },
  // Registerangaben (Impressum / strukturierte Daten)
  register: {
    court: "Amtsgericht Charlottenburg",
    hrb: "HRB 254391 B",
    vatId: "DE362483133",
    taxNr: "3045900015",
  },
  // Vorbelegte WhatsApp-Nachricht
  whatsappText: "Hallo Obscura, ich interessiere mich für eine Zusammenarbeit.",
  // Geschäftsführung / Gründer (verifiziert)
  management: ["Maher Samir Moussa", "Marcel Mancic"],
  social: {
    // Nur verifizierte, offizielle Profile eintragen. Konnten aktuell nicht
    // eindeutig verifiziert werden -> leer lassen (Icons werden ausgeblendet),
    // statt ein falsches generisches Profil zu verlinken.
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },
};

/** WhatsApp-Deep-Link mit vorbelegter Nachricht */
export const whatsappUrl = `https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
  site.whatsappText,
)}`;

/** Nur tatsächlich hinterlegte (verifizierte) Social-Profile */
export const socialLinks = (
  [
    { label: "Instagram", href: site.social.instagram },
    { label: "TikTok", href: site.social.tiktok },
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "YouTube", href: site.social.youtube },
  ] as const
).filter((s) => s.href && s.href.length > 0);

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#team" },
  { label: "Wissen", href: "#wissen" },
  { label: "Kontakt", href: "#kontakt" },
];

/** Kundenlogos – verifizierte Referenzen (vom Kunden bestätigt). */
export const clients = [
  "ROLLS-ROYCE BERLIN",
  "HOTEL ADLON KEMPINSKI",
  "RILLER & SCHNAUCK",
  "SJS CARSTYLING",
  "KENSINGTON",
];

/** Leistungsbausteine rund um die Systemgrafik */
export const system = [
  {
    title: "Strategie & Planung",
    items: ["Content Strategie", "Themen", "Kampagnen", "Redaktionsplan"],
  },
  {
    title: "Content Produktion",
    items: ["Reels", "Videos", "Fotos", "Stories"],
  },
  {
    title: "Social Media Betreuung",
    items: ["Posting", "Community", "Plattformen", "Management"],
  },
  {
    title: "Ads & Kampagnen",
    items: ["Meta Ads", "Instagram Ads", "Targeting", "Optimierung"],
  },
  {
    title: "Analyse & Reporting",
    items: ["Reichweite", "Engagement", "Leads", "Performance"],
  },
  {
    title: "Weiterentwicklung",
    items: ["Testing", "Neue Ideen", "Optimierung", "Skalierung"],
  },
];

/** Bento – "Was du jeden Monat bekommst" */
export const monthly = [
  {
    title: "Monatlich neuer Content",
    text: "Regelmäßige Reels, Videos, Fotos, Posts und Stories – hochwertig und markengerecht.",
    span: "lg",
  },
  {
    title: "Content Plan",
    text: "Du weißt vorab, was produziert und veröffentlicht wird.",
    span: "sm",
  },
  {
    title: "Social Media Betreuung",
    text: "Wir kümmern uns um deine Kanäle.",
    span: "sm",
  },
  {
    title: "Veröffentlichung",
    text: "Wir posten regelmäßig – zur richtigen Zeit, am richtigen Ort.",
    span: "sm",
  },
  {
    title: "Community",
    text: "Kommentare und relevante Interaktionen werden betreut.",
    span: "sm",
  },
  {
    title: "Werbeanzeigen",
    text: "Geeignete Inhalte können zusätzlich beworben werden.",
    span: "md",
  },
  {
    title: "Reporting",
    text: "Du bekommst transparente Zahlen – jeden Monat.",
    span: "sm",
  },
  {
    title: "Fester Ansprechpartner",
    text: "Eine Person kennt dein Unternehmen und koordiniert alles.",
    span: "md",
  },
  {
    title: "Optimierung",
    text: "Wir verbessern Inhalte und Strategie kontinuierlich.",
    span: "sm",
  },
];

/** Reporting-Dashboard – DEMO DATA (keine echten Obscura-Zahlen) */
export const reportingMetrics = [
  { label: "Reichweite", value: "DEMO", trend: "up" },
  { label: "Profilbesuche", value: "DEMO", trend: "up" },
  { label: "Engagement", value: "DEMO", trend: "up" },
  { label: "Anfragen", value: "DEMO", trend: "up" },
];

/** Content-Bibliothek Filter */
export const contentFilters = [
  "Alle",
  "Reels",
  "Videos",
  "Fotos",
  "Imagefilme",
  "Behind the Scenes",
  "Automotive",
  "Immobilien",
  "Social Media",
];

/** Content-Rails – Kategorien statt erfundener Projekte. */
export const reels = [
  { title: "Automotive Reel", category: "Automotive", tone: 1 },
  { title: "Behind the Scenes", category: "BTS", tone: 2 },
  { title: "Immobilien", category: "Immobilien", tone: 3 },
  { title: "Drohnenaufnahme", category: "Drohne", tone: 4 },
  { title: "Social Media", category: "Social", tone: 5 },
  { title: "Produktvideo", category: "Produkt", tone: 6 },
];

export const films = [
  { title: "Imagefilm", category: "Imagefilm", tone: 2 },
  { title: "Unternehmensfilm", category: "Corporate", tone: 4 },
  { title: "Kampagnenfilm", category: "Kampagne", tone: 1 },
  { title: "Recruiting Film", category: "Recruiting", tone: 3 },
];

/** Ablauf / Prozess */
export const process = [
  {
    step: "01",
    title: "Kennenlernen",
    items: ["Unternehmen", "Zielgruppe", "Ziele", "Status Quo"],
  },
  {
    step: "02",
    title: "Strategie",
    items: ["Content Plan", "Plattformen", "Formate", "Botschaften"],
  },
  {
    step: "03",
    title: "Produktion",
    items: ["Video", "Foto", "Reels", "Stories"],
  },
  {
    step: "04",
    title: "Betreuung",
    items: ["Posting", "Community", "Ads", "Distribution"],
  },
  {
    step: "05",
    title: "Wachstum",
    items: ["Reporting", "Optimierung", "Testing", "Skalierung"],
  },
];

/**
 * Projekte – verifizierte Referenzen, qualitativ beschrieben.
 * Keine erfundenen Ergebnisse/Kennzahlen.
 */
export const projects: {
  client: string;
  branche: string;
  leistung: string;
  tone: number;
  img?: string;
}[] = [
  { client: "Rolls-Royce Spectre × Hotel Adlon Kempinski", branche: "Automotive · Luxury", leistung: "Werbespot-Produktion", tone: 1, img: "/media/projekte/rolls-royce.webp" },
  { client: "Rolls-Royce Berlin", branche: "Automotive", leistung: "Langfristige Social-Media- & Content-Betreuung", tone: 3 },
  { client: "Riller & Schnauck", branche: "Automotive", leistung: "Social-Media-Content & Videoproduktion", tone: 5 },
  { client: "SJS Carstyling", branche: "Carstyling", leistung: "Content- & Videoproduktion", tone: 2 },
  { client: "Kensington Immobilien", branche: "Immobilien", leistung: "Social-Media-Betreuung & Content", tone: 4 },
];

/** Mini Success Stories – als Muster, später durch echte Stories ersetzen */
export const stories = [
  "Von einem Shooting zur monatlichen Betreuung.",
  "Regelmäßige Reels für konstanten Markenauftritt.",
  "Neuer Unternehmensfilm für Website und Vertrieb.",
  "Content + Ads für bessere Sichtbarkeit.",
  "Monatlicher Content für einen einheitlichen Auftritt.",
];

/** Team – nur verifizierte Personen (Geschäftsführung / Gründer). */
export const team = [
  { name: "Maher Samir Moussa", role: "Geschäftsführung", tone: 1 },
  { name: "Marcel Mancic", role: "Geschäftsführung", tone: 4 },
];

/**
 * Text-Reviews – nur echte, vom Kunden freigegebene Stimmen einsetzen.
 * Bis diese vorliegen bewusst leer (keine erfundenen Bewertungen).
 * Format: { quote, name, company, stars }
 */
export const reviews: { quote: string; name: string; company: string; stars: number }[] = [];

/** Mehrstufiges Formular */
export const formSteps = {
  1: {
    question: "Was möchtest du aktuell verbessern?",
    options: [
      "Mehr Sichtbarkeit",
      "Regelmäßig Content",
      "Professioneller Social-Media-Auftritt",
      "Mehr Anfragen",
      "Werbeanzeigen",
      "Social Media komplett abgeben",
      "Noch nicht sicher",
    ],
  },
  2: {
    question: "Wobei brauchst du Unterstützung?",
    options: [
      "Social Media Betreuung",
      "Content Produktion",
      "Video & Foto",
      "Reels",
      "Ads",
      "Komplettbetreuung",
      "Noch nicht sicher",
    ],
  },
  3: {
    question: "Wie sieht dein aktueller Auftritt aus?",
    options: [
      "Wir posten regelmäßig",
      "Wir posten gelegentlich",
      "Wir haben wenig Content",
      "Wir starten gerade neu",
      "Wir haben bereits eine Agentur",
    ],
  },
  4: {
    question: "Wie schnell möchtest du starten?",
    options: ["Sofort", "Innerhalb 30 Tagen", "1–3 Monate", "Später"],
  },
} as const;
