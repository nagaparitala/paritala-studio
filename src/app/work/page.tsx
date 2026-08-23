import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from Paritala Studio, including Garage Mahal.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Portfolio
      </p>
      <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Selected builds for businesses that need more than a brochure — inventory,
        payments, and conversion flows included.
      </p>

      <article className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="grid lg:grid-cols-2">
          <div
            className="relative min-h-[220px] bg-gradient-to-br from-accent/20 via-surface-elevated to-accent-deep/30 lg:min-h-full"
            aria-hidden
          >
            <div className="absolute inset-0 flex items-end p-8">
              <p className="display text-3xl text-foreground/90">Garage Mahal</p>
            </div>
          </div>
          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Case study · Automotive
            </p>
            <h2 className="mt-2 text-2xl font-medium text-foreground">
              Dealer site with live inventory & financing flows
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Next.js storefront for a car dealer: DealerCenter inventory sync,
              trade-in and financing journeys, and vehicle detail pages with a
              clear dealer price breakdown.
            </p>
            <p className="mt-3 text-sm text-muted/80">
              Live demo available on request.
            </p>
            <Link
              href="/work/garage-mahal"
              className="focus-ring mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background hover:bg-accent-soft"
            >
              View case study
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
