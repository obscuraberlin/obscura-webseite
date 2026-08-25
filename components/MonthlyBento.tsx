import { monthly } from "@/lib/site";
import { Reveal } from "./ui";

const spanMap: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "",
};

export default function MonthlyBento() {
  return (
    <section className="bg-canvas py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="max-w-2xl text-display font-extrabold">
            Was du jeden Monat
            <br />
            von uns bekommst.
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {monthly.map((m, i) => (
            <Reveal
              key={m.title}
              delay={(i % 4) * 0.06}
              className={`flex flex-col justify-between rounded-card border border-line bg-surface p-6 transition-colors hover:border-ink/30 ${
                spanMap[m.span]
              } ${m.span === "lg" ? "bg-ink text-surface" : ""}`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  m.span === "lg" ? "text-lime" : "text-ink/40"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-6">
                <h3
                  className={`text-lg font-bold tracking-tight ${
                    m.span === "lg" ? "text-2xl" : ""
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    m.span === "lg" ? "text-surface/70" : "text-ink/60"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
