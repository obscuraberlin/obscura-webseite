import { Reveal } from "./ui";

const advantages = [
  "Kontinuität",
  "Wiedererkennung",
  "Lerneffekt",
  "Bessere Creatives",
  "Bessere Daten",
  "Schnellere Umsetzung",
  "Stärkere Zusammenarbeit",
];

export default function LongTerm() {
  return (
    <section className="bg-canvas py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="text-display font-extrabold">
            Guter Content
            <br />
            entsteht nicht einmal.
          </h2>
          <p className="mt-3 text-display font-extrabold text-lime">
            Starke Marken
            <br />
            entstehen kontinuierlich.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-ink/70">
            Deine Zielgruppe muss deine Marke regelmäßig sehen, verstehen und
            wiedererkennen. Deshalb arbeiten wir nicht nur projektbezogen,
            sondern bauen gemeinsam einen langfristigen Social-Media-Auftritt
            auf.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {advantages.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink/70"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
