const items = [
  "Reels", "Content", "Social Media", "Ads", "Performance",
  "Video", "Foto", "Strategie", "Wachstum",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-[2deg] scale-105 overflow-hidden border-y border-ink/10 bg-lime py-3.5">
      <div className="flex w-max animate-ticker whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-6 text-base font-bold uppercase tracking-tight text-ink"
          >
            {t} <span className="mx-4 text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
