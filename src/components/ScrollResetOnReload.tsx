"use client";

import { useLayoutEffect } from "react";

function resetScrollOnReload() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  if (nav?.type !== "reload") return;

  window.scrollTo(0, 0);
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

export default function ScrollResetOnReload() {
  useLayoutEffect(() => {
    resetScrollOnReload();

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) resetScrollOnReload();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
