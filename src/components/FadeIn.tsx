"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction to fade from: "up" (default), "left", "right", "none" */
  direction?: "up" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const reduced = useReducedMotion();

  const offset = 20;
  const initial = reduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === "up" ? offset : 0,
        x: direction === "left" ? -offset : direction === "right" ? offset : 0,
      };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
