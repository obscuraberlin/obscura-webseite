"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { formSteps } from "@/lib/site";

type Answers = {
  ziel?: string;
  support?: string;
  status?: string;
  start?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  instagram: string;
  message: string;
};

const empty: Answers = {
  name: "", company: "", email: "", phone: "",
  website: "", instagram: "", message: "",
};

const stepKeys: (keyof Answers)[] = ["ziel", "support", "status", "start"];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(empty);
  const [done, setDone] = useState(false);
  const total = 5;

  const pick = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => Math.min(s + 1, total)), 180);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: An echtes Backend / CRM / E-Mail-Endpoint anbinden.
    setDone(true);
  };

  if (done) return <SuccessScreen />;

  return (
    <div className="rounded-xl2 border border-line bg-surface p-6 shadow-sm md:p-10">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-ink/50">
          <span>Schritt {step} von {total}</span>
          <span>{Math.round((step / total) * 100)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-soft">
          <motion.div
            className="h-full rounded-full bg-lime"
            animate={{ width: `${(step / total) * 100}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
        >
          {step <= 4 ? (
            <OptionStep
              question={formSteps[step as 1 | 2 | 3 | 4].question}
              options={[...formSteps[step as 1 | 2 | 3 | 4].options]}
              selected={answers[stepKeys[step - 1]] as string | undefined}
              onPick={(v) => pick(stepKeys[step - 1], v)}
            />
          ) : (
            <ContactStep answers={answers} setAnswers={setAnswers} onSubmit={submit} />
          )}
        </motion.div>
      </AnimatePresence>

      {step > 1 && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mt-6 text-sm font-medium text-ink/50 hover:text-ink"
        >
          ← Zurück
        </button>
      )}
    </div>
  );
}

function OptionStep({
  question,
  options,
  selected,
  onPick,
}: {
  question: string;
  options: string[];
  selected?: string;
  onPick: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-6 text-2xl font-extrabold tracking-tight md:text-3xl">
        {question}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onPick(o)}
            className={`rounded-xl border px-5 py-4 text-left text-base font-medium transition-all ${
              selected === o
                ? "border-ink bg-ink text-surface"
                : "border-line bg-canvas hover:border-ink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ContactStep({
  answers,
  setAnswers,
  onSubmit,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const set = (k: keyof Answers) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setAnswers((a) => ({ ...a, [k]: e.target.value }));

  return (
    <form onSubmit={onSubmit}>
      <h3 className="mb-6 text-2xl font-extrabold tracking-tight md:text-3xl">
        Fast geschafft – deine Kontaktdaten.
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name *" value={answers.name} onChange={set("name")} required />
        <Field label="Unternehmen *" value={answers.company} onChange={set("company")} required />
        <Field label="E-Mail *" type="email" value={answers.email} onChange={set("email")} required />
        <Field label="Telefon" type="tel" value={answers.phone} onChange={set("phone")} />
        <Field label="Website" value={answers.website} onChange={set("website")} />
        <Field label="Instagram (optional)" value={answers.instagram} onChange={set("instagram")} />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink/70">
          Projektbeschreibung (optional)
        </label>
        <textarea
          value={answers.message}
          onChange={set("message")}
          rows={3}
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 outline-none focus:border-ink"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-surface transition-colors hover:bg-black sm:w-auto"
      >
        Erstgespräch anfragen →
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-line bg-canvas px-4 py-3 outline-none focus:border-ink"
      />
    </label>
  );
}

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-xl2 border border-line bg-ink p-10 text-center text-surface md:p-16"
    >
      <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-lime text-2xl text-ink">
        ✓
      </div>
      <h3 className="text-3xl font-extrabold tracking-tight">Danke.</h3>
      <p className="mt-2 text-xl font-bold text-lime">
        Wir schauen uns deinen aktuellen Auftritt an.
      </p>
      <p className="mx-auto mt-4 max-w-md text-surface/70">
        Wir melden uns persönlich bei dir und besprechen gemeinsam, welche
        nächsten Schritte für dein Unternehmen sinnvoll sind.
      </p>
    </motion.div>
  );
}
