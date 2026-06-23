"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { id: 1, label: "Einzelzimmer",      src: "/fotos/einzelzimmer.png" },
  { id: 2, label: "Pohlstraße 49",     src: "/fotos/pohlstrasse.png" },
  { id: 3, label: "Gemeinschaftsraum", src: "/fotos/gemeinschaftsraum.png" },
  { id: 4, label: "Küche",             src: "/fotos/kueche.png" },
];

const AUTOPLAY_MS = 4500;

export default function GallerySlideshow() {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused]       = useState(false);
  const reduced = useReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next, reduced]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const variants = {
    enter:  (d: number) => ({ x: reduced ? 0 : d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: reduced ? 0 : d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const slide = SLIDES[current];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Galerie Slideshow"
      role="region"
    >
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-paper-200 sm:aspect-[5/2]">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-paper-200"
          >
            <Image
              src={slide.src}
              alt={`${slide.label} – Anicca Pflege WG`}
              fill
              quality={95}
              sizes="100vw"
              className="object-cover"
              priority={current === 0}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" aria-hidden />

            <div className="absolute bottom-5 left-5 sm:left-8">
              <span className="rounded-full bg-ink-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-paper-100 backdrop-blur-sm">
                {slide.label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <button
          type="button"
          onClick={prev}
          aria-label="Vorheriges Bild"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper-100/85 text-ink-800 backdrop-blur-sm transition-all hover:scale-105 hover:bg-paper-50 focus:outline-none focus:ring-2 focus:ring-clay-400 sm:left-8"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Nächstes Bild"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper-100/85 text-ink-800 backdrop-blur-sm transition-all hover:scale-105 hover:bg-paper-50 focus:outline-none focus:ring-2 focus:ring-clay-400 sm:right-8"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute right-5 top-5 sm:right-8">
          <span className="font-serif text-sm text-paper-100 tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {!paused && !reduced && (
          <motion.div
            key={current}
            className="absolute bottom-0 left-0 h-0.5 bg-clay-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          />
        )}
      </div>

      {/* Dots */}
      <div className="mx-auto flex max-w-8xl items-center justify-center gap-2 px-5 py-6 sm:px-8 lg:px-12" role="tablist" aria-label="Folien wählen">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Bild ${i + 1}: ${s.label}`}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:ring-offset-1 ${
              i === current ? "w-10 bg-clay-500" : "w-2 bg-ink-900/20 hover:bg-ink-900/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
