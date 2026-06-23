"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  /** Render as block (default) — each instance is one masked line */
  className?: string;
}

/**
 * Editorial "line rises from behind a mask" reveal (Apple/luxury style).
 * Wrap each headline line in its own <MaskReveal> for a staggered effect.
 */
export default function MaskReveal({ children, delay = 0, className }: MaskRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  return (
    // Extra bottom padding keeps descenders (g, p, y) from being clipped
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
