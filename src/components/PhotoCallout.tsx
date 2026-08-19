"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function PhotoCallout({
  image,
  alt,
  kicker,
  title,
  subtitle,
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  subtitle: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Kurzfristige Aufnahme"
    >
      <motion.div
        className="absolute inset-x-0 -top-[12%] -bottom-[12%]"
        style={reduced ? undefined : { y }}
      >
        <Image src={image} alt={alt} fill quality={90} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-ink-900/55" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-ink-900/20" aria-hidden />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 py-10 pb-[max(2.25rem,calc(env(safe-area-inset-bottom)+1rem))] sm:px-10 sm:py-16 lg:px-16 lg:py-24">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-50/70 sm:text-xs">{kicker}</p>
        <h2 className="mt-3 max-w-[18ch] font-serif text-[clamp(1.85rem,8vw,6.5rem)] leading-[1.02] tracking-[-0.03em] text-paper-50 sm:mt-5 sm:leading-[0.95]">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-50/85 sm:mt-6 sm:text-xl">{subtitle}</p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href="#kontakt"
            className="inline-flex min-h-12 items-center justify-center bg-paper-50 px-6 text-sm font-medium text-ink-900 transition-colors hover:bg-white sm:min-h-[3.25rem] sm:px-7"
          >
            Jetzt anfragen
          </a>
          <a
            href="tel:+4915229451581"
            className="inline-flex min-h-12 items-center justify-center border border-paper-50/40 px-6 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-50/10 sm:min-h-[3.25rem] sm:px-7"
          >
            0152 29451581
          </a>
        </div>
      </div>
    </section>
  );
}
