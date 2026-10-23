import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Suchmaschinen und KI-Assistenten ausdruecklich erlauben.
   Die Namen stehen hier einzeln, weil manche Crawler nur nach ihrem
   eigenen Namen suchen und die Sammelregel ignorieren. */
const kiCrawler = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-Web", "Claude-SearchBot",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot", "Applebot-Extended",
  "Bingbot", "Amazonbot", "meta-externalagent",
  "cohere-ai", "YouBot", "DuckAssistBot", "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...kiCrawler.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
