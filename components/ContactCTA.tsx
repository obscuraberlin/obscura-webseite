import MultiStepForm from "./MultiStepForm";
import { Reveal } from "./ui";

export default function ContactCTA() {
  return (
    <section id="kontakt" className="bg-surface py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display font-extrabold">
            Du brauchst keine weitere Agentur.
          </h2>
          <p className="mt-3 text-display font-extrabold text-ink/35">
            Du brauchst ein Team, das sich kümmert.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
            Von der nächsten Content-Idee bis zum monatlichen Reporting
            übernehmen wir die Arbeit, die sonst bei dir liegen bleibt.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Lass uns herausfinden, was deine Marke braucht.
              </h3>
              <p className="mt-2 text-ink/60">
                5 kurze Fragen. Danach wissen wir, wie wir dich am besten
                unterstützen können.
              </p>
            </div>
            <MultiStepForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
