"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Splash-Screen: Logo erscheint zuerst, dann weicher Übergang zur Website.
 * Zeigt das Logo ~2,5 Sekunden, danach Fade-Out – die Seite ist darunter bereits geladen.
 */
const SPLASH_DURATION_MS = 2500;
const FADE_OUT_DURATION = 0.6;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: FADE_OUT_DURATION, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src="/logo.png"
              alt=""
              width={320}
              height={320}
              className="h-36 w-auto object-contain sm:h-44 lg:h-52"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-xl font-semibold tracking-tight text-navy-700 sm:text-2xl"
            >
              Anicca Pflege WG
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
