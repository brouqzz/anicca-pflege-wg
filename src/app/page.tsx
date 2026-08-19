"use client";

import ContactForm from "@/components/ContactForm";
import GalleryEditorial from "@/components/GalleryEditorial";
import MapEmbed from "@/components/MapEmbed";
import PhotoCallout from "@/components/PhotoCallout";
import StickyStory from "@/components/StickyStory";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Full-bleed photo — text sits on the image, no stacked intro block */}
      <section id="hero" className="relative min-h-[100svh] overflow-hidden" aria-label="Willkommen">
        <div className={`absolute inset-0 ${reduced ? "" : "animate-kenburns"}`}>
          <Image
            src="/fotos/gemeinschaftsraum.png"
            alt="Gemeinschaftsraum der Anicca Pflege WG"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/25 to-ink-900/30" aria-hidden />

        <motion.div
          className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-[max(2.25rem,calc(env(safe-area-inset-bottom)+1rem))] pt-24 sm:px-10 sm:pb-12 lg:px-16 lg:pb-20"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-paper-50/70 sm:text-xs">
            Pflege-WG · Berlin-Tiergarten
          </p>
          <h1 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.1rem,9vw,5.75rem)] leading-[1.02] tracking-[-0.03em] text-paper-50 sm:mt-4">
            Ein Ort zum Ankommen.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper-50/85 sm:mt-5 sm:text-lg">
            Familiäre Wohngemeinschaft für fünf Menschen. Professionell versorgt, persönlich
            begleitet — mitten in Berlin.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex min-h-12 items-center justify-center bg-paper-50 px-6 text-sm font-medium text-ink-900 transition-colors hover:bg-white sm:min-h-[3.25rem] sm:px-7"
            >
              Besichtigung vereinbaren
            </a>
            <a
              href="tel:+4915229451581"
              className="inline-flex min-h-12 items-center justify-center border border-paper-50/40 px-6 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-50/10 sm:min-h-[3.25rem] sm:px-7"
            >
              0152 29451581
            </a>
          </div>
          <p className="mt-8 text-xs tracking-wide text-paper-50/65 sm:mt-10 sm:text-sm">
            5 Bewohner · Alle Pflegegrade · 5 Sprachen
          </p>
        </motion.div>
      </section>

      {/* Same house photo stays pinned — copy dissolves as you scroll */}
      <StickyStory
        image="/fotos/pohlstrasse.png"
        alt="Anicca Pflege WG — Wohnhaus in der Pohlstraße 49, Berlin"
        panels={[
          {
            id: "ueber-uns",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">Über uns</p>
                <h2
                  id="ueber-uns-heading"
                  className="mt-3 font-serif text-[clamp(1.85rem,7vw,4.25rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Klein genug für echte Nähe.
                </h2>
                <p className="mt-4 max-w-lg text-base text-paper-50/85 sm:mt-5 sm:text-lg">
                  Eine familiäre Wohnform für Seniorinnen und Senioren mit Pflegebedarf — mitten im
                  Herzen der Stadt.
                </p>
              </>
            ),
          },
          {
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">
                  Fünf Bewohner
                </p>
                <p className="mt-3 font-serif text-[clamp(1.55rem,6vw,3rem)] leading-snug text-paper-50 sm:mt-4">
                  Individuelles Wohnen, ambulante Pflege und ein sicheres Umfeld.
                </p>
                <p className="mt-4 max-w-lg text-base text-paper-50/80 sm:mt-5">
                  Mehrsprachig in Deutsch, Englisch, Ukrainisch, Polnisch und Russisch — damit
                  Angehörige und Bewohner verstanden werden.
                </p>
              </>
            ),
          },
          {
            id: "unsere-wg",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">
                  Unsere Wohngemeinschaft
                </p>
                <h2
                  id="unsere-wg-heading"
                  className="mt-3 font-serif text-[clamp(1.85rem,7vw,4rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Raum für Gemeinschaft und für Rückzug.
                </h2>
                <p className="mt-4 max-w-xl text-base text-paper-50/80 sm:mt-5">
                  Zweites Obergeschoss, mit Aufzug erreichbar. Fünf Einzelzimmer, großer
                  Gemeinschaftsbereich, zwei Bäder — bewusst klein und familiär.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* The key message: giant type on a full-screen photo */}
      <PhotoCallout
        image="/fotos/einzelzimmer.png"
        alt="Einzelzimmer der Anicca Pflege WG"
        kicker="Für Angehörige & Kliniken"
        title="Kurzfristige Aufnahme nach Krankenhausaufenthalt möglich."
        subtitle="Sichere Anschlussversorgung nach Entlassung — mit direkter telefonischer Abstimmung. Wenn die Entlassung geplant ist, ist Anicca bereit."
      />

      {/* Kitchen photo stays; Pflege / Leistungen / Kliniken wechseln darüber */}
      <StickyStory
        image="/fotos/kueche.png"
        alt="Küche der Anicca Pflege WG"
        panels={[
          {
            id: "pflegekonzept",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">
                  Pflege & Betreuung
                </p>
                <h2
                  id="pflegekonzept-heading"
                  className="mt-3 font-serif text-[clamp(1.85rem,7vw,4rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Versorgung mit Sorgfalt und Verlässlichkeit.
                </h2>
                <p className="mt-4 max-w-lg text-base text-paper-50/80 sm:mt-5">
                  Ambulanter Pflegedienst nach SGB V und SGB XI. Alle Pflegegrade,
                  Körperpflege, Mobilität, Medikamente — in Zusammenarbeit mit Ärzten und
                  Therapeuten.
                </p>
              </>
            ),
          },
          {
            id: "leistungen",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">
                  Leistungen
                </p>
                <h2
                  id="leistungen-heading"
                  className="mt-3 font-serif text-[clamp(1.75rem,6.5vw,3.5rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Wohnen, Pflege, Sprache, Lage.
                </h2>
                <ul className="mt-5 max-w-lg space-y-2 text-sm text-paper-50/85 sm:mt-6 sm:text-base">
                  <li>5 Einzelzimmer und großer Gemeinschaftsbereich</li>
                  <li>Pflege nach SGB V und SGB XI — alle Pflegegrade</li>
                  <li>Deutsch · Englisch · Ukrainisch · Polnisch · Russisch</li>
                  <li className="font-medium text-paper-50">
                    Kurzfristige Aufnahme nach Krankenhausaufenthalt
                  </li>
                  <li>Zentral in Berlin-Tiergarten, bestens angebunden</li>
                </ul>
              </>
            ),
          },
          {
            id: "medizin",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">
                  Medizinische Anbindung
                </p>
                <h2
                  id="medizin-heading"
                  className="mt-3 font-serif text-[clamp(1.75rem,6.5vw,3.5rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Renommierte Kliniken in unmittelbarer Nähe.
                </h2>
                <p className="mt-5 font-serif text-lg text-paper-50 sm:mt-6 sm:text-2xl">
                  Charité · Elisabeth Klinik · Franziskus-Krankenhaus
                </p>
                <p className="mt-3 max-w-lg text-paper-50/75">
                  Enge Zusammenarbeit mit Ärzten und Therapeuten — und Spazierwege im
                  Tiergarten vor der Tür.
                </p>
              </>
            ),
          },
        ]}
      />

      <section id="galerie" className="scroll-mt-20 bg-ink-900 py-12 sm:py-20" aria-labelledby="galerie-heading">
        <div className="px-4 sm:px-8 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/55">Galerie</p>
          <h2 id="galerie-heading" className="mt-3 font-serif text-[clamp(1.75rem,6vw,3rem)] text-paper-50">
            Einblicke in unsere Räume
          </h2>
          <p className="mt-2 text-sm text-paper-50/50">Zur Seite streichen</p>
        </div>
        <div className="mt-8 sm:mt-10">
          <GalleryEditorial />
        </div>
      </section>

      <StickyStory
        image="/fotos/gemeinschaftsraum.png"
        alt="Gemeinschaftsraum der Anicca Pflege WG"
        panels={[
          {
            id: "kontakt",
            content: (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper-50/65">Kontakt</p>
                <h2
                  id="kontakt-heading"
                  className="mt-3 font-serif text-[clamp(1.85rem,7vw,4.25rem)] leading-[1.08] text-paper-50 sm:mt-4"
                >
                  Wir freuen uns auf Ihre Nachricht.
                </h2>
                <p className="mt-4 max-w-lg text-base text-paper-50/85 sm:mt-5 sm:text-lg">
                  Fragen oder Besichtigungstermin? Schreiben Sie uns — wir melden uns zeitnah.
                </p>
                <p className="mt-6 font-serif text-xl text-paper-50 sm:mt-8 sm:text-2xl">
                  Veronika Chekurda
                </p>
                <p className="mt-1">
                  <a href="tel:+4915229451581" className="block w-fit text-paper-50/80 hover:text-paper-50">
                    0152 29451581
                  </a>
                  <a
                    href="mailto:nika.chekurda@icloud.com"
                    className="mt-0.5 block w-fit whitespace-nowrap text-paper-50/80 hover:text-paper-50"
                  >
                    nika.chekurda@icloud.com
                  </a>
                </p>
                <p className="mt-4 text-sm text-paper-50/70 sm:mt-5">
                  Vladislav Pinskij ·{" "}
                  <a href="tel:+491778238631" className="hover:text-paper-50">0177 8238631</a>
                  <br />
                  Pflegedienst Awamedi ·{" "}
                  <a href="tel:+493023638340" className="hover:text-paper-50">030 / 23638340</a>
                </p>
              </>
            ),
          },
          {
            wide: true,
            content: (
              <div className="bg-paper-100 p-4 sm:p-8">
                <p className="font-serif text-xl text-ink-900 sm:text-2xl">Nachricht senden</p>
                <p className="mt-1 text-sm text-ink-500">Wir antworten in der Regel zeitnah.</p>
                <div className="mt-5 sm:mt-6">
                  <ContactForm />
                </div>
              </div>
            ),
          },
        ]}
      />

      <MapEmbed />
    </>
  );
}
