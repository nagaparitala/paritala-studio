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

const LIMITS = {
  name: 200,
  email: 254,
  business: 200,
  budget: 100,
  message: 5000,
} as const;

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

type Bucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, Bucket>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_MAX) {
    return false;
  }
  bucket.count += 1;
  return true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function redactEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "[redacted]";
  const hint = local.slice(0, 1) || "?";
  return `${hint}***@${domain}`;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

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
  if (name.length > LIMITS.name) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (email.length > LIMITS.email || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (business.length > LIMITS.business) {
    return NextResponse.json({ error: "Business name is too long." }, { status: 400 });
  }
  if (budget.length > LIMITS.budget) {
    return NextResponse.json({ error: "Budget field is too long." }, { status: 400 });
  }
  if (message.length > LIMITS.message) {
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

  // Log metadata only — no full PII or message body
  console.info(
    "[contact]",
    JSON.stringify({
      at: entry.at,
      email: redactEmail(email),
      nameLength: name.length,
      messageLength: message.length,
      hasBusiness: Boolean(business),
      hasBudget: Boolean(budget),
    }),
  );

  // Persist locally only outside production (ephemeral on Vercel anyway)
  if (process.env.NODE_ENV !== "production") {
    try {
      const dir = path.join(process.cwd(), ".data");
      await mkdir(dir, { recursive: true });
      await appendFile(
        path.join(dir, "contact-submissions.jsonl"),
        `${JSON.stringify(entry)}\n`,
        "utf8",
      );
    } catch (err) {
      console.warn(
        "[contact] file store skipped:",
        err instanceof Error ? err.message : "error",
      );
    }
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
          from: process.env.RESEND_FROM || "Refresh Studio <onboarding@resend.dev>",
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
        console.warn("[contact] Resend failed:", res.status);
      }
    } catch (err) {
      console.warn(
        "[contact] Resend error:",
        err instanceof Error ? err.message : "error",
      );
    }
  }

  return NextResponse.json({ ok: true });
}
