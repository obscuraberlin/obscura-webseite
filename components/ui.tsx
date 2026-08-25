"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ArrowCTA({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "lime" | "ghost";
  className?: string;
}) {
  const styles = {
    dark: "bg-ink text-surface hover:bg-black",
    lime: "bg-lime text-ink hover:brightness-105",
    ghost: "bg-transparent text-ink border border-line hover:border-ink",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all ${styles} ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
      {children}
    </span>
  );
}

export function PlaceholderMedia({
  tone = 1,
  label,
  className = "",
  play = false,
}: {
  tone?: number;
  label?: string;
  className?: string;
  play?: boolean;
}) {
  return (
    <div
      className={`ph-media ph-tone-${tone} ${className}`}
      role="img"
      aria-label={label ? `${label} (Platzhalter-Medium)` : "Platzhalter-Medium"}
    >
      {play && (
        <span className="absolute left-1/2 top-1/2 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-ink shadow-lg">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
            <path d="M0 0l16 9L0 18z" />
          </svg>
        </span>
      )}
      {label && (
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
