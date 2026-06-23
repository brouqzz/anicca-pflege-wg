"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px across the viewport pass (default 60) */
  distance?: number;
}

/**
 * Scroll-linked vertical parallax. Wrap an oversized inner layer inside an
 * overflow-hidden frame so the content drifts as the section scrolls past.
 */
export default function Parallax({ children, className, distance = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
