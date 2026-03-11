"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reduzierte, architektonische Intro-Animation.
 * Bei Reload (F5) wird die Intro wieder gezeigt. Bei Klicks auf Impressum/Datenschutz
 * keine Intro (Modul-Variable bleibt erhalten, nur bei echtem Reload zurückgesetzt).
 */
let introAlreadyShownThisLoad = false;

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

  // 1) Intro bei Reload zeigen; bei Impressum/Datenschutz (Client-Navigation) überspringen
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (introAlreadyShownThisLoad) {
      document.getElementById(PAGE_CONTENT_ID)?.classList.add("intro-visible");
      return;
    }
    introAlreadyShownThisLoad = true;
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
