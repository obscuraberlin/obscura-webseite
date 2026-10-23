import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { landings } from "@/lib/landing";

/* Die fuenf Leistungsseiten werden als fertige HTML-Dateien aus public/
   ausgeliefert und muessen deshalb hier von Hand gefuehrt werden. */
const leistungsseiten = [
  "foto-videoproduktion.html",
  "werbeanzeigen-ads.html",
  "mitarbeitergewinnung.html",
  "marketing-beratung.html",
  "social-media-mitgliedschaft.html",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.domain}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
  const leistungen: MetadataRoute.Sitemap = leistungsseiten.map((datei) => ({
    url: `${site.domain}/${datei}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const seoPages: MetadataRoute.Sitemap = landings.map((l) => ({
    url: `${site.domain}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  // Impressum/Datenschutz sind bewusst noindex und nicht in der Sitemap.
  return [...base, ...leistungen, ...seoPages];
}
