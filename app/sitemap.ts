import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { landings } from "@/lib/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.domain}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
  const seoPages: MetadataRoute.Sitemap = landings.map((l) => ({
    url: `${site.domain}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  // Impressum/Datenschutz sind bewusst noindex und nicht in der Sitemap.
  return [...base, ...seoPages];
}
