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
    body: "Listings stay current with the dealer’s DealerCenter feed — stock, photos, and pricing without CSV chores.",
  },
  {
    title: "Financing & trade-in flows",
    body: "Guided forms that capture credit/trade intent and route leads with the context sales needs.",
  },
  {
    title: "VDP price breakdown",
    body: "Transparent dealer pricing on the vehicle detail page so shoppers understand the number before they call.",
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
        <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
          Garage Mahal
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          A custom Next.js experience for a car dealer that needed live
          inventory, serious lead capture, and pricing clarity — not another
          WordPress theme fighting plugins.
        </p>
        <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-muted">
          <strong className="font-medium text-foreground">Demo:</strong>{" "}
          available on request. No public live URL on this site. Email{" "}
          <a
            className="text-accent-soft underline-offset-2 hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>{" "}
          to schedule a walkthrough.
        </p>
      </header>

      <section className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title}>
            <h2 className="text-lg font-medium text-foreground">{h.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-muted leading-relaxed">
        <h2 className="display text-2xl text-foreground">Approach</h2>
        <p>
          Next.js App Router for SEO-friendly vehicle pages and fast navigation.
          Inventory syncs from DealerCenter so the catalog matches the lot.
          Financing and trade-in are first-class routes — not buried popups —
          so mobile shoppers can finish them.
        </p>
        <p>
          On each vehicle detail page, the dealer price breakdown surfaces the
          total’s components. Transparency is a conversion feature, not just a
          trust signal.
        </p>
      </section>

      <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="focus-ring inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
        >
          Want something like this?
        </Link>
        <Link
          href="/services"
          className="focus-ring inline-flex justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          See services
        </Link>
      </div>
    </article>
  );
}
