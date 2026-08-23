import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from Refresh Studio, including Garage Mahal.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Selected builds for businesses that need inventory, payments, and
        conversion flows — not just a brochure.
      </p>

      <article className="mt-14 border-t border-border pt-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display mt-3 text-3xl text-foreground">
              Garage Mahal
            </h2>
            <p className="mt-2 text-lg text-muted">
              Dealer site with live inventory & financing flows
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted">
              Next.js storefront for a car dealer: DealerCenter inventory sync,
              trade-in and financing journeys, and vehicle detail pages with a
              clear dealer price breakdown.
            </p>
            <p className="mt-3 text-sm text-muted">Live demo available on request.</p>
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
