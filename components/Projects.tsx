import { projects, stories } from "@/lib/site";
import { ArrowCTA, PlaceholderMedia, Reveal } from "./ui";

export default function Projects() {
  return (
    <section id="projekte" className="bg-ink py-24 text-surface">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">
              Aktuelle Projekte
            </p>
            <h2 className="mt-4 text-display font-extrabold">
              Projekte,
              <br />
              auf die wir stolz sind.
            </h2>
          </Reveal>
          <ArrowCTA href="#kontakt" variant="lime">
            Alle Projekte ansehen
          </ArrowCTA>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08}>
              <article className="group overflow-hidden rounded-card border border-white/10 bg-white/[0.02]">
                <div className="relative">
                  <PlaceholderMedia
                    tone={p.tone}
                    play
                    className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-wider text-lime">
                    {p.branche}
                  </p>
                  <h3 className="mt-1 font-bold">{p.leistung}</h3>
                  {/* PLACEHOLDER: echten Kunden + freigegebenes Ergebnis ergänzen */}
                  <p className="mt-1 text-sm text-surface/50">{p.client}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Mini Success Stories */}
        <div className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {stories.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex h-full items-start gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-surface/70">
                <span className="mt-0.5 text-lime">→</span>
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
