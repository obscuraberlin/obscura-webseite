"use client";

import { motion } from "framer-motion";
import { system } from "@/lib/site";
import { ArrowCTA } from "./ui";

export default function ServiceSystem() {
  const left = system.slice(0, 3);
  const right = system.slice(3);

  return (
    <section id="leistungen" className="bg-ink py-24 text-surface">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">
            Wir kümmern uns.
          </p>
          <h2 className="mt-4 text-display font-extrabold">
            Dein kompletter Social-Media-Auftritt.
            <br />
            <span className="text-lime">Monatlich betreut.</span>
          </h2>
          <p className="mt-5 text-lg text-surface/70">
            Wir übernehmen Strategie, Content, Veröffentlichung und Optimierung –
            damit du dich auf dein Unternehmen konzentrieren kannst. Obscura wird
            zu deinem externen Social-Media-Team.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-8">
            {left.map((b, i) => (
              <Node key={b.title} {...b} delay={i * 0.15} align="left" />
            ))}
          </div>

          <Ring />

          <div className="flex flex-col gap-8">
            {right.map((b, i) => (
              <Node key={b.title} {...b} delay={0.45 + i * 0.15} align="right" />
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <ArrowCTA href="#content" variant="lime">
            Alle Leistungen entdecken
          </ArrowCTA>
        </div>
      </div>
    </section>
  );
}

function Ring() {
  const r = 90;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto grid h-56 w-56 place-items-center md:h-64 md:w-64">
      <svg viewBox="0 0 220 220" className="h-full w-full -rotate-90">
        <circle cx="110" cy="110" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
        <motion.circle
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke="#C7FF18"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * 0.12 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-surface/50">Dein</p>
        <p className="text-2xl font-extrabold text-lime">Wachstum</p>
      </div>
    </div>
  );
}

function Node({
  title,
  items,
  delay,
  align,
}: {
  title: string;
  items: string[];
  delay: number;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 ${
        align === "right" ? "lg:text-right" : ""
      }`}
    >
      <div
        className={`mb-2 flex items-center gap-2 ${
          align === "right" ? "lg:justify-end" : ""
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-lime" />
        <h3 className="font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-sm text-surface/55">{items.join(" · ")}</p>
    </motion.div>
  );
}
