import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout canceled",
};

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Stripe Checkout
      </p>
      <h1 className="display mt-3 text-3xl text-foreground sm:text-4xl">
        Checkout canceled
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        No charge was made. You can pick a package again anytime, or reach out if
        you’d rather start with a conversation.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/services#pricing"
          className="focus-ring inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
        >
          Back to pricing
        </Link>
        <Link
          href="/contact"
          className="focus-ring inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground"
        >
          Contact instead
        </Link>
      </div>
    </div>
  );
}
