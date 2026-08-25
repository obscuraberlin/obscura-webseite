"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Reveal } from "./ui";

const bars = [38, 52, 44, 66, 58, 78, 92];
const metrics = ["Reichweite", "Profilbesuche", "Engagement", "Follower", "Website Klicks", "Anfragen", "Ad Performance", "Traffic Quellen"];

export default function Reporting() {
  return (
    <section id="wissen" className="bg-ink py-24 text-surface">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <h2 className="text-display font-extrabold">
              Du siehst,
              <br />
              <span className="text-lime">was wirkt.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-surface/70">
              Jeden Monat bekommst du einen klaren Überblick über Reichweite,
              Interaktionen, Wachstum und Kampagnenperformance.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {metrics.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-surface/70"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard-Platzhalter */}
        <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold">Performance Überblick</span>
            <span className="rounded-full bg-lime/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime">
              Demo Data
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Donut />
            <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <span className="text-xs text-surface/50">Reichweite</span>
              <Count className="text-3xl font-extrabold text-lime" to={230} suffix="%" />
              <span className="text-xs text-surface/40">Platzhalter · Demo</span>
            </div>
          </div>

          {/* animiertes Balkendiagramm */}
          <div className="mt-3 flex h-32 items-end gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-4">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-lime/80"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Donut() {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-4">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 88 88" className="h-full w-full -rotate-90">
          <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="9" />
          <motion.circle
            cx="44" cy="44" r={r} fill="none" stroke="#C7FF18" strokeWidth="9" strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c * 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <Count className="text-xl font-extrabold" to={75} suffix="%" />
        </div>
      </div>
      <span className="mt-2 text-xs text-surface/40">Engagement · Demo</span>
    </div>
  );
}

function Count({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `+${Math.round(v)}${suffix}`);
  return (
    <motion.span
      className={className}
      onViewportEnter={() => animate(mv, to, { duration: 1.4, ease: "easeOut" })}
      viewport={{ once: true }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}
