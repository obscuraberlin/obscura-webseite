"use client";

import { useRef, useState } from "react";
import { contentFilters, films, reels } from "@/lib/site";
import { PlaceholderMedia, Reveal } from "./ui";

export default function ContentLibrary() {
  const [active, setActive] = useState("Alle");
  return (
    <section id="content" className="bg-canvas py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
            Content, der verbindet.
          </p>
          <h2 className="mt-4 max-w-2xl text-display font-extrabold">
            Content, der deine Marke
            <br />
            in Bewegung bringt.
          </h2>
        </Reveal>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {contentFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-ink text-surface"
                  : "border border-line bg-surface text-ink/70 hover:border-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <Rail title="Reels · 9:16" ratio="9/16">
          {reels.map((r) => (
            <RailCard key={r.title} ratio="9/16" tone={r.tone} label={r.title} category={r.category} img={r.img} />
          ))}
        </Rail>
        <Rail title="Filme · 16:9" ratio="16/9">
          {films.map((f) => (
            <RailCard key={f.title} ratio="16/9" tone={f.tone} label={f.title} category={f.category} img={f.img} wide />
          ))}
        </Rail>
      </div>
    </section>
  );
}

function Rail({
  title,
  children,
}: {
  title: string;
  ratio: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <div className="container-x">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-ink/50">
          {title}
        </h3>
        <div className="hidden gap-2 md:flex">
          <RailBtn onClick={() => scroll(-1)} label="Zurück">‹</RailBtn>
          <RailBtn onClick={() => scroll(1)} label="Weiter">›</RailBtn>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2"
      >
        {children}
      </div>
    </div>
  );
}

function RailBtn({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-lg text-ink/70 transition-colors hover:border-ink hover:text-ink"
    >
      {children}
    </button>
  );
}

function RailCard({
  tone,
  label,
  category,
  img,
  wide = false,
}: {
  ratio: string;
  tone: number;
  label: string;
  category: string;
  img?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl ${
        wide ? "w-[300px] md:w-[380px]" : "w-[180px] md:w-[210px]"
      }`}
    >
      <PlaceholderMedia
        tone={tone}
        play={!img}
        src={img}
        alt={`${category} – ${label}`}
        className={`w-full transition-transform duration-500 group-hover:scale-[1.04] ${
          wide ? "aspect-video" : "aspect-[9/16]"
        }`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-[10px] uppercase tracking-wider text-lime">{category}</p>
        <p className="text-sm font-semibold text-white">{label}</p>
      </div>
    </div>
  );
}
