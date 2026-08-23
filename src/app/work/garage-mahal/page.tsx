import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage Mahal",
  description:
    "Case study: Next.js car-dealer site with DealerCenter inventory sync, financing & trade-in flows, and dealer price breakdown.",
};

const highlights = [
  {
    title: "DealerCenter inventory sync",
    body: "Vehicle listings stay current with the dealer’s DealerCenter feed — stock, photos, and pricing without manual CSV chores.",
  },
  {
    title: "Financing & trade-in flows",
    body: "Guided forms that capture credit/trade intent and route leads to the sales team with the context they need.",
  },
  {
    title: "Vehicle detail with price breakdown",
    body: "Transparent dealer pricing on the VDP — fees and totals explained so shoppers don’t bounce at the fine print.",
  },
];

export default function GarageMahalPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/work" className="focus-ring hover:text-accent">
          Work
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-foreground">Garage Mahal</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Case study
        </p>
        <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
          Garage Mahal
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          A custom Next.js experience for a car dealer that needed live inventory,
          serious lead capture, and pricing clarity — not another WordPress theme
          fighting plugins.
        </p>
        <p className="mt-4 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
          <strong className="font-medium text-foreground">Demo:</strong> available
          on request. There is no public live URL published on this site.
          Email{" "}
          <a
            className="text-accent-soft underline-offset-2 hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>{" "}
          to schedule a walkthrough.
        </p>
      </header>

      <div
        className="mt-12 aspect-[21/9] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/15 via-surface to-accent-deep/30"
        role="img"
        aria-label="Stylized preview of Garage Mahal dealer UI"
      />

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h2 className="text-lg font-medium text-foreground">{h.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-muted leading-relaxed">
        <h2 className="display text-2xl text-foreground">Approach</h2>
        <p>
          The stack centers on Next.js App Router for SEO-friendly vehicle pages
          and fast navigation. Inventory is synced from DealerCenter so the
          catalog reflects what’s actually on the lot. Lead flows for financing
          and trade-ins are first-class routes — not buried popups — so mobile
          shoppers can complete them without friction.
        </p>
        <p>
          On each vehicle detail page, the dealer price breakdown surfaces
          components of the total so buyers understand the number before they
          call. That transparency is a conversion feature as much as a trust
          signal.
        </p>
      </section>

      <div className="mt-14 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="focus-ring inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
        >
          Want something like this?
        </Link>
        <Link
          href="/services"
          className="focus-ring inline-flex justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/40"
        >
          See services
        </Link>
      </div>
    </article>
  );
}
