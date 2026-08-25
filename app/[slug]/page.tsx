import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { ArrowCTA, Reveal } from "@/components/ui";
import { landingBySlug, landings } from "@/lib/landing";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = landingBySlug(slug);
  if (!l) return {};
  return {
    title: l.title,
    description: l.description,
    alternates: { canonical: `/${l.slug}` },
    openGraph: { title: l.title, description: l.description, url: `${site.domain}/${l.slug}` },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = landingBySlug(slug);
  if (!l) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: site.domain },
      { "@type": "ListItem", position: 2, name: l.keyword, item: `${site.domain}/${l.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: l.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-x pb-16">
          <nav className="mb-6 text-xs text-ink/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">Start</Link> / {l.keyword}
          </nav>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
              {l.keyword}
            </p>
            <h1 className="mt-4 max-w-3xl text-hero font-extrabold">{l.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">{l.intro}</p>
            <div className="mt-8">
              <ArrowCTA href="/#kontakt" variant="dark">Erstgespräch anfragen</ArrowCTA>
            </div>
          </Reveal>
        </section>

        <section className="bg-soft py-20">
          <div className="container-x">
            <h2 className="text-display font-extrabold">Unsere Leistungen</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {l.services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 0.08}>
                  <div className="h-full rounded-card border border-line bg-surface p-6">
                    <span className="h-2 w-2 rounded-full bg-lime" />
                    <h3 className="mt-4 font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink/60">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-display font-extrabold">Warum Obscura?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {l.reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-lg text-ink/75">
                    <span className="mt-1 text-lime">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="bg-canvas py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-display font-extrabold">Häufige Fragen</h2>
            <div className="mt-8 divide-y divide-line">
              {l.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                    <span className="flex items-center justify-between">
                      {f.q}
                      <span className="text-lime transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-20 text-surface">
          <div className="container-x text-center">
            <h2 className="text-display font-extrabold">
              Bereit für mehr Sichtbarkeit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-surface/70">
              Lass uns in einem unverbindlichen Gespräch herausfinden, wie wir
              dein Unternehmen gemeinsam nach vorne bringen.
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowCTA href="/#kontakt" variant="lime">Erstgespräch anfragen</ArrowCTA>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
