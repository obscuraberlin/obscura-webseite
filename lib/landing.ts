/**
 * Inhalte für die SEO-Landingpages. Jede Seite hat eigenständigen Mehrwert
 * (keine dünnen Doorway-Pages). Texte sind redaktionell und frei von
 * erfundenen Kennzahlen/Kundennamen.
 */

export type Landing = {
  slug: string;
  title: string; // Meta Title
  h1: string;
  intro: string;
  description: string; // Meta Description
  keyword: string;
  services: { title: string; text: string }[];
  reasons: string[];
  faq: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "social-media-agentur-berlin",
    keyword: "Social Media Agentur Berlin",
    title: "Social Media Agentur Berlin | Content, Betreuung & Ads",
    h1: "Social Media Agentur aus Berlin.",
    description:
      "Obscura ist deine Social Media Agentur in Berlin: monatliche Betreuung, Content-Produktion und Werbeanzeigen aus einer Hand. Ein Team für Sichtbarkeit und Wachstum.",
    intro:
      "Wir übernehmen deinen gesamten Social-Media-Auftritt – von der Strategie über die Content-Produktion bis zur täglichen Umsetzung und Werbeanzeigen. Du bekommst ein festes Team, das deine Marke kennt und jeden Monat weiterentwickelt.",
    services: [
      { title: "Strategie & Redaktionsplan", text: "Klare Content-Strategie mit messbaren Zielen und planbarem Output." },
      { title: "Content Produktion", text: "Reels, Videos, Fotos und Stories – hochwertig und markengerecht." },
      { title: "Betreuung & Community", text: "Wir posten regelmäßig und betreuen deine Community." },
      { title: "Ads & Reporting", text: "Meta- und Instagram-Ads plus transparente monatliche Auswertung." },
    ],
    reasons: [
      "Ein Ansprechpartner statt vieler Dienstleister",
      "Planbarer, regelmäßiger Content jeden Monat",
      "Strategie, Content, Social Media und Ads aus einer Hand",
      "Transparente Reports statt Bauchgefühl",
    ],
    faq: [
      { q: "Was macht eine Social Media Agentur?", a: "Wir übernehmen Strategie, Content-Produktion, Veröffentlichung, Community-Management, Werbeanzeigen und Reporting – kontinuierlich und aus einer Hand." },
      { q: "Arbeitet Obscura deutschlandweit?", a: "Ja. Unser Sitz ist Berlin, wir betreuen Kunden deutschlandweit remote und vor Ort." },
      { q: "Gibt es Mindestlaufzeiten?", a: "Wir arbeiten in monatlicher Betreuung. Details besprechen wir individuell im Erstgespräch." },
    ],
  },
  {
    slug: "social-media-betreuung-berlin",
    keyword: "Social Media Betreuung Berlin",
    title: "Social Media Betreuung Berlin | monatlich & planbar",
    h1: "Social Media Betreuung – monatlich.",
    description:
      "Monatliche Social-Media-Betreuung aus Berlin: Redaktionsplan, Content, Posting, Community und Reporting. Dein externes Social-Media-Team bei Obscura.",
    intro:
      "Kontinuierliche Betreuung statt Einzelprojekte: Wir planen, produzieren und veröffentlichen deinen Content – Monat für Monat. So bleibt dein Auftritt konsistent und deine Zielgruppe erkennt deine Marke wieder.",
    services: [
      { title: "Redaktionsplan", text: "Du weißt vorab, was produziert und veröffentlicht wird." },
      { title: "Regelmäßiges Posting", text: "Wir veröffentlichen zur richtigen Zeit auf den richtigen Kanälen." },
      { title: "Community Management", text: "Kommentare und relevante Interaktionen werden betreut." },
      { title: "Monatliches Reporting", text: "Transparente Zahlen zu Reichweite, Engagement und Wachstum." },
    ],
    reasons: [
      "Fester Ansprechpartner, der dein Unternehmen kennt",
      "Konsistenter Auftritt durch kontinuierliche Betreuung",
      "Weniger interner Aufwand für dein Team",
      "Lerneffekt: bessere Creatives und Daten über die Zeit",
    ],
    faq: [
      { q: "Was umfasst die monatliche Betreuung?", a: "Strategie, Content-Produktion, Veröffentlichung, Community-Betreuung, optional Ads und ein monatliches Reporting." },
      { q: "Kann ich Social Media komplett abgeben?", a: "Ja. Wir werden zu deinem externen Social-Media-Team und übernehmen die laufende Arbeit." },
    ],
  },
  {
    slug: "content-produktion-berlin",
    keyword: "Content Produktion Berlin",
    title: "Content Produktion Berlin | Reels, Video & Foto",
    h1: "Content Produktion in Berlin.",
    description:
      "Content-Produktion aus Berlin: Reels, Videos, Fotos und Stories für deinen Social-Media-Auftritt – hochwertig, markengerecht und regelmäßig.",
    intro:
      "Wir produzieren Content, der deine Marke in Bewegung bringt: von Reels und Kurzvideos über Fotos bis zu Stories. Planbar, hochwertig und passend zu deiner Zielgruppe.",
    services: [
      { title: "Reels & Kurzvideo", text: "Hochkant-Content, der auf Social Media performt." },
      { title: "Foto", text: "Produkt-, Team- und Imageaufnahmen für alle Kanäle." },
      { title: "Stories & Snippets", text: "Formate für den täglichen Auftritt." },
      { title: "Behind the Scenes", text: "Authentische Einblicke, die Vertrauen schaffen." },
    ],
    reasons: [
      "Regelmäßiger Content statt Einzelaufnahmen",
      "Markengerechte Bildsprache",
      "Formate für Instagram, TikTok, LinkedIn & YouTube",
      "Produktion und Distribution aus einer Hand",
    ],
    faq: [
      { q: "Produziert ihr auch einmalig?", a: "Ja, aber der größte Effekt entsteht durch regelmäßigen Content im Rahmen einer laufenden Betreuung." },
      { q: "Wo wird gedreht?", a: "Vor Ort bei dir, an passenden Locations oder im Studio – je nach Projekt." },
    ],
  },
  {
    slug: "videoproduktion-berlin",
    keyword: "Videoproduktion Berlin",
    title: "Videoproduktion Berlin | Imagefilm & Social Video",
    h1: "Videoproduktion in Berlin.",
    description:
      "Professionelle Videoproduktion aus Berlin: Imagefilme, Unternehmensfilme, Reels und Social Videos – von Konzept bis Schnitt.",
    intro:
      "Vom Imagefilm bis zum Social-Video: Wir entwickeln, drehen und schneiden Videos, die deine Marke, deine Menschen und deine Leistungen zeigen – authentisch und hochwertig.",
    services: [
      { title: "Imagefilm / Unternehmensfilm", text: "Zeig, wer du bist – überzeuge, bevor du sprichst." },
      { title: "Social Video & Reels", text: "Kurzformate, die für deine Marke arbeiten." },
      { title: "Produktvideo", text: "Produkte und Leistungen verständlich in Szene gesetzt." },
      { title: "Drohnenaufnahmen", text: "Perspektiven, die fesseln." },
    ],
    reasons: [
      "Konzept, Dreh und Schnitt aus einer Hand",
      "Video als Baustein deiner Social-Media-Strategie",
      "Wiederverwendbar für Website, Ads, Sales & Recruiting",
      "Erfahrung mit anspruchsvollen Marken",
    ],
    faq: [
      { q: "Wofür kann ich einen Imagefilm nutzen?", a: "Für Website, Instagram, LinkedIn, YouTube, Ads, Vertrieb, Recruiting und Events." },
      { q: "Wie lange dauert eine Produktion?", a: "Das hängt vom Umfang ab. Nach dem Erstgespräch bekommst du einen konkreten Zeitplan." },
    ],
  },
  {
    slug: "reels-agentur",
    keyword: "Reels Agentur",
    title: "Reels Agentur | Kurzvideo-Content, der performt",
    h1: "Deine Reels Agentur.",
    description:
      "Reels-Agentur aus Berlin: Konzept, Produktion und Distribution von Kurzvideos für Instagram, TikTok & Co. – regelmäßig und markengerecht.",
    intro:
      "Reels sind der schnellste Weg zu mehr Reichweite. Wir entwickeln Konzepte, produzieren regelmäßig Kurzvideos und sorgen dafür, dass sie zu deiner Marke passen und ausgespielt werden.",
    services: [
      { title: "Reel-Konzepte", text: "Ideen und Hooks, die zu deiner Zielgruppe passen." },
      { title: "Produktion", text: "Dreh und Schnitt hochkant im 9:16-Format." },
      { title: "Serien & Formate", text: "Wiedererkennbare Formate für konstanten Output." },
      { title: "Distribution", text: "Veröffentlichung und optionale Bewerbung." },
    ],
    reasons: [
      "Regelmäßige Reels statt einzelner Clips",
      "Formate mit Wiedererkennungswert",
      "Optimiert für Reichweite und Engagement",
      "Teil deiner monatlichen Betreuung",
    ],
    faq: [
      { q: "Wie viele Reels pro Monat?", a: "Das legen wir gemeinsam anhand deiner Ziele und Ressourcen fest." },
      { q: "Übernehmt ihr auch die Veröffentlichung?", a: "Ja, auf Wunsch inklusive Posting und Community-Betreuung." },
    ],
  },
  {
    slug: "meta-ads-agentur-berlin",
    keyword: "Meta Ads Agentur Berlin",
    title: "Meta Ads Agentur Berlin | Instagram & Facebook Ads",
    h1: "Meta Ads Agentur aus Berlin.",
    description:
      "Meta Ads Agentur aus Berlin: Instagram- und Facebook-Werbeanzeigen mit Strategie, kreativen Ads und laufender Optimierung – verknüpft mit deinem Content.",
    intro:
      "Werbeanzeigen wirken am besten, wenn sie mit deinem Content zusammenspielen. Wir planen, erstellen und betreuen Meta-Ads – vom Targeting über die Creatives bis zur laufenden Optimierung.",
    services: [
      { title: "Ads-Strategie", text: "Ziele, Zielgruppen und Funnel sauber aufgesetzt." },
      { title: "Creatives", text: "Anzeigen aus deinem eigenen Content statt Stockmaterial." },
      { title: "Targeting & Setup", text: "Kampagnenstruktur und Zielgruppen-Setup." },
      { title: "Optimierung & Reporting", text: "Laufende Optimierung und transparente Auswertung." },
    ],
    reasons: [
      "Ads und Content aus einer Hand",
      "Creatives, die zu deiner Marke passen",
      "Fokus auf relevante Anfragen statt reiner Klicks",
      "Transparente Reports zu Ergebnissen",
    ],
    faq: [
      { q: "Ab welchem Budget lohnen sich Ads?", a: "Das besprechen wir individuell – entscheidend ist das Verhältnis von Ziel, Zielgruppe und Budget." },
      { q: "Nutzt ihr meinen bestehenden Content?", a: "Ja. Am besten funktionieren Ads mit Creatives, die wir im Rahmen der Betreuung produzieren." },
    ],
  },
  {
    slug: "performance-marketing-berlin",
    keyword: "Performance Marketing Berlin",
    title: "Performance Marketing Berlin | messbar & datengetrieben",
    h1: "Performance Marketing aus Berlin.",
    description:
      "Performance Marketing aus Berlin: datengetriebene Kampagnen, Content und Reporting für mehr Sichtbarkeit, Anfragen und Wachstum.",
    intro:
      "Wir verbinden kreativen Content mit datengetriebener Optimierung. So wird aus Sichtbarkeit messbares Wachstum – transparent nachvollziehbar in monatlichen Reports.",
    services: [
      { title: "Kampagnen", text: "Aufsetzen und Betreuen von Werbekampagnen." },
      { title: "Content für Performance", text: "Creatives, die auf Ergebnisse einzahlen." },
      { title: "Tracking & Analyse", text: "Reichweite, Engagement, Leads und Traffic im Blick." },
      { title: "Kontinuierliche Optimierung", text: "Testen, auswerten, verbessern – Monat für Monat." },
    ],
    reasons: [
      "Content und Performance zusammengedacht",
      "Entscheidungen auf Basis von Daten",
      "Transparente monatliche Auswertung",
      "Langfristige, planbare Zusammenarbeit",
    ],
    faq: [
      { q: "Was unterscheidet euch von reinen Ads-Agenturen?", a: "Wir produzieren den Content selbst und denken Strategie, Creatives, Ads und Reporting zusammen." },
      { q: "Welche Kennzahlen bekomme ich?", a: "Reichweite, Profilbesuche, Engagement, Website-Klicks, Anfragen und Ad-Performance – transparent aufbereitet." },
    ],
  },
];

export const landingBySlug = (slug: string) =>
  landings.find((l) => l.slug === slug);
