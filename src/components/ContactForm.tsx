"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full min-h-[48px] border-0 border-b border-ink-900/12 bg-transparent px-0 py-3 text-base text-ink-900 placeholder-ink-300 outline-none transition-colors focus:border-sage-500 disabled:opacity-60";

const labelClass = "mb-1 block text-sm text-ink-500";

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
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="font-serif text-2xl text-ink-900">Vielen Dank.</p>
          <p className="mt-3 max-w-xs text-ink-500">
            Ihre Nachricht wurde gesendet. Wir melden uns zeitnah bei Ihnen.
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="text-link mt-8 inline-block">
            Weitere Nachricht senden
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4 sm:space-y-5"
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
                <div className="border border-clay-300 bg-clay-50 px-4 py-3 text-sm text-clay-700">
                  {errorMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Name *</span>
              <input type="text" name="nachname" required disabled={status === "sending"} className={inputClass} placeholder="Nachname" autoComplete="family-name" />
            </label>
            <label className="block">
              <span className={labelClass}>Vorname *</span>
              <input type="text" name="vorname" required disabled={status === "sending"} className={inputClass} placeholder="Vorname" autoComplete="given-name" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>E-Mail *</span>
              <input type="email" name="email" required disabled={status === "sending"} className={inputClass} placeholder="ihre@email.de" autoComplete="email" />
            </label>
            <label className="block">
              <span className={labelClass}>Telefon (optional)</span>
              <input type="tel" name="telefon" disabled={status === "sending"} className={inputClass} placeholder="030 1234567" autoComplete="tel" />
            </label>
          </div>

          <label className="block">
            <span className={labelClass}>Nachricht *</span>
            <textarea
              name="nachricht"
              required
              rows={3}
              disabled={status === "sending"}
              className={`${inputClass} min-h-[88px] resize-y`}
              placeholder="Ihre Nachricht …"
            />
          </label>

          <p className="text-xs leading-relaxed text-ink-400">
            Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
            <Link href="/rechtliches#datenschutz" className="underline underline-offset-2 hover:text-sage-600">
              Datenschutzerklärung
            </Link>
            . (Art. 13/14 DSGVO)
          </p>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
            {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
