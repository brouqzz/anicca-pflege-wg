"use client";

import Link from "next/link";

/**
 * Kontaktformular als Client Component – notwendig für onSubmit und andere Event-Handler.
 * Server Components dürfen keine Event-Handler übergeben.
 */
export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Später: z. B. API-Route aufrufen oder E-Mail versenden
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-700">Name *</span>
          <input
            type="text"
            required
            className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
            placeholder="Nachname"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-700">Vorname *</span>
          <input
            type="text"
            required
            className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
            placeholder="Vorname"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">E-Mail *</span>
        <input
          type="email"
          required
          className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
          placeholder="ihre@email.de"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">Telefon (optional)</span>
        <input
          type="tel"
          className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
          placeholder="030 1234567"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">Nachricht *</span>
        <textarea
          required
          rows={4}
          className="w-full min-h-[120px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 resize-y"
          placeholder="Ihre Nachricht …"
        />
      </label>
      <p className="text-xs text-navy-500 leading-relaxed">
        Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
        <Link href="/datenschutz" className="underline hover:text-gold-600">Datenschutzerklärung</Link>
        {" "}und dem{" "}
        <Link href="/impressum" className="underline hover:text-gold-600">Impressum</Link>
        {" "}einverstanden. (Art. 13/14 DSGVO)
      </p>
      <button
        type="submit"
        className="mt-4 w-full min-h-[44px] rounded-lg bg-navy-600 px-6 py-3 font-medium text-white transition-colors hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 sm:w-auto"
      >
        Nachricht senden
      </button>
    </form>
  );
}
