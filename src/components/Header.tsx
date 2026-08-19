"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#unsere-wg", label: "Unsere WG" },
  { href: "#pflegekonzept", label: "Pflege" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || open || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        solid
          ? "border-b border-ink-900/8 bg-paper-100/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-h-[44px] items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
          aria-label="Anicca Pflege WG – Startseite"
        >
          {!logoError && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt=""
              width={160}
              height={80}
              className={`h-8 w-auto sm:h-9 ${solid ? "" : "brightness-0 invert"}`}
              onError={() => setLogoError(true)}
            />
          )}
          <span className={`font-serif text-lg ${solid ? "text-ink-900" : "text-paper-50"}`}>Anicca</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                solid ? "text-ink-500 hover:text-ink-900" : "text-paper-50/80 hover:text-paper-50"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="/#kontakt"
          className={`hidden min-h-[2.5rem] items-center justify-center px-4 text-sm font-medium lg:inline-flex ${
            solid
              ? "btn-primary !min-h-[2.5rem]"
              : "bg-paper-50 text-ink-900"
          }`}
        >
          Besichtigung
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <svg
            className={`h-5 w-5 ${solid ? "text-ink-800" : "text-paper-50"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <motion.path
              strokeLinecap="round"
              strokeWidth={1.5}
              animate={open ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 8h16M4 16h16" }}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[calc(4rem+env(safe-area-inset-top))] z-40 bg-paper-100 lg:hidden"
          >
            <nav className="flex flex-col px-5 py-6" aria-label="Mobile Navigation">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href.startsWith("#") ? `/${href}` : href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink-900/10 py-4 font-serif text-2xl text-ink-800"
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:+4915229451581"
                onClick={() => setOpen(false)}
                className="mt-6 btn-secondary w-full"
              >
                0152 29451581
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
