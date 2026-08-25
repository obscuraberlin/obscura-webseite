/**
 * Zentrale Inhalts- und Konfigurationsdatei.
 *
 * WICHTIG: Alle mit "PLACEHOLDER" markierten Werte müssen durch echte
 * Obscura-Daten (obscura-berlin.de) ersetzt werden. Es wurden bewusst KEINE
 * Kundennamen, Zahlen, Reichweiten oder Ergebnisse erfunden – die hier
 * hinterlegten Beispielwerte stammen aus dem vom Kunden gelieferten Design-
 * Entwurf und sind als Platzhalter zu verstehen.
 */

export const site = {
  name: "OBSCURA",
  legalName: "Obscura Digital Marketing GmbH",
  domain: "https://www.obscura-berlin.de",
  city: "Berlin",
  tagline: "Social Media. Content. Performance.",
  email: "info@obscura-berlin.de",
  // PLACEHOLDER – echte Telefonnummer ergänzen
  phone: "+49 30 000000",
  phoneHref: "+4930000000",
  address: {
    street: "Flemingstr. 12",
    zip: "10557",
    city: "Berlin",
    country: "Deutschland",
  },
  social: {
    // PLACEHOLDER – nur echte, tatsächlich vorhandene Profile eintragen
    instagram: "https://instagram.com/obscura.berlin",
    linkedin: "https://www.linkedin.com/company/obscura-berlin",
    tiktok: "https://www.tiktok.com/@obscura.berlin",
    youtube: "https://www.youtube.com/@obscura.berlin",
  },
};

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#team" },
  { label: "Wissen", href: "#wissen" },
  { label: "Kontakt", href: "#kontakt" },
];

/** Kundenlogos – PLACEHOLDER: echte Referenzen von obscura-berlin.de verwenden */
export const clients = [
  "BMW",
  "ROLLS-ROYCE",
  "KENSINGTON",
  "RILLER & SCHNAUCK",
  "SIROKO",
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
 * Projekte – PLACEHOLDER. Keine Ergebnisse/Kennzahlen erfunden.
 * Mit echten Obscura-Cases inkl. Freigabe ersetzen.
 */
export const projects = [
  { client: "PLACEHOLDER Kunde", branche: "Automotive", leistung: "Reels Kampagne", tone: 1 },
  { client: "PLACEHOLDER Kunde", branche: "Immobilien", leistung: "Social Media Betreuung", tone: 3 },
  { client: "PLACEHOLDER Kunde", branche: "B2B", leistung: "Imagefilm Produktion", tone: 2 },
  { client: "PLACEHOLDER Kunde", branche: "Dienstleister", leistung: "Content Creation", tone: 4 },
];

/** Mini Success Stories – als Muster, später durch echte Stories ersetzen */
export const stories = [
  "Von einem Shooting zur monatlichen Betreuung.",
  "Regelmäßige Reels für konstanten Markenauftritt.",
  "Neuer Unternehmensfilm für Website und Vertrieb.",
  "Content + Ads für bessere Sichtbarkeit.",
  "Monatlicher Content für einen einheitlichen Auftritt.",
];

/** Team – PLACEHOLDER: echte Teamdaten verwenden, keine Personen erfinden */
export const team = [
  { name: "PLACEHOLDER Name", role: "Strategie & Beratung", tone: 1 },
  { name: "PLACEHOLDER Name", role: "Videoproduktion", tone: 2 },
  { name: "PLACEHOLDER Name", role: "Social Media Management", tone: 3 },
  { name: "PLACEHOLDER Name", role: "Performance & Ads", tone: 4 },
];

/**
 * Text-Reviews – PLACEHOLDER. Die Zitate stammen aus dem gelieferten
 * Design-Entwurf und sind durch echte, freigegebene Kundenstimmen zu ersetzen.
 */
export const reviews = [
  {
    quote:
      "Obscura hat unseren Social-Media-Auftritt auf ein neues Level gebracht. Mehr Reichweite, mehr Anfragen, mehr Kunden.",
    name: "PLACEHOLDER",
    company: "PLACEHOLDER Unternehmen",
    stars: 5,
  },
  {
    quote:
      "Professionell, kreativ und zuverlässig. Unser Content war noch nie so stark und unsere Kanäle performen besser denn je.",
    name: "PLACEHOLDER",
    company: "PLACEHOLDER Unternehmen",
    stars: 5,
  },
  {
    quote:
      "Seit wir mit Obscura arbeiten, haben wir eine deutlich höhere Sichtbarkeit und mehr qualifizierte Anfragen.",
    name: "PLACEHOLDER",
    company: "PLACEHOLDER Unternehmen",
    stars: 5,
  },
  {
    quote:
      "Ein tolles Team, das wirklich mitdenkt und unsere Marke perfekt in Szene setzt.",
    name: "PLACEHOLDER",
    company: "PLACEHOLDER Unternehmen",
    stars: 5,
  },
];

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
