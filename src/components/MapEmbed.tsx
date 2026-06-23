const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.6!2d13.3655951!3d52.5004466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9943128b9%3A0x713101087610c5f8!2sAnicca%20Pflege%20WG!5e0!3m2!1sde!2sde!4v1748390000000!5m2!1sde!2sde";

const MAP_LINK_URL =
  "https://www.google.com/maps/place/Anicca+Pflege+WG/@52.5004498,13.3630202,17z";

export default function MapEmbed() {
  return (
    <div className="group overflow-hidden bg-paper-100">
      <iframe
        title="Standort Anicca Pflege WG – Pohlstraße 49, 10785 Berlin"
        src={MAP_EMBED_URL}
        width="100%"
        height="420"
        className="block w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="flex items-center justify-between gap-4 border-t border-ink-900/10 bg-paper-100 px-5 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink-500">
          <svg className="h-3.5 w-3.5 text-clay-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Pohlstraße 49 · Berlin
        </div>
        <a
          href={MAP_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper-100 transition-colors hover:bg-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-400 focus:ring-offset-1"
        >
          Google Maps
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
