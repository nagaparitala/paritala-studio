import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

type ContactBody = {
  name?: string;
  email?: string;
  business?: string;
  budget?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const business = (body.business || "").trim();
  const budget = (body.budget || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const entry = {
    at: new Date().toISOString(),
    name,
    email,
    business,
    budget,
    message,
  };

  // Always log server-side
  console.info("[contact]", JSON.stringify(entry));

  // Persist locally (works on Vercel only ephemerally; fine for local/dev)
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "contact-submissions.jsonl"),
      `${JSON.stringify(entry)}\n`,
      "utf8",
    );
  } catch (err) {
    console.warn("[contact] file store skipped:", err);
  }

  // Optional Resend email when configured
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_TO || "naga.paritala@gmail.com";
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Refresh Studios <onboarding@resend.dev>",
          to: [notifyTo],
          reply_to: email,
          subject: `New inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Business: ${business || "—"}`,
            `Budget: ${budget || "—"}`,
            "",
            message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.warn("[contact] Resend failed:", res.status, text);
      }
    } catch (err) {
      console.warn("[contact] Resend error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
