import { ArrowCTA, PlaceholderMedia, Reveal } from "./ui";

const benefits = [
  { title: "Vertrauen", text: "Menschen kaufen von Unternehmen, denen sie vertrauen." },
  { title: "Erklärung", text: "Ein Video erklärt komplexe Leistungen schneller." },
  {
    title: "Vielseitig",
    text: "Website, Instagram, LinkedIn, YouTube, Ads, Sales, Recruiting, Events.",
  },
];

export default function ImageFilm() {
  return (
    <section className="bg-surface py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <PlaceholderMedia
            tone={2}
            play
            label="Imagefilm"
            className="aspect-video w-full rounded-xl2 shadow-xl"
          />
        </Reveal>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            Imagefilm / Unternehmensfilm
          </p>
          <h2 className="mt-4 text-display font-extrabold">
            Zeig, wer du bist.
            <br />
            <span className="text-ink/40">Überzeuge,</span>
            <br />
            bevor du sprichst.
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Ein professioneller Unternehmensfilm zeigt deine Marke, deine
            Menschen und deine Leistungen – authentisch, hochwertig und
            verständlich.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
                <div>
                  <h3 className="font-bold">{b.title}</h3>
                  <p className="text-sm text-ink/60">{b.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ArrowCTA href="#kontakt" variant="dark">
              Imagefilm anfragen
            </ArrowCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
