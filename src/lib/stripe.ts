import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key);
}

/** Checkout amounts in cents by package id (server allowlist) */
export const depositCents: Record<string, number> = {
  design: 25_000,
  maintenance: 15_000,
};
