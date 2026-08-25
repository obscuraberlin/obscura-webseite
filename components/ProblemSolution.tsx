"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui";

const business = ["Kunden", "Team", "Vertrieb", "Produkt", "Service", "Unternehmensführung"];
const obscura = [
  "Strategie", "Planung", "Shooting", "Video", "Foto", "Reels",
  "Posting", "Community", "Ads", "Reporting", "Optimierung",
];

export default function ProblemSolution() {
  return (
    <section className="bg-soft py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="text-display font-extrabold">
            Du konzentrierst dich
            <br />
            auf dein Business.
          </h2>
          <p className="mt-3 text-display font-extrabold text-ink/35">
            Wir kümmern uns
            <br />
            um den Rest.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Column title="Dein Business" items={business} muted />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid place-items-center"
          >
            <div className="grid h-32 w-32 place-items-center rounded-full border-2 border-lime bg-ink text-center text-surface">
              <span className="px-4 text-sm font-bold leading-tight">
                1 Ansprech&shy;partner
              </span>
            </div>
          </motion.div>
          <Column title="Obscura" items={obscura} />
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  items,
  muted = false,
}: {
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-card border p-6 ${
        muted ? "border-line bg-surface" : "border-ink bg-ink text-surface"
      }`}
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className={`rounded-full px-3 py-1.5 text-sm ${
              muted
                ? "bg-soft text-ink/70"
                : "bg-white/[0.06] text-surface/80"
            }`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
