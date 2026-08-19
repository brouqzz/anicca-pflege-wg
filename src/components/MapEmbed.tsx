const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Anicca%20Pflege%20WG%2C%20Pohlstra%C3%9Fe%2049%2C%2010785%20Berlin&hl=de&z=16&ie=UTF8&iwloc=near&output=embed";

const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=Anicca%20Pflege%20WG%2C%20Pohlstra%C3%9Fe%2049%2C%2010785%20Berlin";

export default function MapEmbed() {
  return (
    <section
      id="lage"
      className="relative min-h-[100svh] overflow-hidden bg-paper-200"
      aria-label="Standort"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Crop the top so Google's white place card is out of view */}
        <iframe
          title="Standort Anicca Pflege WG – Pohlstraße 49, 10785 Berlin"
          src={MAP_EMBED_URL}
          className="absolute left-0 w-full border-0"
          style={{ top: "-6.5rem", height: "calc(100% + 6.5rem)" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-[max(2.5rem,calc(env(safe-area-inset-bottom)+1.25rem))] pt-24 sm:px-10 lg:px-16 lg:pb-24">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-50/70">Lage</p>
        <p className="mt-3 font-serif text-[clamp(2.15rem,8vw,5rem)] leading-[1.05] tracking-[-0.03em] text-paper-50">
          Anicca Pflege WG
        </p>
        <p className="mt-2 text-base text-paper-50/80 sm:text-lg">Pohlstraße 49 · 10785 Berlin-Tiergarten</p>
        <a
          href={MAP_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto mt-7 inline-flex min-h-12 w-full items-center justify-center bg-paper-50 px-6 text-sm font-medium text-ink-900 transition-colors hover:bg-white sm:mt-8 sm:w-auto sm:min-h-[3.25rem] sm:px-7"
        >
          In Google Maps öffnen
        </a>
      </div>
    </section>
  );
}
