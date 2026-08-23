import { NextResponse } from "next/server";
import { depositCents, getStripe } from "@/lib/stripe";
import { packages } from "@/lib/site";

type Body = { packageId?: string };

function allowlistedBases(): string[] {
  const bases = [
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://refresh-studios.vercel.app",
    "https://refresh-studios-nparitala-projects.vercel.app",
  ];
  return [
    ...new Set(
      bases
        .filter((v): v is string => Boolean(v && v.trim()))
        .map((v) => v.replace(/\/$/, "")),
    ),
  ];
}

/** Prefer NEXT_PUBLIC_SITE_URL; otherwise only an allowlisted Origin. Never trust raw Origin alone. */
function resolveCheckoutBase(request: Request): string | null {
  const allowed = allowlistedBases();
  const preferred = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (preferred && allowed.includes(preferred)) {
    return preferred;
  }

  const originHeader = request.headers.get("origin")?.replace(/\/$/, "") || "";
  if (originHeader && allowed.includes(originHeader)) {
    return originHeader;
  }

  return null;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const packageId = (body.packageId || "").trim();
  const pkg = packages.find((p) => p.id === packageId);
  const amount = depositCents[packageId];

  if (!pkg || !amount) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Set STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.",
      },
      { status: 503 },
    );
  }

  const base = resolveCheckoutBase(request);
  if (!base) {
    return NextResponse.json(
      { error: "Checkout redirects are not configured for this origin." },
      { status: 400 },
    );
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: `${pkg.name} — project deposit`,
              description: `Deposit toward ${pkg.name} (${pkg.price}). Balance invoiced separately.`,
            },
          },
        },
      ],
      success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/checkout/cancel`,
      metadata: {
        packageId: pkg.id,
        packageName: pkg.name,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout]", err instanceof Error ? err.message : "error");
    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 },
    );
  }
}
