import { clients } from "@/lib/site";
import { SectionLabel } from "./ui";

export default function ClientLogos() {
  return (
    <section className="border-b border-line bg-canvas py-14">
      <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <SectionLabel>Vertraut von Marken und Unternehmen</SectionLabel>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 md:justify-end">
          {clients.map((c) => (
            <span
              key={c}
              className="text-lg font-bold tracking-tight text-ink/45 transition-colors hover:text-ink/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
