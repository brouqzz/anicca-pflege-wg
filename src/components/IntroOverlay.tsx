"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reduzierte, architektonische Intro-Animation.
 * Nur einmal pro Tab-Session (sessionStorage). Nicht bei Klicks auf Impressum/Datenschutz
 * oder bei Zurück-Navigation – dort bleibt die Seite ohne Intro sichtbar.
 */
const SESSION_KEY = "anicca-intro-seen";
/* Intro gesamt 3,5 Sekunden: Logo einblenden → Pause → Overlay ausblenden */
const LOGO_FADE_MS = 800;
const PAUSE_MS = 1700;
const OVERLAY_FADEOUT_MS = 1000;
const PAGE_CONTENT_ID = "page-content";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [removeFromDOM, setRemoveFromDOM] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // 1) Intro nur beim ersten Besuch in diesem Tab; bei Impressum/Datenschutz/Klick zurück: kein Intro
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
