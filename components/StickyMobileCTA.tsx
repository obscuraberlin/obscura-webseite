"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const kontakt = document.getElementById("kontakt");
      // ab etwas Scroll einblenden, im Formularbereich ausblenden
      const inForm = kontakt
        ? kontakt.getBoundingClientRect().top < window.innerHeight
        : false;
      setShow(y > 600 && !inForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#kontakt"
        className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-surface shadow-xl"
      >
        Erstgespräch anfragen →
      </a>
    </div>
  );
}
