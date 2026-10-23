"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/80 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          OBSCURA<sup className="text-lime">®</sup>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#kontakt"
            className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-black md:inline-flex"
          >
            Erstgespräch anfragen →
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-canvas px-6 pt-24 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-2xl font-semibold tracking-tight"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-surface"
        >
          Erstgespräch anfragen →
        </Link>
      </div>
    </header>
  );
}
