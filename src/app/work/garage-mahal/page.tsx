import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage Mahal",
  description:
    "Case study: Custom car-dealer site with live inventory sync, financing & trade-in flows, and transparent dealer pricing.",
};

const highlights = [
  {
    title: "Live inventory sync",
    body: "Listings stay current with the dealer's feed — stock, photos, and pricing update automatically.",
  },
  {
    title: "Financing & trade-in flows",
    body: "Guided forms that capture credit and trade intent so leads arrive with the context sales teams need.",
  },
  {
    title: "Transparent pricing",
    body: "Clear dealer price breakdown on every vehicle so shoppers understand the numbers before they call.",
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
          Garage Mahal Motors
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          A custom website for a car dealer in Salt Lake City that needed live
          inventory, serious lead capture, and pricing clarity — not another
          template fighting plugins.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://garagemahalmotors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
          >
            Visit the live site →
          </a>
          <a
            href={`mailto:${site.email}`}
            className="focus-ring inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline"
          >
            Want something like this?
          </a>
        </div>
      </header>

      <section className="mt-14 border-t border-border pt-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="display text-2xl text-foreground">The site</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Shoppers browse live inventory, apply for financing, submit
                trade-in details, and see transparent dealer pricing — all
                without leaving the site or calling for the basics.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="text-sm font-semibold text-accent-deep uppercase tracking-wider">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src="/work/garage-mahal/hero.png"
                alt="Garage Mahal Motors homepage"
                width={1400}
                height={900}
                className="w-full"
              />
            </div>
            <p className="text-xs text-muted">
              Homepage hero with Taj Mahal arch branding
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="display text-2xl text-foreground">Key features</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-foreground">
              Live inventory
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              57 vehicles synced from the dealer's system. Shoppers filter by
              make, body type, fuel type, price, year, and mileage. Every
              listing shows real photos and accurate pricing.
            </p>
            <div className="mt-6 overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src="/work/garage-mahal/inventory.png"
                alt="Garage Mahal inventory page showing vehicle filters and listings"
                width={1400}
                height={900}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">
              Financing & trade-in
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Dedicated flows for financing applications and trade-in
              valuations. Forms capture the details sales teams need, so leads
              arrive qualified and ready to move forward.
            </p>
            <div className="mt-6 overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src="/work/garage-mahal/vehicle-detail.png"
                alt="Garage Mahal vehicle detail page"
                width={1400}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-10 sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="focus-ring inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
        >
          Start a project
        </Link>
        <Link
          href="/services"
          className="focus-ring inline-flex justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          See pricing
        </Link>
      </div>
    </article>
  );
}
