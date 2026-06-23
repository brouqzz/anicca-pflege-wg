import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "nika.chekurda@icloud.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Anicca Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-Mail-Versand ist nicht konfiguriert." },
      { status: 503 }
    );
  }

  let body: {
    nachname?: string;
    vorname?: string;
    email?: string;
    telefon?: string;
    nachricht?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const nachname = body.nachname?.trim() ?? "";
  const vorname = body.vorname?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const telefon = body.telefon?.trim() ?? "";
  const nachricht = body.nachricht?.trim() ?? "";

  if (!nachname || !vorname || !email || !nachricht) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
  }

  const subject = `Kontaktanfrage von ${vorname} ${nachname} – Anicca Pflege WG`;
  const html = `
    <h2>Neue Nachricht über anicca.berlin</h2>
    <p><strong>Name:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}</p>
    <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${telefon ? `<p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>` : ""}
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(nachricht).replace(/\n/g, "<br>")}</p>
  `;

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);

    const resendMessage =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: string }).message)
        : "";

    // Ohne verifizierte Domain erlaubt Resend nur die Anmelde-E-Mail als Empfänger.
    if (resendMessage.includes("only send testing emails to your own email address")) {
      console.error(
        `[contact] Empfänger ${TO_EMAIL} nicht erlaubt. Domain anicca.berlin bei Resend verifizieren oder CONTACT_TO_EMAIL auf die Resend-Konto-E-Mail setzen.`
      );
    }

    return NextResponse.json(
      {
        error:
          "Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns unter 0152 29451581 an oder schreiben Sie an nika.chekurda@icloud.com.",
      },
      { status: 500 }
    );
  }

  if (!data?.id) {
    console.error("Resend: keine E-Mail-ID zurückgegeben");
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
