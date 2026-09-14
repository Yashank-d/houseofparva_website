import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json({ error: "Server not configured." }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    const fromEmail = process.env.RESEND_FROM_EMAIL || "Parva Website <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; line-height: 1.6; color: #1C1B18;">
          <h2 style="margin: 0 0 8px; font-size: 18px;">New message from the House of Parva</h2>
          <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 4px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 4px;"><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
          <p style="margin: 12px 0 4px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap; background: #F5F1E8; padding: 12px; border-radius: 6px;">${escapeHtml(message)}</p>
          <p style="margin: 16px 0 0; font-size: 12px; color: #888;">Sent from thehouseofparva.in — ${new Date().toISOString()}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message || "Failed to send." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
