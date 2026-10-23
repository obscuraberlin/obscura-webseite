"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/site";
import { Reveal } from "./ui";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="ablauf" className="bg-canvas py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            So arbeiten wir zusammen.
          </p>
          <h2 className="mt-4 text-display font-extrabold">
            Ein klarer Ablauf.
            <br />
            Volle Transparenz.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* Desktop-Linie */}
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-line md:block">
            <motion.div style={{ width }} className="h-full bg-lime" />
          </div>
          {/* Mobile-Linie */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-line md:hidden">
            <motion.div style={{ height }} className="w-full bg-lime" />
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16 md:pl-0"
              >
                <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border-2 border-lime bg-canvas font-bold md:relative md:mb-5">
                  {p.step}
                </div>
                <h3 className="font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{p.items.join(" · ")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
