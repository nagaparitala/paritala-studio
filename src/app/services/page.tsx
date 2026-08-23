import type { Metadata } from "next";
import Link from "next/link";
import { PayDepositButton } from "@/components/PayDepositButton";
import { packages, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Simple pricing — $250 one-time for site design/UI, or $150/month for ongoing maintenance. Stripe checkout available.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
        Clear scope. Clear price.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Prefer a conversation first? Email{" "}
        <a className="text-accent-soft hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        or use the{" "}
        <Link href="/contact" className="text-accent-soft hover:underline">
          contact form
        </Link>
        .
      </p>

      <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.title} className="border-t border-border pt-5">
            <h2 className="text-lg font-medium text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ul>

      <section id="pricing" className="scroll-mt-24 mt-20">
        <h2 className="display text-3xl text-foreground sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Two options. Pay via Stripe Checkout when you’re ready. Refundable if
          we don’t kick off within 14 days.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col border-t-2 pt-6 ${
                pkg.popular ? "border-accent" : "border-border"
              }`}
            >
              {pkg.popular && (
                <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  Most chosen
                </span>
              )}
              <h3 className="text-xl font-medium text-foreground">{pkg.name}</h3>
              <p className="display mt-2 text-3xl text-accent-soft">
                {pkg.price}
                <span className="ml-2 text-lg font-normal text-muted">
                  {pkg.priceNote}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">
                {pkg.id === "maintenance"
                  ? "First month via Stripe to start"
                  : "Pay once via Stripe to start"}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pkg.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <PayDepositButton
                  packageId={pkg.id}
                  label={
                    pkg.id === "maintenance"
                      ? `Pay $${pkg.amount.toLocaleString()} (first month)`
                      : `Pay $${pkg.amount.toLocaleString()}`
                  }
                  className={
                    pkg.popular
                      ? "bg-accent text-background hover:bg-accent-soft"
                      : "border border-border text-foreground hover:border-accent"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
