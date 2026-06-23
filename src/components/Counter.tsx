"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** Display value. Pure positive integers (e.g. "5") count up; anything else ("24/7", "01") renders static. */
  value: string;
  duration?: number;
}

const isCountable = (v: string) => /^[1-9]\d*$/.test(v);

export default function Counter({ value, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const countable = isCountable(value);
  const target = countable ? parseInt(value, 10) : 0;
  const [display, setDisplay] = useState(countable && !reduced ? 0 : target);

  useEffect(() => {
    if (!countable || reduced || !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, countable, reduced, target, duration]);

  return <span ref={ref}>{countable ? display : value}</span>;
}
