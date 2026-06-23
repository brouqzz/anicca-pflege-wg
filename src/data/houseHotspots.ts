export type HotspotId =
  | "door"
  | "window-1"
  | "window-2"
  | "window-3"
  | "window-4"
  | "window-5"
  | "roof";

export type Hotspot = {
  id: HotspotId;
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  contact?: { phone: string; email: string };
};

export const HOUSE_HOTSPOTS: Hotspot[] = [
  {
    id: "door",
    label: "Haustür",
    title: "Willkommen bei Anicca",
    body: "Familiär wohnen – professionell versorgt. Ihre Pflege-WG in Berlin-Tiergarten.",
    bullets: [
      "Kurzfristige Aufnahme möglich",
      "Besichtigung nach Vereinbarung",
      "Pohlstraße 49, 10785 Berlin",
    ],
    contact: { phone: "0152 29451581", email: "nika.chekurda@icloud.com" },
  },
  {
    id: "window-1",
    label: "Fenster 1",
    title: "Familiär & persönlich",
    body: "Nur 5 Bewohner – individuelle Zimmer in warmer Atmosphäre.",
    bullets: ["Kleine WG", "Mehrsprachig: DE · EN · UA · PL · RU"],
  },
  {
    id: "window-2",
    label: "Fenster 2",
    title: "Pflege & Betreuung",
    body: "Ambulanter Pflegedienst – alle Pflegegrade.",
    bullets: ["SGB V und SGB XI", "Medikamentenmanagement"],
  },
  {
    id: "window-3",
    label: "Fenster 3",
    title: "Medizinische Anbindung",
    body: "Kliniken und Ärzte in unmittelbarer Nähe.",
    bullets: ["Charité", "Elisabeth Klinik", "Franziskus-Krankenhaus"],
  },
  {
    id: "window-4",
    label: "Fenster 4",
    title: "Leben in Berlin",
    body: "Zentral in Tiergarten – Infrastruktur und Grünflächen nah.",
    bullets: ["Tiergarten", "Cafés & Apotheken", "2. OG mit Aufzug"],
  },
  {
    id: "window-5",
    label: "Fenster 5",
    title: "Unsere Wohngemeinschaft",
    body: "5 Einzelzimmer, großer Gemeinschaftsbereich, 2 Bäder.",
    bullets: ["Gemeinschaft & Rückzug", "Ruhige Atmosphäre"],
  },
  {
    id: "roof",
    label: "Dach",
    title: "Anicca Pflege WG",
    body: "Pflege-Wohngemeinschaft im Herzen Berlins – wenn die Entlassung geplant ist, sind wir bereit.",
    bullets: ["5 Bewohner", "Berlin-Tiergarten", "Kurzfristige Aufnahme"],
  },
];

export const HOTSPOT_BY_ID = Object.fromEntries(
  HOUSE_HOTSPOTS.map((h) => [h.id, h])
) as Record<HotspotId, Hotspot>;
