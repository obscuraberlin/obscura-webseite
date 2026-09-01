"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowCTA, PlaceholderMedia } from "./ui";

const cards = [
  { label: "Automotive Reel", tone: 1, className: "left-0 top-0 rotate-[-4deg]" },
  { label: "Behind the Scenes", tone: 2, className: "right-6 top-10 rotate-[3deg]" },
  { label: "Immobilien", tone: 3, className: "left-10 bottom-8 rotate-[2deg]" },
  { label: "Drohnenaufnahme", tone: 4, className: "right-0 bottom-0 rotate-[-3deg]" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      ref={ref}
      id="hauptinhalt"
      className="relative overflow-hidden pt-28 md:pt-36"
    >
      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <motion.div style={{ y: yText }}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            Social Media · Content · Performance
          </p>
          <h1 className="text-hero font-extrabold">
            Mehr als Content.
            <br />
            Ein System für dein
            <br />
            <span className="text-lime [text-shadow:0_1px_0_rgba(0,0,0,0.08)]">
              monatliches Wachstum.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Wir übernehmen deine Social-Media-Betreuung, produzieren regelmäßig
            hochwertigen Content, veröffentlichen deine Inhalte und entwickeln
            deinen Auftritt jeden Monat weiter.
          </p>
          <p className="mt-4 font-medium text-ink">
            Ein Ansprechpartner. Ein Team. Ein klarer Plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ArrowCTA href="#kontakt" variant="dark">
              Erstgespräch anfragen
            </ArrowCTA>
            <ArrowCTA href="#content" variant="ghost">
              Unsere Arbeit ansehen
            </ArrowCTA>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full bg-lime"
              aria-hidden
            />
            <p className="text-sm text-ink/60">
              Vertrauen von Marken wie{" "}
              <span className="font-semibold text-ink/80">
                Rolls-Royce Berlin
              </span>{" "}
              &amp;{" "}
              <span className="font-semibold text-ink/80">
                Riller &amp; Schnauck
              </span>
            </p>
          </div>
        </motion.div>

        {/* Content-Stack */}
        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-[460px] lg:block">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              style={{ y: i % 2 === 0 ? yCard1 : yCard2 }}
              className={`absolute h-[62%] w-[54%] rounded-2xl shadow-2xl ${c.className}`}
            >
              <PlaceholderMedia
                tone={c.tone}
                label={c.label}
                play
                className="h-full w-full rounded-2xl border border-white/10"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: swipebare Reels */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 lg:hidden">
          {cards.map((c) => (
            <div key={c.label} className="w-40 shrink-0 snap-center">
              <PlaceholderMedia
                tone={c.tone}
                label={c.label}
                play
                className="aspect-[9/16] w-full rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
