/**
 * Startseite Anicca Pflege WG
 * Design-Vorbild: Villa Clay – ruhiges Premium-Layout, klare Sektionen, viel Weißraum.
 */
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero – wie Villa Clay: nur Name + scroll down, reduziert */}
      <section
        id="hero"
        className="relative flex min-h-[100vh] flex-col items-center justify-center bg-white px-4 py-20 sm:py-24"
        aria-label="Willkommen"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl text-navy-700 tracking-tight sm:text-5xl lg:text-6xl">
            Anicca Pflege WG
          </h1>
        </div>
        <a
          href="#ueber-uns"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-sm font-medium text-navy-500 transition-colors hover:text-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-white rounded min-h-[44px] justify-center"
          aria-label="Weiter nach unten scrollen"
        >
          <span>scroll down</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Über uns – wie Villa Clay: Fließtext + Bild, viel Weißraum */}
      <section
        id="ueber-uns"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="ueber-uns-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="ueber-uns-heading" className="sr-only">
                Über uns
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Die Anicca Pflege WG verbindet Geborgenheit mit professioneller Betreuung. 
                In unserer Wohngemeinschaft finden pflegebedürftige Menschen ein Zuhause, 
                in dem sie rund um die Uhr einfühlsam begleitet werden.
              </p>
              <p className="text-navy-600 leading-relaxed mb-0">
                Wir legen großen Wert auf vertraute Bezugspersonen, überschaubare Gruppen 
                und eine Atmosphäre, die Sicherheit und Lebensqualität fördert. 
                So können Angehörige beruhigt sein – und Bewohner sich wohlfühlen.
              </p>
            </div>
            <div className="relative min-h-[280px] rounded-lg bg-beige-200/50 lg:min-h-[360px]">
              <div className="absolute inset-0 flex items-center justify-center text-navy-400 text-sm">
                Bild folgt
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pflegekonzept – Bild links, Text rechts */}
      <section
        id="pflegekonzept"
        className="scroll-mt-18 bg-white py-16 sm:py-24 lg:py-30"
        aria-labelledby="pflegekonzept-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1 min-h-[280px] rounded-lg bg-sage-100/60 lg:min-h-[360px]">
              <div className="absolute inset-0 flex items-center justify-center text-navy-400 text-sm">
                Bild folgt
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 id="pflegekonzept-heading" className="font-serif text-2xl text-navy-700 mb-6 sm:text-display">
                Unser Pflegekonzept
              </h2>
              <p className="text-lead text-navy-600 mb-6">
                Unser Konzept basiert auf Bezugspflege in kleinen Wohngruppen. 
                So kennen wir die Bedürfnisse und Wünsche jedes Bewohners genau 
                und können individuell und einfühlsam handeln.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Qualifiziertes Fachpersonal sorgt für höchstmögliche Lebensqualität 
                und Orientierung – mit Respekt und Würde im Mittelpunkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen – wie Villa Clay: „Unsere Leistungen Für Sie Im Überblick“ */}
      <section
        id="leistungen"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="leistungen-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="leistungen-heading" className="font-serif text-2xl text-navy-700 mb-10 text-center sm:text-display sm:mb-12">
            Unsere Leistungen für Sie im Überblick
          </h2>
          <ul className="mx-auto grid max-w-2xl gap-4 text-navy-600 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Rund-um-die-Uhr-Betreuung durch geschultes Personal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Barrierefreie Wohnbereiche und Gemeinschaftsflächen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Individuelle Pflege und Betreuung nach Ihren Wünschen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Gemeinschaftsaktivitäten und soziale Begleitung</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Notruf und Rezeptionsdienst</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Beratung für Angehörige</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Galerie */}
      <section
        id="galerie"
        className="scroll-mt-18 bg-white py-16 sm:py-24 lg:py-30"
        aria-labelledby="galerie-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="galerie-heading" className="font-serif text-2xl text-navy-700 mb-10 text-center sm:text-display sm:mb-12">
            Galerie
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-beige-200/60 flex items-center justify-center text-navy-400 text-sm transition-colors hover:bg-beige-300/50"
              >
                Bild {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt – Formular + DSGVO-Hinweis wie Villa Clay */}
      <section
        id="kontakt"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="kontakt-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="kontakt-heading" className="font-serif text-2xl text-navy-700 mb-10 text-center sm:text-display sm:mb-12">
            Kontakt
          </h2>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-navy-600 mb-6">
                Sie haben Fragen oder möchten einen Besichtigungstermin? 
                Schreiben Sie uns – wir melden uns zeitnah bei Ihnen.
              </p>
              <div className="space-y-3 text-navy-600">
                <p className="font-medium text-navy-700">Anicca Pflege WG</p>
                <p>Adresse (Platzhalter)</p>
                <p>PLZ Ort</p>
                <p>
                  <a href="tel:03012345670" className="hover:text-gold-600 transition-colors">Telefon: 030 1234567-0</a>
                </p>
                <p>
                  <a href="mailto:kontakt@example.de" className="hover:text-gold-600 transition-colors">kontakt@example.de</a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
