import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#team" },
      { label: "Projekte", href: "#projekte" },
      { label: "Karriere", href: "#kontakt" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { label: "Social Media Betreuung", href: "#leistungen" },
      { label: "Content Produktion", href: "#content" },
      { label: "Video Produktion", href: "#content" },
      { label: "Werbeanzeigen", href: "#leistungen" },
      { label: "Performance", href: "#wissen" },
    ],
  },
  {
    title: "Wissen",
    links: [
      { label: "Blog", href: "#wissen" },
      { label: "Ressourcen", href: "#wissen" },
      { label: "FAQ", href: "#wissen" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Cookies", href: "/datenschutz#cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-surface">
      <div className="container-x">
        <div className="grid gap-10 pb-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <p className="text-2xl font-extrabold">
              OBSCURA<sup className="text-lime">®</sup>
            </p>
            <p className="mt-3 max-w-xs text-sm text-surface/60">
              {site.tagline} Deine Social-Media-Agentur aus {site.city} für
              monatliche Betreuung, Content und Performance.
            </p>
            <div className="mt-6 space-y-1 text-sm text-surface/70">
              {/* PLACEHOLDER: echte Kontaktdaten */}
              <p>{site.phone}</p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-lime">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-surface/40">
                {c.title}
              </h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-surface/70 transition-colors hover:text-lime"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-surface/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="flex gap-4">
            {/* PLACEHOLDER: nur real vorhandene Profile verlinken */}
            <a href={site.social.instagram} className="hover:text-lime" aria-label="Instagram">Instagram</a>
            <a href={site.social.tiktok} className="hover:text-lime" aria-label="TikTok">TikTok</a>
            <a href={site.social.linkedin} className="hover:text-lime" aria-label="LinkedIn">LinkedIn</a>
            <a href={site.social.youtube} className="hover:text-lime" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
