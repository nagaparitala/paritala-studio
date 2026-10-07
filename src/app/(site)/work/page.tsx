import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from Refresh Studio, including Garage Mahal Motors.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Real sites for businesses that need inventory, payments, and
        conversion flows — not just a brochure.
      </p>

      <article className="mt-14 border-t border-border pt-10">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="display mt-3 text-3xl text-foreground">
              Garage Mahal Motors
            </h2>
            <p className="mt-2 text-lg text-muted">
              Car dealer in Salt Lake City
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Live inventory sync, financing and trade-in flows, transparent
              dealer pricing. Shoppers can browse, apply, and get the numbers
              without calling.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://garagemahalmotors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background hover:bg-accent-soft"
              >
                Visit live site →
              </a>
              <Link
                href="/work/garage-mahal"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent-soft"
              >
                Case study
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src="/work/garage-mahal/hero.png"
                alt="Garage Mahal Motors homepage"
                width={1400}
                height={900}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              Live at{" "}
              <a
                href="https://garagemahalmotors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft hover:underline"
              >
                garagemahalmotors.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
