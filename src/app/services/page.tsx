import type { Metadata } from "next";
import Link from "next/link";
import { PayDepositButton } from "@/components/PayDepositButton";
import { packages, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website packages for small businesses — Starter, Growth, and Custom builds with Stripe deposit checkout.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Services
      </p>
      <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
        Built for small businesses
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Clear packages, custom design, modern stack. Prefer a conversation first?
        Email{" "}
        <a className="text-accent-soft hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        or use the{" "}
        <Link href="/contact" className="text-accent-soft hover:underline">
          contact form
        </Link>
        .
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h2 className="text-lg font-medium text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ul>

      <section id="pricing" className="scroll-mt-24 mt-20">
        <h2 className="display text-3xl text-foreground sm:text-4xl">
          Packages & deposits
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Pay a project deposit via Stripe Checkout to reserve a slot. Remaining
          balance is invoiced per the proposal. Deposits are refundable if we
          don’t kick off within 14 days of payment.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${
                pkg.popular
                  ? "border-accent/50 bg-surface-elevated shadow-[0_0_0_1px_rgba(196,165,116,0.2)]"
                  : "border-border bg-surface"
              }`}
            >
              {pkg.popular && (
                <span className="mb-3 w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                  Most chosen
                </span>
              )}
              <h3 className="text-xl font-medium text-foreground">{pkg.name}</h3>
              <p className="display mt-2 text-3xl text-accent-soft">{pkg.price}</p>
              <p className="mt-1 text-sm text-muted">
                Deposit ${pkg.deposit.toLocaleString()} to start
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pkg.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PayDepositButton
                  packageId={pkg.id}
                  label={`Pay $${pkg.deposit.toLocaleString()} deposit`}
                  className={
                    pkg.popular
                      ? "bg-accent text-background hover:bg-accent-soft"
                      : "border border-border text-foreground hover:border-accent/40"
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
