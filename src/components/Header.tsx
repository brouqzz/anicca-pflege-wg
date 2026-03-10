"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Header im Stil Villa Clay: schmale Info-Leiste oben, darunter Logo + Navigation.
 * Ruhig, premium, viel Weißraum.
 */
const NAV_LINKS = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#unsere-wg", label: "Unsere WG" },
  { href: "#pflegekonzept", label: "Pflege & Betreuung" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

const INFO_PHONE = "0152 / 29451581";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 shadow-soft backdrop-blur-sm">
      {/* Info-Leiste nur auf PC/Tablet – auf Handy ausgeblendet für mehr Platz */}
      <div className="hidden border-b border-beige-200/60 bg-beige-50/80 sm:block">
        <div className="mx-auto flex max-w-6xl justify-end px-4 py-2 text-sm text-navy-600 sm:px-6 lg:px-8">
          <span className="font-medium">Info</span>
          <span className="mx-2" aria-hidden>–</span>
          <a
            href={`tel:${INFO_PHONE.replace(/\s/g, "")}`}
            className="hover:text-gold-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 rounded"
          >
            Telefon {INFO_PHONE}
          </a>
        </div>
      </div>

      {/* Logo + Navigation */}
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-0 min-h-[44px] sm:gap-3"
          aria-label="Anicca Pflege WG – Startseite"
        >
          {!logoError ? (
            // eslint-disable-next-line @next/next/no-img-element -- Logo als <img> für zuverlässige PNG-Transparenz
            <img
              src="/logo.png"
              alt=""
              width={200}
              height={100}
              className="h-11 w-auto object-contain sm:h-16"
              onError={() => setLogoError(true)}
            />
          ) : null}
          <span className="font-serif text-base font-semibold tracking-tight text-navy-700 sm:text-lg lg:text-xl">
            Anicca Pflege WG
          </span>
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-10"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide text-navy-600 transition-colors hover:text-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-white rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-navy-600 hover:bg-beige-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen oder schließen"
        >
          <span className="sr-only">Menü</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-beige-200/80 bg-white md:hidden ${menuOpen ? "block" : "hidden"}`}
        role="region"
        aria-label="Mobile Navigation"
      >
        <nav className="flex flex-col py-2" aria-label="Mobile Hauptnavigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block min-h-[44px] px-4 py-3 text-sm font-medium text-navy-600 hover:bg-beige-50 hover:text-navy-700 flex items-center"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
