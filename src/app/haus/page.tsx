/**
 * Lokale Demo: interaktives Haus – Fenster, Tür, Dach anklickbar.
 * Aufruf: http://localhost:3000/haus
 */
import InteractiveHouse from "@/components/InteractiveHouse";
import Link from "next/link";

export const metadata = {
  title: "Haus entdecken | Anicca Pflege WG",
  robots: { index: false, follow: false },
};

export default function HausPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-beige-50 via-white to-sage-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold-600">
            Interaktiv · Lokal
          </p>
          <h1 className="font-serif text-3xl text-navy-700 sm:text-5xl">
            Entdecken Sie unser Haus
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-navy-600">
            Jedes Fenster erzählt eine andere Geschichte – die Tür führt Sie zum Kontakt.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm text-navy-500 transition-colors hover:text-gold-600"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        <InteractiveHouse linkPrefix="/" />

        <p className="mt-16 text-center text-xs text-navy-400">
          Demo-Seite – nur lokal unter /haus. Später kann das Haus in die Startseite eingebunden werden.
        </p>
      </div>
    </section>
  );
}
