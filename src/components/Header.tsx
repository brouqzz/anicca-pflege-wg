"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#ueber-uns",     label: "Über uns" },
  { href: "#unsere-wg",     label: "Unsere WG" },
  { href: "#pflegekonzept", label: "Pflege" },
  { href: "#leistungen",    label: "Leistungen" },
  { href: "#galerie",       label: "Galerie" },
] as const;

const INFO_PHONE = "0152 / 29451581";

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ease-lux ${
        scrolled
          ? "border-b border-ink-900/10 bg-paper-100/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:ring-offset-2 rounded min-h-[44px]"
          aria-label="Anicca Pflege WG – Startseite"
        >
          {!logoError && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt=""
              width={200}
              height={100}
              className="h-9 w-auto object-contain sm:h-11"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-serif text-lg font-medium tracking-tight text-ink-900 sm:text-xl">
            Anicca
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-9" aria-label="Hauptnavigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="link-underline text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-500 transition-colors hover:text-ink-900 focus:outline-none"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex min-h-[44px] items-center rounded-full bg-ink-900 px-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-paper-100 transition-all duration-400 ease-lux hover:bg-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:ring-offset-2"
        >
          Kontakt
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-800 transition-colors hover:bg-ink-900/5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen oder schließen"
        >
          <span className="sr-only">Menü</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              animate={menuOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 7h16M4 17h16" }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-900/10 bg-paper-100 md:hidden"
            role="region"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile Hauptnavigation">
              {[...NAV_LINKS, { href: "#kontakt", label: "Kontakt" }].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[52px] items-center justify-between border-b border-ink-900/10 font-serif text-xl text-ink-800 transition-colors hover:text-clay-500"
                >
                  {label}
                  <svg className="h-4 w-4 text-ink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
              <a
                href="tel:+4915229451581"
                className="mt-5 flex min-h-[52px] items-center justify-center rounded-full bg-ink-900 text-sm font-semibold uppercase tracking-[0.12em] text-paper-100 transition-colors hover:bg-clay-500"
                onClick={() => setMenuOpen(false)}
              >
                {INFO_PHONE}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
