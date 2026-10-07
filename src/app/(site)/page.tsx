import Image from "next/image";
import Link from "next/link";
import { howItWorks, packages, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
                Recent work
              </p>
              <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Garage Mahal Motors
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                A custom dealer site that syncs live inventory, captures
                financing and trade-in leads, and shows transparent pricing —
                so shoppers can browse like owners.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://garagemahalmotors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
                >
                  Visit the live site →
                </a>
                <Link
                  href="/work/garage-mahal"
                  className="focus-ring inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline"
                >
                  Read the case study
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-border bg-surface">
                <Image
                  src="/work/garage-mahal/hero.png"
                  alt="Garage Mahal Motors homepage"
                  width={1400}
                  height={900}
                  className="w-full"
                  priority
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
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                What you get
              </h2>
              <p className="mt-2 max-w-lg text-muted">
                Real sites that work for your customers and your business.
              </p>
            </div>
            <Link
              href="/services#pricing"
              className="focus-ring text-sm font-medium text-accent hover:text-accent-soft"
            >
              Pricing →
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {[
              {
                title: "Custom design",
                body: "Layouts and UI built for your brand and what you sell — not a template.",
              },
              {
                title: "Live inventory",
                body: "Connect your catalog so listings stay current without manual updates.",
              },
              {
                title: "Payment & lead flows",
                body: "Stripe checkout, financing forms, trade-in capture — wired and ready.",
              },
              {
                title: "Ongoing maintenance",
                body: "$150/mo when you want updates, fixes, and improvements without the hunt.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-border pt-5">
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                More from Garage Mahal
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Shoppers browse live inventory, apply for financing, submit
                trade-in details, and see transparent dealer pricing — all
                without leaving the site or calling for the basics.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li>✓ Live inventory from dealer feed</li>
                <li>✓ Financing application with credit tiers</li>
                <li>✓ Trade-in value capture</li>
                <li>✓ Clear price breakdown on every vehicle</li>
              </ul>
              <Link
                href="/work/garage-mahal"
                className="focus-ring mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent-soft"
              >
                Read the full case study
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-md border border-border bg-surface">
                  <Image
                    src="/work/garage-mahal/inventory.png"
                    alt="Garage Mahal inventory page"
                    width={700}
                    height={450}
                    className="w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-md border border-border bg-surface">
                  <Image
                    src="/work/garage-mahal/vehicle-detail.png"
                    alt="Garage Mahal vehicle detail page"
                    width={700}
                    height={450}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="display text-3xl text-foreground sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {howItWorks.map((step) => (
              <li key={step.step}>
                <span className="display text-2xl text-accent">{step.step}</span>
                <h3 className="mt-3 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl border-t border-border pt-12">
            <h2 className="display text-3xl text-foreground sm:text-4xl">
              Ready to start?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {packages[0].price} one-time for design/UI, or {packages[1].price}
              /month for maintenance. Payments refundable if we don’t kick off
              within 14 days.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="focus-ring inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
              >
                Contact {site.owner.split(" ")[0]}
              </Link>
              <Link
                href="/services#pricing"
                className="focus-ring inline-flex justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                See pricing
              </Link>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="focus-ring mt-6 inline-block text-sm text-accent-soft hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
