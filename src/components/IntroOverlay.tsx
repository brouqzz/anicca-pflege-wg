"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reduzierte, architektonische Intro-Animation.
 * Nur CSS + Vanilla-JS-Logik (kein Animations-Framework).
 * Läuft einmal pro Sitzung (sessionStorage), dann wird das Overlay aus dem DOM entfernt.
 */
const SESSION_KEY = "anicca-intro-seen";
const LOGO_FADE_MS = 900;
const PAUSE_MS = 1000;
const OVERLAY_FADEOUT_MS = 1200;
const PAGE_CONTENT_ID = "page-content";

/** Glitzer über ganzen Bildschirm: Position % der Viewportfläche, Größe px, Delay/Dauer. */
const SPARKLES: { x: string; y: string; size: number; delay: number; dur: number }[] = [
  { x: "23%", y: "17%", size: 18, delay: 0, dur: 1.4 },
  { x: "71%", y: "12%", size: 10, delay: 0.2, dur: 1.1 },
  { x: "41%", y: "8%", size: 14, delay: 0.5, dur: 1.3 },
  { x: "87%", y: "19%", size: 20, delay: 0.1, dur: 1.5 },
  { x: "9%", y: "31%", size: 12, delay: 0.7, dur: 1.0 },
  { x: "55%", y: "26%", size: 16, delay: 0.35, dur: 1.2 },
  { x: "34%", y: "39%", size: 22, delay: 0.55, dur: 1.25 },
  { x: "78%", y: "44%", size: 8, delay: 0.15, dur: 1.35 },
  { x: "19%", y: "52%", size: 14, delay: 0.8, dur: 0.95 },
  { x: "62%", y: "48%", size: 10, delay: 0.4, dur: 1.4 },
  { x: "91%", y: "55%", size: 18, delay: 0.6, dur: 1.15 },
  { x: "14%", y: "63%", size: 12, delay: 0.25, dur: 1.3 },
  { x: "47%", y: "59%", size: 16, delay: 0.65, dur: 1.05 },
  { x: "83%", y: "68%", size: 8, delay: 0.45, dur: 1.2 },
  { x: "28%", y: "74%", size: 20, delay: 0.05, dur: 1.1 },
  { x: "66%", y: "71%", size: 14, delay: 0.75, dur: 1.2 },
  { x: "5%", y: "22%", size: 10, delay: 0.3, dur: 1.25 },
  { x: "52%", y: "38%", size: 24, delay: 0.5, dur: 1.35 },
  { x: "95%", y: "32%", size: 8, delay: 0.1, dur: 1.0 },
  { x: "37%", y: "52%", size: 12, delay: 0.6, dur: 1.15 },
  { x: "74%", y: "58%", size: 16, delay: 0.2, dur: 1.4 },
  { x: "11%", y: "78%", size: 14, delay: 0.85, dur: 0.9 },
  { x: "59%", y: "82%", size: 10, delay: 0.4, dur: 1.3 },
  { x: "96%", y: "76%", size: 18, delay: 0.55, dur: 1.1 },
  { x: "26%", y: "9%", size: 8, delay: 0.7, dur: 1.2 },
  { x: "69%", y: "35%", size: 14, delay: 0.15, dur: 1.25 },
  { x: "44%", y: "72%", size: 10, delay: 0.5, dur: 1.05 },
  { x: "81%", y: "82%", size: 16, delay: 0.3, dur: 1.35 },
  { x: "17%", y: "42%", size: 12, delay: 0.65, dur: 1.0 },
  { x: "53%", y: "64%", size: 20, delay: 0.25, dur: 1.45 },
  { x: "88%", y: "48%", size: 8, delay: 0.8, dur: 1.15 },
  { x: "31%", y: "28%", size: 16, delay: 0.45, dur: 1.2 },
  { x: "76%", y: "24%", size: 10, delay: 0.1, dur: 1.3 },
  { x: "8%", y: "88%", size: 14, delay: 0.6, dur: 1.1 },
  { x: "49%", y: "14%", size: 18, delay: 0.35, dur: 1.4 },
  { x: "92%", y: "62%", size: 12, delay: 0.55, dur: 1.25 },
  { x: "21%", y: "66%", size: 8, delay: 0.2, dur: 0.95 },
  { x: "64%", y: "92%", size: 16, delay: 0.7, dur: 1.2 },
  { x: "38%", y: "85%", size: 10, delay: 0.4, dur: 1.05 },
  { x: "72%", y: "78%", size: 14, delay: 0.15, dur: 1.35 },
  { x: "6%", y: "56%", size: 18, delay: 0.5, dur: 1.0 },
  { x: "56%", y: "18%", size: 12, delay: 0.85, dur: 1.3 },
  { x: "85%", y: "92%", size: 8, delay: 0.3, dur: 1.15 },
  { x: "42%", y: "46%", size: 6, delay: 0.6, dur: 1.1 },
  { x: "29%", y: "61%", size: 14, delay: 0.1, dur: 1.25 },
  { x: "79%", y: "54%", size: 10, delay: 0.45, dur: 1.2 },
  { x: "15%", y: "92%", size: 16, delay: 0.65, dur: 1.4 },
  { x: "61%", y: "6%", size: 8, delay: 0.25, dur: 0.9 },
  { x: "93%", y: "86%", size: 18, delay: 0.75, dur: 1.35 },
  { x: "35%", y: "15%", size: 10, delay: 0.5, dur: 1.05 },
  { x: "68%", y: "88%", size: 12, delay: 0.2, dur: 1.2 },
  { x: "12%", y: "48%", size: 14, delay: 0.8, dur: 1.1 },
  { x: "51%", y: "78%", size: 6, delay: 0.35, dur: 0.95 },
  { x: "84%", y: "38%", size: 16, delay: 0.55, dur: 1.3 },
  { x: "24%", y: "84%", size: 10, delay: 0.05, dur: 1.15 },
  { x: "58%", y: "42%", size: 20, delay: 0.7, dur: 1.2 },
  { x: "90%", y: "72%", size: 8, delay: 0.4, dur: 1.0 },
  { x: "2%", y: "4%", size: 12, delay: 0.5, dur: 1.2 },
  { x: "98%", y: "3%", size: 10, delay: 0.2, dur: 1.1 },
  { x: "1%", y: "97%", size: 14, delay: 0.7, dur: 1.3 },
  { x: "99%", y: "96%", size: 10, delay: 0.35, dur: 1.0 },
  { x: "3%", y: "50%", size: 8, delay: 0.6, dur: 1.15 },
  { x: "97%", y: "48%", size: 12, delay: 0.1, dur: 1.25 },
  { x: "50%", y: "2%", size: 14, delay: 0.45, dur: 1.1 },
  { x: "48%", y: "98%", size: 12, delay: 0.8, dur: 1.2 },
];

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [removeFromDOM, setRemoveFromDOM] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // 1) Beim ersten Mount: sessionStorage prüfen, ggf. Intro starten
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen === "1") {
      document.getElementById(PAGE_CONTENT_ID)?.classList.add("intro-visible");
      return;
    }

    document.body.classList.add("intro-active");
    setMounted(true);
  }, []);

  // 2) Sobald Overlay gemountet ist (mounted=true): Refs sind gesetzt, Animation starten
  useEffect(() => {
    if (!mounted) return;

    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const pageContent = document.getElementById(PAGE_CONTENT_ID);
    if (!overlay || !logo || !pageContent) return;

    // Logo einblenden (nach einem Frame, damit CSS greift)
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        logo.classList.add("intro-logo-visible");
      });
    });

    const startReveal = LOGO_FADE_MS + PAUSE_MS;
    const removeAt = startReveal + OVERLAY_FADEOUT_MS;

    const t1 = setTimeout(() => {
      overlay.classList.add("intro-overlay-fadeout");
      pageContent.classList.add("intro-visible");
    }, startReveal);

    const t2 = setTimeout(() => {
      document.body.classList.remove("intro-active");
      sessionStorage.setItem(SESSION_KEY, "1");
      setRemoveFromDOM(true);
    }, removeAt);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [mounted]);

  if (!mounted || removeFromDOM) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay"
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro-sparkles-fullscreen">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="intro-sparkle"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              marginLeft: -s.size / 2,
              marginTop: -s.size / 2,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="intro-sparkle-svg">
              <defs>
                <radialGradient id={`sparkle-core-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#fff8e7" />
                  <stop offset="50%" stopColor="#f5e6c8" />
                  <stop offset="80%" stopColor="#c98f2e" />
                  <stop offset="100%" stopColor="#a87224" />
                </radialGradient>
                <filter id={`sparkle-glow-${i}`}>
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="soft" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="soft" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M12 2 L13.4 9.2 L21 10 L15 15 L16.4 22 L12 18 L7.6 22 L9 15 L3 10 L10.6 9.2 Z"
                fill={`url(#sparkle-core-${i})`}
                filter={`url(#sparkle-glow-${i})`}
              />
            </svg>
          </span>
        ))}
      </div>
      <div className="intro-logo-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/logo.png"
          alt=""
          className="intro-logo"
          width={200}
          height={200}
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
