/**
 * Startseite Anicca Pflege WG
 * Design-Vorbild: Villa Clay – ruhiges Premium-Layout, klare Sektionen, viel Weißraum.
 */
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export default function Home() {
  return (
    <>
      {/* Hero – Name + Tagline + scroll down */}
      <section
        id="hero"
        className="relative flex min-h-[100vh] flex-col items-center justify-center bg-white px-4 py-20 sm:py-24"
        aria-label="Willkommen"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl text-navy-700 tracking-tight sm:text-5xl lg:text-6xl">
            Anicca Pflege WG
          </h1>
          <p className="mt-4 text-lg text-navy-600 sm:text-xl">
            Familiär wohnen – professionell versorgt
          </p>
          <p className="mt-2 text-sm text-navy-500 sm:text-base">
            Ihre <strong>Pflege WG in Berlin</strong> – Tiergarten. Wenn die Entlassung geplant ist – Anicca ist bereit.
          </p>
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

      {/* Über uns – Einleitung + kleine WG, mehrsprachig, kurzfristige Aufnahme */}
      <section
        id="ueber-uns"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="ueber-uns-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="ueber-uns-heading" className="font-serif text-2xl text-navy-700 mb-6 sm:text-display">
                Über uns
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Die Anicca Pflege WG ist Ihre <strong>Pflege WG in Berlin</strong>: eine familiäre Wohnform für Seniorinnen und Senioren mit Pflegebedarf – mitten im Herzen der Stadt. Unsere kleine Wohngemeinschaft verbindet individuelles Wohnen, ambulante Pflege und ein sicheres Umfeld.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                Kleine familiäre WG mit nur 5 Bewohnern. Mehrsprachige Kommunikation: Deutsch · Englisch · Ukrainisch · Polnisch · Russisch.
              </p>
              <p className="text-navy-600 leading-relaxed mb-0">
                Familiäre Pflege-WG mit kurzfristiger Aufnahme im Herzen Berlins. Sichere Anschlussversorgung nach Krankenhausentlassung. Kurzfristige Aufnahme möglich – direkte telefonische Abstimmung.
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

      {/* Unsere Wohngemeinschaft – Lage, Ausstattung, Karte */}
      <section
        id="unsere-wg"
        className="scroll-mt-18 bg-white py-16 sm:py-24 lg:py-30"
        aria-labelledby="unsere-wg-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 id="unsere-wg-heading" className="font-serif text-2xl text-navy-700 mb-6 sm:text-display">
                Unsere Wohngemeinschaft
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Die Anicca Pflege WG befindet sich in Berlin-Tiergarten (Pohlstraße 49) – im Herzen und geografischen Zentrum Berlins. Die Wohnung liegt im zweiten Obergeschoss eines gepflegten Wohnhauses und ist bequem mit dem Aufzug erreichbar.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Unsere Wohngemeinschaft ist bewusst klein und familiär gestaltet. Wir bieten:
              </p>
              <ul className="space-y-2 text-navy-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>5 individuell gestaltbare Einzelzimmer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Großen Gemeinschaftsbereich für Mahlzeiten und Aktivitäten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>2 WC / Badezimmer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Ruhige und persönliche Atmosphäre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Raum für Gemeinschaft und Rückzug</span>
                </li>
              </ul>
              <p className="text-navy-600 leading-relaxed">
                Durch die kleine Bewohnerzahl entsteht eine besonders familiäre und persönliche Betreuungssituation.
              </p>
            </div>
            <div>
              <MapEmbed />
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
                Pflege und Betreuung
              </h2>
              <p className="text-lead text-navy-600 mb-6">
                Die Versorgung erfolgt durch einen ambulanten Pflegedienst. Möglich sind unter anderem:
              </p>
              <ul className="space-y-2 text-navy-600 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Pflege nach SGB V und SGB XI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Betreuung aller Pflegegrade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Unterstützung bei Körperpflege und Mobilität</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Medikamentenmanagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  <span>Zusammenarbeit mit Ärzten und Therapeuten</span>
                </li>
              </ul>
              <p className="text-navy-600 leading-relaxed">
                Kurzfristige Aufnahme nach Krankenhausaufenthalt möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medizinische Anbindung */}
      <section
        id="medizin"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="medizin-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="medizin-heading" className="font-serif text-2xl text-navy-700 mb-6 sm:text-display">
            Sehr gute medizinische Anbindung
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 max-w-2xl">
            In der Umgebung befinden sich mehrere Kliniken, darunter:
          </p>
          <ul className="space-y-2 text-navy-600 max-w-xl">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Charité – Universitätsmedizin Berlin</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Evangelische Elisabeth Klinik</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Franziskus-Krankenhaus Berlin</span>
            </li>
          </ul>
          <p className="mt-6 text-navy-600 leading-relaxed">
            Diese Nähe ermöglicht eine gute medizinische Versorgung und Zusammenarbeit mit Ärzten.
          </p>
        </div>
      </section>

      {/* Leistungen – Überblick */}
      <section
        id="leistungen"
        className="scroll-mt-18 bg-white py-16 sm:py-24 lg:py-30"
        aria-labelledby="leistungen-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="leistungen-heading" className="font-serif text-2xl text-navy-700 mb-10 text-center sm:text-display sm:mb-12">
            Unsere Leistungen für Sie im Überblick
          </h2>
          <ul className="mx-auto grid max-w-2xl gap-4 text-navy-600 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>5 Einzelzimmer und großer Gemeinschaftsbereich</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Pflege nach SGB V und SGB XI, alle Pflegegrade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Mehrsprachig: Deutsch, Englisch, Ukrainisch, Polnisch, Russisch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Kurzfristige Aufnahme nach Krankenhausaufenthalt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Individuelle Betreuung und Medikamentenmanagement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Zentrale Lage Berlin-Tiergarten, gute Anbindung</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Leben im Herzen Berlins */}
      <section
        id="lage"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="lage-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="lage-heading" className="font-serif text-2xl text-navy-700 mb-6 sm:text-display">
            Leben im Herzen Berlins
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 max-w-2xl">
            Die zentrale Lage bietet eine hervorragende Infrastruktur. In unmittelbarer Nähe befinden sich:
          </p>
          <ul className="grid gap-3 text-navy-600 sm:grid-cols-2 max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Cafés und Restaurants</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Einkaufsmöglichkeiten</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Arztpraxen und Physiotherapie</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Apotheken und Friseure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
              <span>Spaziermöglichkeiten im Tiergarten</span>
            </li>
          </ul>
          <p className="mt-6 text-navy-600 leading-relaxed">
            Auch der Tiergarten und der Potsdamer Platz sind schnell erreichbar.
          </p>
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

      {/* Kontakt – Adresse, Ansprechpartner, Formular, kleine Karte */}
      <section
        id="kontakt"
        className="scroll-mt-18 bg-[#fafafa] py-16 sm:py-24 lg:py-30"
        aria-labelledby="kontakt-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="kontakt-heading" className="font-serif text-2xl text-navy-700 mb-10 text-center sm:text-display sm:mb-12">
            Kontakt
          </h2>
          <p className="text-navy-600 mb-10 text-center max-w-xl mx-auto">
            Sie haben Fragen oder möchten einen Besichtigungstermin? Schreiben Sie uns – wir melden uns zeitnah bei Ihnen.
          </p>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <address className="not-italic text-navy-600">
                <p className="font-semibold text-navy-700 text-lg">Anicca Pflege WG</p>
                <p className="mt-1">Pohlstraße 49</p>
                <p>10785 Berlin</p>
                <p className="mt-4 font-medium text-navy-700">Ansprechpartnerin</p>
                <p>Veronika Chekurda</p>
                <p className="mt-1">
                  <a href="tel:+4915229451581" className="hover:text-gold-600 transition-colors">0152 29451581</a>
                </p>
                <p>
                  <a href="mailto:nika.chekurda@icloud.com" className="hover:text-gold-600 transition-colors break-all">nika.chekurda@icloud.com</a>
                </p>
                <p className="mt-4 font-medium text-navy-700">Vladislav Pinskij</p>
                <p>
                  <a href="tel:+491778238631" className="hover:text-gold-600 transition-colors">0177 8238631</a>
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-medium text-navy-700">Pflegedienst Awamedi GmbH</span><br />
                  Albrechtstraße 12, 10117 Berlin<br />
                  <a href="tel:+493023638340" className="hover:text-gold-600 transition-colors">030 / 23638340</a>
                </p>
              </address>
              <div className="max-w-md">
                <MapEmbed />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
