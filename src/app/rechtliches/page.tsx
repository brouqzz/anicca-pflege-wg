import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz | Anicca Pflege WG",
  description: "Impressum und Datenschutzerklärung der Anicca Pflege WG Berlin.",
};

export default function RechtlichesPage() {
  return (
    <div className="section-shell pb-16 pt-24 sm:pb-24 sm:pt-28">
      <Link href="/" className="text-link inline-flex items-center gap-2 text-sm">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 font-serif text-[clamp(2rem,4vw,2.75rem)] text-ink-900">
        Impressum & Datenschutz
      </h1>

      <div className="mt-12 space-y-12">
        <section id="impressum" aria-labelledby="impressum-heading" className="border-t border-ink-900/10 pt-10">
          <h2 id="impressum-heading" className="font-serif text-2xl text-ink-900">
            Impressum
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-600">
            <p className="font-medium text-ink-800">Anicca Pflege WG</p>
            <p>Pohlstraße 49<br />10785 Berlin</p>
            <p>
              <span className="font-medium text-ink-800">Ansprechpartnerin:</span> Veronika Chekurda
              <br />
              Telefon:{" "}
              <a href="tel:+4915229451581" className="text-link !text-sm">
                0152 29451581
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:nika.chekurda@icloud.com" className="text-link !text-sm whitespace-nowrap">
                nika.chekurda@icloud.com
              </a>
            </p>
            <p>
              <span className="font-medium text-ink-800">Vladislav Pinskij</span>
              <br />
              Telefon:{" "}
              <a href="tel:+491778238631" className="text-link !text-sm">
                0177 8238631
              </a>
            </p>
            <p className="text-ink-500">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Veronika Chekurda, Pohlstraße 49,
              10785 Berlin.
            </p>
          </div>
        </section>

        <section id="datenschutz" aria-labelledby="datenschutz-heading" className="border-t border-ink-900/10 pt-10">
          <h2 id="datenschutz-heading" className="font-serif text-2xl text-ink-900">
            Datenschutzerklärung
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-600">
            <p className="font-medium text-ink-800">Verantwortliche Stelle</p>
            <p>
              Anicca Pflege WG, Pohlstraße 49, 10785 Berlin. Kontakt: nika.chekurda@icloud.com,
              Tel. 0152 29451581.
            </p>
            <p className="font-medium text-ink-800 pt-2">Erhebung und Verarbeitung personenbezogener Daten</p>
            <p>
              Beim Besuch dieser Website können Zugriffsdaten (Datum, Uhrzeit, aufgerufene Seite,
              übertragene Datenmenge, Browser/Endgerät) in Server-Logs erfasst werden. Eine Zuordnung
              zu Ihrer Person erfolgt nicht. Sofern Sie uns per Kontaktformular oder E-Mail schreiben,
              werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p className="font-medium text-ink-800 pt-2">Rechtsgrundlage und Zweck</p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung/Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am
              Betrieb der Website). Eine Weitergabe an Dritte erfolgt nur, soweit gesetzlich vorgesehen
              oder Sie eingewilligt haben.
            </p>
            <p className="font-medium text-ink-800 pt-2">Ihre Rechte</p>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit und Widerspruch (Art. 15–22 DSGVO). Beschwerden können Sie bei einer
              Aufsichtsbehörde für den Datenschutz einreichen.
            </p>
            <p className="text-ink-500 pt-2">
              Stand: Angaben bitte bei Bedarf durch einen Rechtsberater prüfen und ergänzen.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
