"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nachname: data.get("nachname"),
          vorname: data.get("vorname"),
          email: data.get("email"),
          telefon: data.get("telefon") || undefined,
          nachricht: data.get("nachricht"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          typeof json.error === "string"
            ? json.error
            : "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später oder rufen Sie uns an."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Verbindungsfehler. Bitte versuchen Sie es später oder kontaktieren Sie uns telefonisch unter 0152 29451581."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-sage-200 bg-sage-50/80 p-8 text-center">
        <p className="font-serif text-xl text-navy-700 mb-2">Vielen Dank!</p>
        <p className="text-navy-600">
          Ihre Nachricht wurde gesendet. Wir melden uns zeitnah bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold-600 hover:text-gold-700 underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div
        role="alert"
        className={`rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 ${status === "error" ? "block" : "hidden"}`}
      >
        {errorMessage}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-700">Name *</span>
          <input
            type="text"
            name="nachname"
            required
            disabled={status === "sending"}
            className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 disabled:opacity-60"
            placeholder="Nachname"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-700">Vorname *</span>
          <input
            type="text"
            name="vorname"
            required
            disabled={status === "sending"}
            className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 disabled:opacity-60"
            placeholder="Vorname"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">E-Mail *</span>
        <input
          type="email"
          name="email"
          required
          disabled={status === "sending"}
          className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 disabled:opacity-60"
          placeholder="ihre@email.de"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">Telefon (optional)</span>
        <input
          type="tel"
          name="telefon"
          disabled={status === "sending"}
          className="w-full min-h-[44px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 disabled:opacity-60"
          placeholder="030 1234567"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-700">Nachricht *</span>
        <textarea
          name="nachricht"
          required
          rows={4}
          disabled={status === "sending"}
          className="w-full min-h-[120px] rounded-lg border border-beige-300 bg-white px-4 py-3 text-base text-navy-700 placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 resize-y disabled:opacity-60"
          placeholder="Ihre Nachricht …"
        />
      </label>

      <p className="text-xs text-navy-500 leading-relaxed">
        Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
        <Link href="/rechtliches#datenschutz" className="underline hover:text-gold-600">
          Datenschutzerklärung
        </Link>{" "}
        und dem{" "}
        <Link href="/rechtliches#impressum" className="underline hover:text-gold-600">
          Impressum
        </Link>{" "}
        einverstanden. (Art. 13/14 DSGVO)
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 w-full min-h-[44px] rounded-lg bg-navy-600 px-6 py-3 font-medium text-white transition-colors hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  );
}
