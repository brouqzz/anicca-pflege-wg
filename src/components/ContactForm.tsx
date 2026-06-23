"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full min-h-[52px] border-0 border-b border-ink-900/15 bg-transparent px-0 py-3 text-base text-ink-900 placeholder-ink-300 outline-none transition-colors duration-300 focus:border-clay-500 disabled:opacity-60";

const labelClass =
  "mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-400";

export default function ContactForm() {
  const [status, setStatus]             = useState<Status>("idle");
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
          nachname:  data.get("nachname"),
          vorname:   data.get("vorname"),
          email:     data.get("email"),
          telefon:   data.get("telefon") || undefined,
          nachricht: data.get("nachricht"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          res.status === 503
            ? "Der E-Mail-Versand ist noch nicht eingerichtet. Bitte schreiben Sie direkt an nika.chekurda@icloud.com oder rufen Sie uns an: 0152 29451581."
            : typeof json.error === "string"
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

  return (
    <div className="rounded-3xl bg-paper-100 p-8 shadow-lift sm:p-10 lg:p-12">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center py-14 text-center"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-clay-100">
              <svg className="h-8 w-8 text-clay-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-serif text-display-sm text-ink-900">Vielen Dank.</p>
            <p className="mt-3 max-w-xs text-ink-500">
              Ihre Nachricht wurde gesendet. Wir melden uns zeitnah bei Ihnen.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="link-underline mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-clay-500"
            >
              Weitere Nachricht senden
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-7"
            onSubmit={handleSubmit}
            noValidate
          >
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-clay-300 bg-clay-50 px-4 py-3 text-sm leading-relaxed text-clay-600">
                    {errorMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Name *</span>
                <input type="text" name="nachname" required disabled={status === "sending"} className={inputClass} placeholder="Nachname" />
              </label>
              <label className="block">
                <span className={labelClass}>Vorname *</span>
                <input type="text" name="vorname" required disabled={status === "sending"} className={inputClass} placeholder="Vorname" />
              </label>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>E-Mail *</span>
                <input type="email" name="email" required disabled={status === "sending"} className={inputClass} placeholder="ihre@email.de" />
              </label>
              <label className="block">
                <span className={labelClass}>
                  Telefon <span className="font-normal normal-case text-ink-300">(optional)</span>
                </span>
                <input type="tel" name="telefon" disabled={status === "sending"} className={inputClass} placeholder="030 1234567" />
              </label>
            </div>

            <label className="block">
              <span className={labelClass}>Nachricht *</span>
              <textarea
                name="nachricht"
                required
                rows={4}
                disabled={status === "sending"}
                className={`${inputClass} min-h-[110px] resize-y`}
                placeholder="Ihre Nachricht …"
              />
            </label>

            <p className="text-xs leading-relaxed text-ink-400">
              Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
              <Link href="/rechtliches#datenschutz" className="text-ink-600 underline underline-offset-2 hover:text-clay-500">
                Datenschutzerklärung
              </Link>{" "}
              einverstanden. (Art. 13/14 DSGVO)
            </p>

            <button type="submit" disabled={status === "sending"} className="btn-ink w-full disabled:opacity-60 sm:w-auto">
              {status === "sending" ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Wird gesendet …
                </>
              ) : (
                <>
                  Nachricht senden
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
