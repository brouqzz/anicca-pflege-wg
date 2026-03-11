import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz | Anicca Pflege WG",
  description: "Impressum und Datenschutzerklärung der Anicca Pflege WG Berlin.",
};

export default function RechtlichesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-gold-600 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>
        <h1 className="mt-4 font-serif text-2xl text-navy-700 sm:text-display">
          Impressum & Datenschutz
        </h1>
      </div>

      <div className="space-y-10">
        {/* Kasten Impressum */}
        <section
          id="impressum"
          className="rounded-xl border border-beige-200 bg-white p-6 shadow-soft sm:p-8"
          aria-labelledby="impressum-heading"
        >
          <h2 id="impressum-heading" className="font-serif text-xl text-navy-700 mb-6">
            Impressum
          </h2>
          <div className="text-navy-600 text-sm leading-relaxed space-y-4">
            <p className="font-semibold text-navy-700">Anicca Pflege WG</p>
            <p>Pohlstraße 49</p>
            <p>10785 Berlin</p>
            <p className="pt-2">
              <span className="font-medium text-navy-700">Ansprechpartnerin:</span> Veronika Chekurda<br />
              Telefon:{" "}
              <a href="tel:+4915229451581" className="hover:text-gold-600 transition-colors">
                0152 29451581
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:nika.chekurda@icloud.com" className="hover:text-gold-600 transition-colors break-all">
                nika.chekurda@icloud.com
              </a>
            </p>
            <p>
              <span className="font-medium text-navy-700">Vladislav Pinskij</span><br />
              Telefon:{" "}
              <a href="tel:+491778238631" className="hover:text-gold-600 transition-colors">
                0177 8238631
              </a>
            </p>
            <p className="pt-4 text-navy-500">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Veronika Chekurda, Pohlstraße 49, 10785 Berlin.
            </p>
          </div>
        </section>

        {/* Kasten Datenschutz */}
        <section
          id="datenschutz"
          className="rounded-xl border border-beige-200 bg-white p-6 shadow-soft sm:p-8"
          aria-labelledby="datenschutz-heading"
        >
          <h2 id="datenschutz-heading" className="font-serif text-xl text-navy-700 mb-6">
            Datenschutzerklärung
          </h2>
          <div className="text-navy-600 text-sm leading-relaxed space-y-4">
            <p className="font-medium text-navy-700">Verantwortliche Stelle</p>
            <p>
              Anicca Pflege WG, Pohlstraße 49, 10785 Berlin. Kontakt: nika.chekurda@icloud.com, Tel. 0152 29451581.
            </p>
            <p className="font-medium text-navy-700 pt-2">Erhebung und Verarbeitung personenbezogener Daten</p>
            <p>
              Beim Besuch dieser Website können Zugriffsdaten (Datum, Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browser/Endgerät) in Server-Logs erfasst werden. Eine Zuordnung zu Ihrer Person erfolgt nicht. Sofern Sie uns per Kontaktformular oder E-Mail schreiben, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p className="font-medium text-navy-700 pt-2">Rechtsgrundlage und Zweck</p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung/Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website). Eine Weitergabe an Dritte erfolgt nur, soweit gesetzlich vorgesehen oder Sie eingewilligt haben.
            </p>
            <p className="font-medium text-navy-700 pt-2">Ihre Rechte</p>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–22 DSGVO). Beschwerden können Sie bei einer Aufsichtsbehörde für den Datenschutz einreichen.
            </p>
            <p className="text-navy-500 pt-2">
              Stand: Angaben bitte bei Bedarf durch einen Rechtsberater prüfen und ergänzen.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
