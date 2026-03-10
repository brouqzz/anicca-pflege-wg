import Link from "next/link";

/**
 * Footer im Stil Villa Clay: mehrspaltig mit Kontakt, Sitemap und Rechtlichem.
 * Ruhig, premium, gute Lesbarkeit.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-beige-200 bg-beige-50/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-beige-200/80 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Kontakt – wie Villa Clay mit Kategorie „Pflege-WG“ */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-navy-700">Kontakt</h3>
            <address className="not-italic text-sm text-navy-600">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-500 mb-2">Pflege-WG</p>
              <p className="font-medium text-navy-700">Anicca Pflege WG</p>
              <p className="mt-1">Pohlstraße 49</p>
              <p>10785 Berlin</p>
              <p className="mt-2">
                <a href="tel:+4915229451581" className="hover:text-gold-600 transition-colors">
                  Telefon: 0152 29451581
                </a>
              </p>
              <p>
                <a href="mailto:nika.chekurda@icloud.com" className="hover:text-gold-600 transition-colors break-all">
                  nika.chekurda@icloud.com
                </a>
              </p>
            </address>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-navy-700">Sitemap</h3>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Footer-Navigation">
              <Link href="#ueber-uns" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Über uns
              </Link>
              <Link href="#unsere-wg" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Unsere WG
              </Link>
              <Link href="#pflegekonzept" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Pflege & Betreuung
              </Link>
              <Link href="#leistungen" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Leistungen
              </Link>
              <Link href="#galerie" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Galerie
              </Link>
              <Link href="#kontakt" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                Kontakt
              </Link>
              <span className="mt-2 border-t border-beige-200/80 pt-2">
                <Link href="/impressum" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                  Impressum
                </Link>
                <span className="mx-2 text-navy-400">/</span>
                <Link href="/datenschutz" className="text-navy-600 hover:text-gold-600 transition-colors w-fit">
                  Datenschutzerklärung
                </Link>
              </span>
            </nav>
          </div>

          {/* Platzhalter für 3. Spalte (z. B. „Anicca“ Kurzinfo oder leer) */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 font-serif text-lg font-semibold text-navy-700">Anicca Pflege WG</h3>
            <p className="text-sm text-navy-600 max-w-sm">
              Familiär wohnen – professionell versorgt. Kleine Pflege-WG mit 5 Bewohnern im Herzen Berlins. Kurzfristige Aufnahme möglich.
            </p>
          </div>
        </div>

        {/* Copyright – wie Villa Clay */}
        <div className="pt-8 text-center text-sm text-navy-500">
          © Copyright Anicca Pflege WG {currentYear}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
