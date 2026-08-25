# Obscura – Website Relaunch

Relaunch der Website der **Obscura Digital Marketing GmbH** (Berlin) –
Social-Media-, Content- & Performance-Agentur. Ziel: langfristige
Social-Media-Retainer-Kunden gewinnen, indem Obscura als externes
Social-Media-Team positioniert wird.

Live-Domain (unverändert): <https://www.obscura-berlin.de>

## Tech-Stack

- **Next.js 15** (App Router, statisch/SSG generiert)
- **TypeScript**
- **Tailwind CSS** – Farbsystem als Design-Tokens
- **Framer Motion** – Scroll-, Parallax- und Chart-Animationen
- Kein CMS-Zwang: alle Inhalte liegen in `lib/` und sind leicht austauschbar

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Build lokal servieren
```

## Projektstruktur

```
app/
  layout.tsx        # SEO-Metadaten, Schema.org (Organization/LocalBusiness/WebSite)
  page.tsx          # Homepage (komponiert alle Sektionen)
  [slug]/page.tsx   # SEO-Landingpages (datengetrieben, FAQ- + Breadcrumb-Schema)
  impressum/        # Rechtstexte (PLACEHOLDER)
  datenschutz/
  sitemap.ts        # dynamische sitemap.xml
  robots.ts         # robots.txt
components/         # Header, Hero, Ticker, ServiceSystem, Bento, Reporting,
                    # ContentLibrary, ImageFilm, Process, Projects, Team,
                    # Testimonials, LongTerm, ContactCTA (Multi-Step-Formular) …
lib/
  site.ts           # zentrale Inhalte (Nav, Leistungen, Reviews, Team …)
  landing.ts        # Inhalte der SEO-Landingpages
```

## ⚠️ Platzhalter durch echte Obscura-Daten ersetzen

Es wurden **keine** Kundennamen, Zahlen, Reichweiten oder Ergebnisse erfunden.
Vor dem Livegang müssen alle mit `PLACEHOLDER` bzw. `DEMO DATA` markierten
Stellen ersetzt werden:

| Ort | Zu ersetzen |
| --- | --- |
| `lib/site.ts` | Kontaktdaten, Social-Links, Kundenlogos, Team, Reviews, Projekte |
| `lib/landing.ts` | ggf. Feinschliff der Landingpage-Texte |
| `app/impressum/page.tsx` | vollständige Pflichtangaben (§ 5 DDG) |
| `app/datenschutz/page.tsx` | rechtssichere Datenschutzerklärung (DSGVO) |
| `components/*` (`.ph-media`) | echte Videos/Bilder statt Gradient-Platzhalter |
| `components/Reporting.tsx` | „DEMO DATA" – keine echten Zahlen verwenden |

### Medien

Die Bild-/Video-Flächen sind performante CSS-Gradient-Platzhalter
(`.ph-media`, Komponente `PlaceholderMedia`). Für echte Medien:
`<video>` mit `poster`, `preload="none"`, `muted`, `playsinline` und
Lazy-Loading (IntersectionObserver) einsetzen bzw. `next/image` mit
AVIF/WebP und `srcset`.

### Formular-Anbindung

Das Multi-Step-Formular (`components/MultiStepForm.tsx`) zeigt aktuell einen
Erfolgs-Screen. Der `submit`-Handler muss an ein echtes Backend / CRM /
E-Mail-Endpoint angebunden werden.

## SEO

- Meta Title/Description, Canonical, Open Graph & Twitter Cards
- `sitemap.xml`, `robots.txt`
- Schema.org: Organization, LocalBusiness, WebSite, FAQPage, BreadcrumbList
- 301-Redirects für Alt-URLs in `next.config.mjs` (mit echten Alt-URLs ergänzen)
- SEO-Landingpages: Social Media Agentur/Betreuung Berlin, Content-/Video-
  produktion Berlin, Reels-Agentur, Meta-Ads, Performance Marketing

## Accessibility & Performance

- `prefers-reduced-motion` wird respektiert
- Tastaturnavigation, sichtbare Focus-States, Skip-Link, ARIA-Labels
- feste Aspect-Ratios gegen Layout-Shifts (CLS)
- statisches Prerendering aller Seiten
