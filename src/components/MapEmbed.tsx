/**
 * Kleine Karte: Standort Anicca Pflege WG, Pohlstraße 49, 10785 Berlin.
 * OpenStreetMap-Embed (kein API-Key nötig).
 */
const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=13.360%2C52.500%2C13.374%2C52.508&layer=mapnik&marker=52.504%2C13.367";

const MAP_LINK_URL = "https://www.google.com/maps/search/?api=1&query=Pohlstraße+49,10785+Berlin";

export default function MapEmbed() {
  return (
    <div className="rounded-lg overflow-hidden border border-beige-200 bg-beige-100/50">
      <iframe
        title="Standort Anicca Pflege WG – Pohlstraße 49, 10785 Berlin"
        src={MAP_EMBED_URL}
        width="100%"
        height="240"
        className="block border-0 w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="p-3 text-center text-sm text-navy-600">
        <a
          href={MAP_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold-600 transition-colors underline"
        >
          Pohlstraße 49, 10785 Berlin – in Google Maps öffnen
        </a>
      </p>
    </div>
  );
}
