import Link from "next/link";

const NAV = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#unsere-wg", label: "Unsere WG" },
  { href: "#pflegekonzept", label: "Pflege" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 bg-paper-200/80 pb-[env(safe-area-inset-bottom)]">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl text-ink-900 sm:text-3xl">Anicca Pflege WG</p>
            <p className="mt-4 max-w-sm text-ink-600">
              Familiär wohnen — professionell versorgt. Kleine Pflege-WG mit fünf Bewohnern
              im Herzen Berlins.
            </p>
            <a href="#kontakt" className="btn-primary mt-8 inline-flex w-full sm:w-auto">
              Besichtigung anfragen
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-8">
            <div>
              <p className="text-sm font-medium text-ink-400">Navigation</p>
              <nav className="mt-4 flex flex-col gap-2.5 text-sm" aria-label="Footer-Navigation">
                {NAV.map(({ href, label }) => (
                  <Link key={href} href={href} className="text-ink-600 transition-colors hover:text-ink-900">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-sm font-medium text-ink-400">Kontakt</p>
              <address className="mt-4 not-italic space-y-2 text-sm text-ink-600">
                <p>
                  Pohlstraße 49
                  <br />
                  10785 Berlin
                </p>
                <p>
                  <a href="tel:+4915229451581" className="hover:text-ink-900">
                    0152 29451581
                  </a>
                </p>
                <p>
                  <a href="mailto:nika.chekurda@icloud.com" className="whitespace-nowrap hover:text-ink-900">
                    nika.chekurda@icloud.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-900/10 pt-8 text-xs text-ink-400 sm:flex-row sm:justify-between">
          <p>© {year} Anicca Pflege WG</p>
          <Link href="/rechtliches" className="hover:text-ink-700">
            Impressum & Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
