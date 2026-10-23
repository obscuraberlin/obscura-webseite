import { reviews } from "@/lib/site";
import { PlaceholderMedia, Reveal } from "./ui";

export default function Testimonials() {
  // Keine erfundenen Kundenstimmen: Abschnitt bleibt aus, bis echte,
  // freigegebene Stimmen/Videos vorliegen.
  if (reviews.length === 0) return null;
  return (
    <section className="bg-soft py-24">
      <div className="container-x">
        {/* Video-Testimonials */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            Kundenstimmen
          </p>
          <h2 className="mt-4 text-display font-extrabold">
            Echte Stimmen.
            <br />
            Echte Partnerschaften.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <PlaceholderMedia
            tone={1}
            play
            label="Video-Testimonial (Platzhalter)"
            className="aspect-video w-full rounded-xl2"
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <PlaceholderMedia tone={3} play className="aspect-video w-full rounded-xl2" />
            <PlaceholderMedia tone={4} play className="aspect-video w-full rounded-xl2" />
          </div>
        </div>

        {/* Text-Reviews */}
        <Reveal>
          <h3 className="mt-20 text-display font-extrabold">
            Das sagen unsere Kunden.
          </h3>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-surface p-6">
                <div className="mb-3 text-lime" aria-label={`${r.stars} von 5 Sternen`}>
                  {"★".repeat(r.stars)}
                </div>
                <blockquote className="flex-1 text-sm text-ink/75">
                  „{r.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className={`ph-media ph-tone-${(i % 6) + 1} h-9 w-9 rounded-full`} />
                  <span>
                    <span className="block text-sm font-semibold">{r.name}</span>
                    <span className="block text-xs text-ink/50">{r.company}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
