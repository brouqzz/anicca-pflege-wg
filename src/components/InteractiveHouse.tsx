"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useId, useState } from "react";

type HotspotId =
  | "door"
  | "window-1"
  | "window-2"
  | "window-3"
  | "window-4"
  | "window-5"
  | "roof";

type Hotspot = {
  id: HotspotId;
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: { href: string; text: string };
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "door",
    label: "Haustür – Willkommen & Kontakt",
    title: "Willkommen bei Anicca",
    body: "Durch unsere Tür beginnt familiäres Wohnen mit professioneller Pflege – persönlich, warm und sicher.",
    bullets: [
      "Kurzfristige Aufnahme möglich",
      "Besichtigung nach Vereinbarung",
      "Direkte telefonische Abstimmung",
    ],
    cta: { href: "#kontakt", text: "Kontakt aufnehmen" },
  },
  {
    id: "window-1",
    label: "Fenster links – Über uns",
    title: "Familiär & persönlich",
    body: "Nur 5 Bewohner – jeder hat sein eigenes Zimmer und trotzdem ein echtes Zuhause-Gefühl.",
    bullets: [
      "Kleine, überschaubare WG",
      "Mehrsprachig: DE · EN · UA · PL · RU",
      "Raum für Gemeinschaft und Rückzug",
    ],
    cta: { href: "#ueber-uns", text: "Mehr über uns" },
  },
  {
    id: "window-2",
    label: "Fenster Mitte links – Pflege",
    title: "Pflege & Betreuung",
    body: "Ambulanter Pflegedienst – alle Pflegegrade, eng abgestimmt mit Ärzten und Therapeuten.",
    bullets: [
      "Pflege nach SGB V und SGB XI",
      "Körperpflege & Mobilität",
      "Medikamentenmanagement",
    ],
    cta: { href: "#pflegekonzept", text: "Pflegekonzept" },
  },
  {
    id: "window-3",
    label: "Fenster Mitte – Medizin",
    title: "Medizinische Anbindung",
    body: "Mitten in Berlin-Tiergarten – Kliniken und Fachärzte in unmittelbarer Nähe.",
    bullets: ["Charité", "Elisabeth Klinik", "Franziskus-Krankenhaus"],
    cta: { href: "#medizin", text: "Medizin & Versorgung" },
  },
  {
    id: "window-4",
    label: "Fenster Mitte rechts – Lage",
    title: "Leben im Herzen Berlins",
    body: "Pohlstraße 49 – 2. OG mit Aufzug, zentral und dennoch ruhig.",
    bullets: [
      "Tiergarten & Potsdamer Platz nah",
      "Cafés, Apotheken, Physio",
      "Spazierwege im Grünen",
    ],
    cta: { href: "#lage", text: "Lage entdecken" },
  },
  {
    id: "window-5",
    label: "Fenster rechts – Wohngemeinschaft",
    title: "Unsere Wohngemeinschaft",
    body: "5 Einzelzimmer, großer Gemeinschaftsbereich, 2 Bäder – durchdacht für Komfort und Sicherheit.",
    bullets: [
      "Individuell gestaltbare Zimmer",
      "Gemeinschaftsbereich für Mahlzeiten",
      "Ruhige, persönliche Atmosphäre",
    ],
    cta: { href: "#unsere-wg", text: "Die WG ansehen" },
  },
  {
    id: "roof",
    label: "Dach – Anicca Pflege WG",
    title: "Anicca Pflege WG",
    body: "Familiär wohnen – professionell versorgt. Ihre Pflege-WG in Berlin-Tiergarten.",
    bullets: ["5 Bewohner", "Berlin-Tiergarten", "Kurzfristige Aufnahme"],
    cta: { href: "#hero", text: "Nach oben" },
  },
];

const HOTSPOT_MAP = Object.fromEntries(
  HOTSPOTS.map((h) => [h.id, h])
) as Record<HotspotId, Hotspot>;

function HotspotButton({
  id,
  x,
  y,
  w,
  h,
  active,
  onSelect,
}: {
  id: HotspotId;
  x: number;
  y: number;
  w: number;
  h: number;
  active: boolean;
  onSelect: (id: HotspotId) => void;
}) {
  const hotspot = HOTSPOT_MAP[id];
  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-label={hotspot.label}
      aria-pressed={active}
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
      className="cursor-pointer outline-none"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={2}
        className={`transition-all duration-300 ${
          active
            ? "fill-gold-300/95 stroke-gold-500"
            : "fill-gold-200/50 stroke-gold-400/80"
        }`}
        strokeWidth={active ? 2.5 : 1.5}
      />
      <rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx={1} fill="#f9efd6" opacity={0.85} pointerEvents="none" />
      <line x1={x + w / 2} y1={y + 4} x2={x + w / 2} y2={y + h - 4} stroke="#c98f2e" strokeWidth={1} opacity={0.35} pointerEvents="none" />
      <line x1={x + 4} y1={y + h / 2} x2={x + w - 4} y2={y + h / 2} stroke="#c98f2e" strokeWidth={1} opacity={0.35} pointerEvents="none" />
      {active && (
        <motion.rect
          x={x}
          y={y}
          width={w}
          height={h}
          rx={2}
          fill="none"
          stroke="url(#window-glow)"
          strokeWidth={3}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          pointerEvents="none"
        />
      )}
    </motion.g>
  );
}

export default function InteractiveHouse({
  showHint = true,
  linkPrefix = "",
}: {
  showHint?: boolean;
  /** z. B. "" auf /haus, "/" wenn von Startseite eingebunden */
  linkPrefix?: string;
}) {
  const [active, setActive] = useState<HotspotId | null>(null);
  const [doorOpen, setDoorOpen] = useState(false);
  const panelId = useId();

  const select = useCallback((id: HotspotId) => {
    setActive((prev) => (prev === id ? null : id));
    setDoorOpen(id === "door");
  }, []);

  const info = active ? HOTSPOT_MAP[active] : null;
  const prefix = linkPrefix || "";

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {showHint && (
        <p className="mb-6 text-center text-sm text-navy-500 sm:text-base">
          Klicken Sie auf <strong className="text-navy-700">Fenster</strong>,{" "}
          <strong className="text-navy-700">Tür</strong> oder{" "}
          <strong className="text-navy-700">Dach</strong> – und entdecken Sie Anicca.
        </p>
      )}

      <motion.div
        className="relative mx-auto max-w-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute inset-x-[10%] bottom-[8%] h-[20%] rounded-full bg-gold-300/25 blur-3xl"
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          viewBox="0 0 400 460"
          className="relative z-10 w-full drop-shadow-premium"
          role="img"
          aria-label="Interaktives Haus der Anicca Pflege WG"
        >
          <defs>
            <linearGradient id="roof-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d5170" />
              <stop offset="100%" stopColor="#243247" />
            </linearGradient>
            <linearGradient id="wall-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5f0e8" />
              <stop offset="100%" stopColor="#e8dfd2" />
            </linearGradient>
            <linearGradient id="window-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c278" />
              <stop offset="100%" stopColor="#dba54a" />
            </linearGradient>
            <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Ground */}
          <ellipse cx="200" cy="430" rx="150" ry="18" fill="#c7d1c6" opacity="0.5" />
          <motion.g
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path
              d="M 60 400 Q 200 380 340 400 L 340 430 L 60 430 Z"
              fill="#a3b2a1"
              opacity="0.35"
            />
          </motion.g>

          {/* House body */}
          <g filter="url(#soft-shadow)">
            <rect x="70" y="180" width="260" height="220" rx="4" fill="url(#wall-grad)" stroke="#d4c4b0" strokeWidth="2" />
            <polygon points="200,70 50,195 350,195" fill="url(#roof-grad)" stroke="#243247" strokeWidth="2" strokeLinejoin="round" />

            {/* Chimney */}
            <rect x="285" y="95" width="28" height="55" rx="2" fill="#5c7190" />
            <motion.rect
              x="292"
              y="72"
              width="14"
              height="8"
              rx="4"
              fill="#b8c1cf"
              opacity={0.6}
              animate={{ y: [72, 58, 72], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </g>

          {/* Roof sign – clickable */}
          <motion.g
            role="button"
            tabIndex={0}
            aria-label={HOTSPOT_MAP.roof.label}
            aria-pressed={active === "roof"}
            onClick={() => select("roof")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                select("roof");
              }
            }}
            className="cursor-pointer"
            whileHover={{ scale: 1.03 }}
            style={{ transformOrigin: "200px 161px" }}
          >
            <rect
              x="155"
              y="145"
              width="90"
              height="32"
              rx="4"
              className={`transition-colors ${
                active === "roof" ? "fill-gold-400" : "fill-gold-500/90 hover:fill-gold-400"
              }`}
            />
            <text
              x="200"
              y="166"
              textAnchor="middle"
              className="fill-white font-serif text-[11px] font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              ANICCA
            </text>
          </motion.g>

          {/* Windows – 5 Zimmer */}
          <g>
            <HotspotButton id="window-1" x={95} y={210} w={40} h={55} active={active === "window-1"} onSelect={select} />
            <HotspotButton id="window-2" x={155} y={210} w={40} h={55} active={active === "window-2"} onSelect={select} />
            <HotspotButton id="window-3" x={215} y={210} w={40} h={55} active={active === "window-3"} onSelect={select} />
            <HotspotButton id="window-4" x={95} y={285} w={40} h={55} active={active === "window-4"} onSelect={select} />
            <HotspotButton id="window-5" x={265} y={285} w={40} h={55} active={active === "window-5"} onSelect={select} />
          </g>

          {/* Door frame */}
          <rect x="168" y="318" width="64" height="82" rx="3" fill="#b8a088" />
          <motion.g
            animate={{ rotate: doorOpen ? -32 : 0 }}
            style={{ transformOrigin: "172px 396px" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <motion.g
              role="button"
              tabIndex={0}
              aria-label={HOTSPOT_MAP.door.label}
              aria-pressed={active === "door"}
              onClick={() => select("door")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select("door");
                }
              }}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <path
                d="M 172 322 H 228 V 396 H 172 Z"
                className={`transition-colors ${
                  active === "door" ? "fill-navy-600" : "fill-navy-700"
                }`}
              />
              <circle cx="218" cy="360" r="4" fill="#dba54a" />
            </motion.g>
          </motion.g>

          {/* Warm light from windows when any window active */}
          <AnimatePresence>
            {active?.startsWith("window") && (
              <motion.rect
                x="70"
                y="180"
                width="260"
                height="220"
                fill="url(#window-glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                exit={{ opacity: 0 }}
                pointerEvents="none"
              />
            )}
          </AnimatePresence>
        </svg>
      </motion.div>

      {/* Info panel */}
      <div className="relative mx-auto mt-8 min-h-[200px] max-w-lg">
        <AnimatePresence mode="wait">
          {info ? (
            <motion.div
              key={info.id}
              id={panelId}
              role="region"
              aria-live="polite"
              aria-label={info.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="rounded-2xl border border-beige-200 bg-white p-6 shadow-soft sm:p-8"
            >
              <motion.div
                className="mb-3 h-1 w-12 rounded-full bg-gold-500"
                layoutId="info-accent"
              />
              <h3 className="font-serif text-2xl text-navy-700">{info.title}</h3>
              <p className="mt-3 text-navy-600 leading-relaxed">{info.body}</p>
              {info.bullets && (
                <ul className="mt-4 space-y-2 text-navy-600">
                  {info.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {info.cta && (
                <Link
                  href={`${prefix}${info.cta.href}`}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-navy-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
                >
                  {info.cta.text}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              <button
                type="button"
                onClick={() => {
                  setActive(null);
                  setDoorOpen(false);
                }}
                className="mt-4 block text-sm text-navy-400 underline-offset-2 hover:text-navy-600 hover:underline"
              >
                Schließen
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-navy-400 text-sm py-8"
            >
              Wählen Sie ein Fenster, die Tür oder das Dach …
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <ul className="mt-10 flex flex-wrap justify-center gap-2 text-xs text-navy-500">
        {(["door", "window-1", "window-2", "window-3", "window-4", "window-5", "roof"] as HotspotId[]).map(
          (id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => select(id)}
                className={`rounded-full border px-3 py-1.5 transition-colors min-h-[36px] ${
                  active === id
                    ? "border-gold-400 bg-gold-50 text-navy-700"
                    : "border-beige-200 bg-white hover:border-gold-300"
                }`}
              >
                {id === "door" ? "Tür" : id === "roof" ? "Dach" : `Fenster ${id.split("-")[1]}`}
              </button>
            </li>
          )
        )}
      </ul>
    </motion.div>
  );
}
