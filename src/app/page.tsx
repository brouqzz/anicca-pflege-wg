"use client";

import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import FadeIn from "@/components/FadeIn";
import GallerySlideshow from "@/components/GallerySlideshow";
import MapEmbed from "@/components/MapEmbed";
import MaskReveal from "@/components/MaskReveal";
import Parallax from "@/components/Parallax";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ───────────────────────── Primitives ───────────────────────── */

function Kicker({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <span className="kicker">
      <span className="tabular-nums">{index}</span>
      <span>{children}</span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-4xl leading-none text-ink-800 sm:text-5xl">
        <Counter value={value} />
      </span>
      <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-400">
        {label}
      </span>
    </div>
  );
}

function ListRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-4 border-b border-ink-900/10 py-3.5">
      <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-clay-500" aria-hidden />
      <span className="text-ink-600">{children}</span>
    </li>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ════════════════════════ HERO ════════════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
        aria-label="Willkommen"
      >
        {/* Ambient morphing warmth */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -left-[12%] top-[6%] h-[34rem] w-[34rem] animate-morph bg-clay-100/45 blur-[120px]" />
          <div className="absolute -right-[10%] bottom-[2%] h-[30rem] w-[30rem] animate-morph-slow bg-paper-300/70 blur-[110px]" />
          <div className="absolute left-[45%] top-[40%] h-[18rem] w-[18rem] animate-morph bg-clay-200/30 blur-[90px]" style={{ animationDelay: "-6s" }} />
        </div>

        <div className="mx-auto w-full max-w-8xl">
          {/* Top eyebrow row */}
          <FadeIn>
            <div className="flex items-center justify-between border-b border-ink-900/10 pb-6">
              <span className="kicker">Pflege-Wohngemeinschaft</span>
              <span className="hidden text-xs uppercase tracking-[0.2em] text-ink-400 sm:block">
                Berlin · Tiergarten
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-16">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-display-2xl text-ink-900">
                <MaskReveal delay={0.1}>Ein Zuhause,</MaskReveal>
                <MaskReveal delay={0.24}>
                  das <span className="italic text-clay-500">bleibt</span>.
                </MaskReveal>
              </h1>
            </div>

            <div className="flex flex-col justify-end lg:col-span-4">
              <FadeIn delay={0.2}>
                <p className="text-lead text-ink-500">
                  Anicca Pflege WG — eine familiäre Wohngemeinschaft für fünf Menschen, im Herzen
                  Berlins. Würdevoll begleitet, professionell versorgt.
                </p>
              </FadeIn>
              <FadeIn delay={0.3} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="btn-ink w-full sm:w-auto">
                  Besichtigung vereinbaren
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+4915229451581" className="btn-ghost w-full sm:w-auto">
                  0152 29451581
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Stat band */}
          <FadeIn delay={0.4}>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ink-900/10 pt-10 sm:grid-cols-4 lg:mt-24">
              <Stat value="5" label="Bewohner" />
              <Stat value="24/7" label="Pflege & Betreuung" />
              <Stat value="5" label="Sprachen" />
              <Stat value="01" label="Lage · Tiergarten" />
            </div>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#ueber-uns"
          className="absolute bottom-6 right-5 hidden items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-400 transition-colors hover:text-clay-500 sm:right-8 sm:flex lg:right-12"
          aria-label="Nach unten scrollen"
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Scrollen
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-ink-900/10 bg-ink-900 py-4 text-paper-100">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center" aria-hidden={rep === 1}>
              {[
                "Familiäre Pflege-WG",
                "Kurzfristige Aufnahme",
                "Ambulante Pflege SGB V / XI",
                "Alle Pflegegrade",
                "Mehrsprachig",
                "Mitten in Berlin",
              ].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-8 font-serif text-lg italic">{t}</span>
                  <span className="text-clay-400">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════ ÜBER UNS ════════════════════════ */}
      <section
        id="ueber-uns"
        className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="ueber-uns-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <Kicker index="01">Über uns</Kicker>
              </FadeIn>
              <h2 id="ueber-uns-heading" className="mt-7 font-serif text-display-lg text-ink-900">
                <MaskReveal delay={0.05}>Klein, persönlich,</MaskReveal>
                <MaskReveal delay={0.16}>mitten im Leben.</MaskReveal>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.1} className="space-y-6 text-ink-600">
                <p className="text-lead text-ink-700">
                  Die Anicca Pflege WG ist eine familiäre Wohnform für Seniorinnen und Senioren mit
                  Pflegebedarf — mitten im Herzen der Stadt.
                </p>
                <p>
                  Unsere kleine Wohngemeinschaft mit nur fünf Bewohnern verbindet individuelles
                  Wohnen, ambulante Pflege und ein sicheres Umfeld. Mehrsprachige Kommunikation in
                  Deutsch, Englisch, Ukrainisch, Polnisch und Russisch.
                </p>
                <p>
                  Sichere Anschlussversorgung nach Krankenhausentlassung — mit direkter telefonischer
                  Abstimmung und kurzfristiger Aufnahme.
                </p>
                <div className="pt-2">
                  <a href="#kontakt" className="link-underline inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
                    Kontakt aufnehmen
                    <svg className="h-4 w-4 text-clay-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Wide editorial image band */}
          <FadeIn delay={0.15}>
            <div className="group relative mt-16 aspect-[16/7] w-full overflow-hidden rounded-3xl bg-ink-900 lg:mt-20">
              <Parallax className="absolute inset-x-0 -inset-y-[14%]" distance={50}>
                <Image
                  src="/fotos/pohlstrasse.png"
                  alt="Anicca Pflege WG – Wohnhaus in der Pohlstraße 49, Berlin-Tiergarten"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 1400px"
                  className="object-cover"
                />
              </Parallax>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" aria-hidden />
              <div className="absolute bottom-5 left-6 rounded-full bg-ink-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-paper-100 backdrop-blur-sm">
                Pohlstraße 49 · Berlin
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════ UNSERE WG ════════════════════════ */}
      <section
        id="unsere-wg"
        className="scroll-mt-24 bg-paper-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="unsere-wg-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <FadeIn>
                <Kicker index="02">Unsere Wohngemeinschaft</Kicker>
              </FadeIn>
              <h2 id="unsere-wg-heading" className="mt-7 font-serif text-display-lg text-ink-900">
                <MaskReveal delay={0.05}>Raum für Gemeinschaft</MaskReveal>
                <MaskReveal delay={0.16}>
                  <span className="italic text-clay-500">und</span> Rückzug.
                </MaskReveal>
              </h2>
              <FadeIn delay={0.1}>
                <p className="mt-7 text-ink-600">
                  Im zweiten Obergeschoss eines gepflegten Wohnhauses in Berlin-Tiergarten — bequem
                  mit dem Aufzug erreichbar. Bewusst klein und familiär gestaltet.
                </p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <ul className="mt-8 border-t border-ink-900/10">
                  <ListRow>5 individuell gestaltbare Einzelzimmer</ListRow>
                  <ListRow>Großer Gemeinschaftsbereich für Mahlzeiten und Aktivitäten</ListRow>
                  <ListRow>2 WC / Badezimmer</ListRow>
                  <ListRow>Ruhige und persönliche Atmosphäre</ListRow>
                  <ListRow>Raum für Gemeinschaft und Rückzug</ListRow>
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} direction="right" className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <MapEmbed />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════ PFLEGE & BETREUUNG ════════════════════════ */}
      <section
        id="pflegekonzept"
        className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="pflegekonzept-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <FadeIn direction="left" className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-900">
                <Parallax className="absolute inset-x-0 -inset-y-[12%]" distance={60}>
                  <Image
                    src="/fotos/einzelzimmer.png"
                    alt="Wohnliches Einzelzimmer der Anicca Pflege WG"
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                </Parallax>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/25 to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-6 rounded-full bg-ink-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-paper-100 backdrop-blur-sm">
                  Einzelzimmer
                </div>
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <FadeIn>
                <Kicker index="03">Pflege & Betreuung</Kicker>
              </FadeIn>
              <h2 id="pflegekonzept-heading" className="mt-7 font-serif text-display-lg text-ink-900">
                <MaskReveal delay={0.05}>Versorgung</MaskReveal>
                <MaskReveal delay={0.16}>mit Sorgfalt.</MaskReveal>
              </h2>
              <FadeIn delay={0.1}>
                <p className="mt-7 text-ink-600">
                  Die Versorgung erfolgt durch einen ambulanten Pflegedienst. Möglich sind unter
                  anderem:
                </p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <ul className="mt-6 border-t border-ink-900/10">
                  <ListRow>Pflege nach SGB V und SGB XI</ListRow>
                  <ListRow>Betreuung aller Pflegegrade</ListRow>
                  <ListRow>Unterstützung bei Körperpflege und Mobilität</ListRow>
                  <ListRow>Medikamentenmanagement</ListRow>
                  <ListRow>Zusammenarbeit mit Ärzten und Therapeuten</ListRow>
                </ul>
              </FadeIn>
              <FadeIn delay={0.24}>
                <p className="mt-8 inline-flex items-center gap-3 border-l-2 border-clay-500 pl-4 text-sm font-medium uppercase tracking-[0.14em] text-ink-700">
                  Kurzfristige Aufnahme nach Krankenhausaufenthalt
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ MEDIZIN — espresso panel ════════════════════════ */}
      <section
        id="medizin"
        className="scroll-mt-24 bg-espresso px-5 py-24 text-paper-100 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="medizin-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="kicker text-clay-300">04 — Medizinische Anbindung</span>
              </FadeIn>
              <h2 id="medizin-heading" className="mt-7 font-serif text-display-lg text-paper-100">
                <MaskReveal delay={0.05}>Renommierte Kliniken</MaskReveal>
                <MaskReveal delay={0.16}>in unmittelbarer Nähe.</MaskReveal>
              </h2>
              <FadeIn delay={0.1}>
                <p className="mt-7 max-w-md text-ink-200">
                  Diese Nähe ermöglicht eine hervorragende medizinische Versorgung und enge
                  Zusammenarbeit mit Ärzten und Therapeuten.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-paper-100/15">
                {[
                  { n: "Charité – Universitätsmedizin Berlin", s: "Weltbekannte Universitätsklinik" },
                  { n: "Evangelische Elisabeth Klinik", s: "Spezialisierte Fachklinik" },
                  { n: "Franziskus-Krankenhaus Berlin", s: "Modernes Allgemeinkrankenhaus" },
                ].map((k, i) => (
                  <FadeIn key={k.n} delay={0.1 + i * 0.08}>
                    <div className="group flex items-center justify-between gap-6 border-b border-paper-100/15 py-7 transition-colors hover:bg-paper-100/5">
                      <div>
                        <p className="font-serif text-2xl text-paper-100">{k.n}</p>
                        <p className="mt-1.5 text-sm text-ink-300">{k.s}</p>
                      </div>
                      <span className="font-serif text-3xl text-clay-300/70 tabular-nums">
                        0{i + 1}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ LEISTUNGEN ════════════════════════ */}
      <section
        id="leistungen"
        className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="leistungen-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="max-w-2xl">
            <FadeIn>
              <Kicker index="05">Leistungen</Kicker>
            </FadeIn>
            <h2 id="leistungen-heading" className="mt-7 font-serif text-display-lg text-ink-900">
              <MaskReveal delay={0.05}>Alles für ein</MaskReveal>
              <MaskReveal delay={0.16}>würdevolles Zuhause.</MaskReveal>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
            {[
              { n: "01", title: "Wohnraum",      text: "5 Einzelzimmer und großer Gemeinschaftsbereich." },
              { n: "02", title: "Pflege",        text: "Pflege nach SGB V und SGB XI – alle Pflegegrade." },
              { n: "03", title: "Mehrsprachig",  text: "Deutsch · Englisch · Ukrainisch · Polnisch · Russisch." },
              { n: "04", title: "Aufnahme",      text: "Kurzfristige Aufnahme nach Krankenhausaufenthalt." },
              { n: "05", title: "Betreuung",     text: "Individuelle Pflege und Medikamentenmanagement." },
              { n: "06", title: "Lage",          text: "Zentral in Berlin-Tiergarten, bestens angebunden." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.07}>
                <div className="group flex h-full flex-col justify-between gap-12 bg-paper-100 p-8 transition-colors duration-400 hover:bg-paper-50 sm:p-10">
                  <span className="font-serif text-2xl text-clay-400 tabular-nums">{item.n}</span>
                  <div>
                    <p className="font-serif text-2xl text-ink-900">{item.title}</p>
                    <p className="mt-3 text-ink-500">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ LAGE + QUOTE ════════════════════════ */}
      <section
        id="lage"
        className="scroll-mt-24 bg-paper-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="lage-heading"
      >
        <div className="mx-auto max-w-8xl">
          {/* Pull quote */}
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-serif text-display text-ink-900 sm:text-display-lg">
              <MaskReveal delay={0.05}>„Wenn die Entlassung geplant ist —</MaskReveal>
              <MaskReveal delay={0.18}>
                <span className="italic text-clay-500">Anicca ist bereit.</span>“
              </MaskReveal>
            </p>
            <FadeIn delay={0.3}>
              <footer className="mt-8 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-ink-400">
                <span className="h-px w-8 bg-clay-500/60" aria-hidden />
                Anicca Pflege WG · Berlin-Tiergarten
              </footer>
            </FadeIn>
          </blockquote>

          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <Kicker index="06">Lage</Kicker>
                <h3 id="lage-heading" className="mt-7 font-serif text-display text-ink-900">
                  Leben im Herzen Berlins.
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-6 text-ink-600">
                  Die zentrale Lage in Berlin-Tiergarten bietet eine hervorragende Infrastruktur.
                  Auch der Tiergarten und der Potsdamer Platz sind schnell erreichbar.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <ul className="grid border-t border-ink-900/10 sm:grid-cols-2">
                  {[
                    "Cafés und Restaurants",
                    "Einkaufsmöglichkeiten",
                    "Arztpraxen und Physiotherapie",
                    "Apotheken und Friseure",
                    "Spaziermöglichkeiten im Tiergarten",
                    "Gute ÖPNV-Anbindung",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 border-b border-ink-900/10 py-4 text-ink-600 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                      <span className="h-1 w-1 rounded-full bg-clay-500" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ GALERIE ════════════════════════ */}
      <section
        id="galerie"
        className="scroll-mt-24 py-24 sm:py-32 lg:py-40"
        aria-labelledby="galerie-heading"
      >
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="flex items-end justify-between border-b border-ink-900/10 pb-6">
              <div>
                <Kicker index="07">Galerie</Kicker>
                <h2 id="galerie-heading" className="mt-6 font-serif text-display-lg text-ink-900">
                  Einblicke
                </h2>
              </div>
              <span className="hidden text-xs uppercase tracking-[0.2em] text-ink-400 sm:block">
                Unsere Räume
              </span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="mt-12 w-full">
          <GallerySlideshow />
        </FadeIn>
      </section>

      {/* ════════════════════════ KONTAKT ════════════════════════ */}
      <section
        id="kontakt"
        className="scroll-mt-24 bg-espresso px-5 py-24 text-paper-100 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        aria-labelledby="kontakt-heading"
      >
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Left: invitation + details */}
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="kicker text-clay-300">08 — Kontakt</span>
              </FadeIn>
              <h2 id="kontakt-heading" className="mt-7 font-serif text-display-lg text-paper-100">
                <MaskReveal delay={0.05}>Sprechen wir.</MaskReveal>
              </h2>
              <FadeIn delay={0.12}>
                <p className="mt-6 max-w-md text-ink-200">
                  Sie haben Fragen oder möchten einen Besichtigungstermin? Schreiben Sie uns — wir
                  melden uns zeitnah.
                </p>
              </FadeIn>

              <FadeIn delay={0.12}>
                <div className="mt-10 border-t border-paper-100/15">
                  {[
                    {
                      role: "Anicca Pflege WG",
                      name: "Pohlstraße 49 · 10785 Berlin",
                    },
                    {
                      role: "Ansprechpartnerin",
                      name: "Veronika Chekurda",
                      phone: { href: "tel:+4915229451581", label: "0152 29451581" },
                      email: { href: "mailto:nika.chekurda@icloud.com", label: "nika.chekurda@icloud.com" },
                    },
                    {
                      role: "Weiterer Ansprechpartner",
                      name: "Vladislav Pinskij",
                      phone: { href: "tel:+491778238631", label: "0177 8238631" },
                    },
                    {
                      role: "Pflegedienst — Awamedi GmbH",
                      name: "Albrechtstraße 12 · 10117 Berlin",
                      phone: { href: "tel:+493023638340", label: "030 / 23638340" },
                    },
                  ].map((p) => (
                    <div key={p.role} className="border-b border-paper-100/15 py-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-clay-300">
                        {p.role}
                      </p>
                      <p className="mt-2 font-serif text-xl text-paper-100">{p.name}</p>
                      <div className="mt-1.5 space-y-1 text-sm text-ink-200">
                        {p.phone && (
                          <a href={p.phone.href} className="link-underline block w-fit hover:text-paper-100">
                            {p.phone.label}
                          </a>
                        )}
                        {p.email && (
                          <a href={p.email.href} className="link-underline block w-fit break-all hover:text-paper-100">
                            {p.email.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: form */}
            <FadeIn delay={0.2} direction="right" className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
