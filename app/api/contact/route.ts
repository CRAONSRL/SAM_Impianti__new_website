import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/libs/resend";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  const body = await req.json();

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Tutti i campi sono obbligatori." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email non valida." }, { status: 400 });
  }

  try {
    const plainText = [
      `Nome: ${firstName}`,
      `Cognome: ${lastName}`,
      `Email: ${email}`,
      `Oggetto: ${subject}`,
      "",
      message,
    ].join("\n");

    const html = `
      <div>
        <p><strong>Nome:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Cognome:</strong> ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Oggetto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await sendEmail({
      to: "segreteria@samimp.it",
      subject: `Nuovo messaggio dal sito: ${subject}`,
      text: plainText,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio form contatti:", error);
    return NextResponse.json(
      { error: "Impossibile inviare il messaggio in questo momento." },
      { status: 500 },
    );
  }
}
