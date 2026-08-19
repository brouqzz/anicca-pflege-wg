"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "clip";

const EASE = [0.22, 1, 0.36, 1] as const;

function motionState(variant: RevealVariant, reduced: boolean) {
  if (reduced) return { opacity: 0 };
  switch (variant) {
    case "left":
      return { opacity: 0, x: -48 };
    case "right":
      return { opacity: 0, x: 48 };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "blur":
      return { opacity: 0, y: 28, filter: "blur(10px)" };
    case "clip":
      return { opacity: 0, clipPath: "inset(100% 0 0 0)" };
    default:
      return { opacity: 0, y: 36 };
  }
}

function motionEnd(variant: RevealVariant, reduced: boolean) {
  if (reduced) return { opacity: 1 };
  switch (variant) {
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "scale":
      return { opacity: 1, scale: 1 };
    case "blur":
      return { opacity: 1, y: 0, filter: "blur(0px)" };
    case "clip":
      return { opacity: 1, clipPath: "inset(0% 0 0 0)" };
    default:
      return { opacity: 1, y: 0 };
  }
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  immediate?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  immediate = false,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={motionState(variant, !!reduced)}
      {...(immediate
        ? { animate: motionEnd(variant, !!reduced) }
        : {
            whileInView: motionEnd(variant, !!reduced),
            viewport: { once: true, margin: "-8%" },
          })}
      transition={{
        duration: reduced ? 0.01 : 0.85,
        delay: reduced ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: motionState(variant, !!reduced),
        visible: {
          ...motionEnd(variant, !!reduced),
          transition: { duration: reduced ? 0.01 : 0.75, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroStagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : 0.11, delayChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: motionState(variant, !!reduced),
        visible: {
          ...motionEnd(variant, !!reduced),
          transition: { duration: reduced ? 0.01 : 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
