import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key);
}

/** Deposit amounts in cents by package id */
export const depositCents: Record<string, number> = {
  starter: 50_000,
  growth: 100_000,
  custom: 150_000,
};
