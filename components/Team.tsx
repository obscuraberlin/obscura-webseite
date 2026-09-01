import { team } from "@/lib/site";
import { PlaceholderMedia, Reveal } from "./ui";

export default function Team() {
  return (
    <section id="team" className="bg-canvas py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            Über uns
          </p>
          <h2 className="mt-4 max-w-2xl text-display font-extrabold">
            Die Menschen,
            <br />
            die deine Marke kennen.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            Seit über 10 Jahren produzieren wir in Berlin Content mit Wirkung –
            klein genug für echte Nähe, stark genug für große Produktionen.
            Eigenes Office &amp; Fotostudio, ein festes Team und ein
            persönlicher Ansprechpartner. Wir produzieren für ganz Deutschland
            und den DACH-Raum.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Über 10 Jahre Erfahrung", "Eigenes Office & Fotostudio", "Festes Team", "Deutschland & DACH"].map(
              (f) => (
                <span
                  key={f}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink/70"
                >
                  {f}
                </span>
              ),
            )}
          </div>
        </Reveal>

        {/* Echtes Foto: Office & Fotostudio in Berlin */}
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-card border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/studio/office.jpg"
              alt="Office und Fotostudio von Obscura in Berlin"
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* mobil swipebar, Desktop Grid */}
        <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {team.map((m, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="w-56 shrink-0 md:w-auto"
            >
              <div className="group overflow-hidden rounded-card border border-line bg-surface">
                <PlaceholderMedia
                  tone={m.tone}
                  className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">{m.name}</h3>
                  <p className="text-sm text-ink/55">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
