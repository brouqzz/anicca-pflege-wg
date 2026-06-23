import Link from "next/link";

const NAV = [
  { href: "#ueber-uns",     label: "Über uns" },
  { href: "#unsere-wg",     label: "Unsere WG" },
  { href: "#pflegekonzept", label: "Pflege & Betreuung" },
  { href: "#leistungen",    label: "Leistungen" },
  { href: "#galerie",       label: "Galerie" },
  { href: "#kontakt",       label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso px-5 pb-10 pt-20 text-paper-100 sm:px-8 sm:pt-24 lg:px-12">
      <div className="mx-auto max-w-8xl">
        {/* Big call line */}
        <div className="grid gap-12 border-b border-paper-100/15 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="kicker text-clay-300">Anicca Pflege WG</span>
            <p className="mt-6 font-serif text-display text-paper-100 sm:text-display-lg">
              Familiär wohnen — <span className="italic text-clay-300">professionell versorgt.</span>
            </p>
            <a href="#kontakt" className="mt-9 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-paper-100 px-8 text-sm font-semibold uppercase tracking-[0.12em] text-ink-900 transition-all duration-400 ease-lux hover:bg-clay-400 hover:text-paper-100">
              Besichtigung anfragen
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-5">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-300">
                Navigation
              </p>
              <nav className="mt-5 flex flex-col gap-3 text-sm" aria-label="Footer-Navigation">
                {NAV.map(({ href, label }) => (
                  <Link key={href} href={href} className="link-underline w-fit text-ink-200 transition-colors hover:text-paper-100">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-300">
                Kontakt
              </p>
              <address className="mt-5 not-italic space-y-3 text-sm text-ink-200">
                <p>Pohlstraße 49<br />10785 Berlin</p>
                <p>
                  <a href="tel:+4915229451581" className="link-underline transition-colors hover:text-paper-100">
                    0152 29451581
                  </a>
                </p>
                <p>
                  <a href="mailto:nika.chekurda@icloud.com" className="link-underline break-all transition-colors hover:text-paper-100">
                    nika.chekurda@icloud.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-ink-300 sm:flex-row">
          <p>© {year} Anicca Pflege WG. Alle Rechte vorbehalten.</p>
          <Link href="/rechtliches" className="link-underline transition-colors hover:text-paper-100">
            Impressum & Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
