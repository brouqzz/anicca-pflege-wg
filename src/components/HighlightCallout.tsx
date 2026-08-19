import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface HighlightCalloutProps {
  /** Main message — displayed large */
  title: string;
  subtitle?: string;
  /** compact = inline band, full = dramatic full-bleed */
  size?: "compact" | "full";
  showCta?: boolean;
  variant?: "sage" | "warm";
}

export default function HighlightCallout({
  title,
  subtitle,
  size = "full",
  showCta = true,
  variant = "sage",
}: HighlightCalloutProps) {
  const bg =
    variant === "sage"
      ? "bg-sage-600 text-paper-50"
      : "bg-clay-500 text-paper-50";

  const padding = size === "full" ? "py-14 sm:py-20 lg:py-24" : "py-10 sm:py-12";

  return (
    <ScrollReveal variant="scale">
      <aside
        className={`relative overflow-hidden ${bg} ${padding}`}
        aria-label="Wichtiger Hinweis"
      >
        {/* subtle texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 40px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.15) 41px)",
          }}
          aria-hidden
        />

        <div className={`relative ${size === "full" ? "section-shell" : "section-shell"}`}>
          <div className={size === "full" ? "max-w-4xl" : "max-w-3xl"}>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-paper-100/70">
              Wichtig für Angehörige & Kliniken
            </p>
            <p
              className={`font-serif leading-[1.15] tracking-[-0.02em] ${
                size === "full"
                  ? "text-[clamp(1.75rem,4.5vw,3.25rem)]"
                  : "text-[clamp(1.35rem,3vw,2rem)]"
              }`}
            >
              {title}
            </p>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper-100/85 sm:text-lg">
                {subtitle}
              </p>
            )}
            {showCta && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#kontakt"
                  className="inline-flex min-h-[3rem] items-center justify-center bg-paper-50 px-6 text-sm font-medium text-ink-900 transition-colors hover:bg-white"
                >
                  Jetzt anfragen
                </Link>
                <a
                  href="tel:+4915229451581"
                  className="inline-flex min-h-[3rem] items-center justify-center border border-paper-100/40 px-6 text-sm font-medium text-paper-50 transition-colors hover:bg-paper-100/10"
                >
                  0152 29451581
                </a>
              </div>
            )}
          </div>
        </div>
      </aside>
    </ScrollReveal>
  );
}
