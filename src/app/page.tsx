import Link from "next/link";
import { howItWorks, packages, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <h1 className="display max-w-3xl text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Websites small businesses can run — inventory, payments, leads.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.name} is led by {site.owner}. We design and build custom
            Next.js sites for owners who want clarity and real integrations —
            not another cookie-cutter theme.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
            >
              Book a discovery call
            </Link>
            <Link
              href="/work/garage-mahal"
              className="focus-ring inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Garage Mahal case study
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                What we ship
              </h2>
              <p className="mt-2 max-w-lg text-muted">
                Design, build, and wire the workflows your business actually
                needs.
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
                body: "Brand-forward UI sized for your pages and offers — not a theme skin.",
              },
              {
                title: "Next.js builds",
                body: "TypeScript App Router sites that stay fast and maintainable.",
              },
              {
                title: "Integrations",
                body: "DealerCenter, Stripe, forms, financing — connected end to end.",
              },
              {
                title: "Ongoing care",
                body: "$150/mo maintenance when you want updates without hunting freelancers.",
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
          <div className="max-w-3xl">
            <h2 className="display text-3xl text-foreground sm:text-4xl">
              Garage Mahal
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Next.js dealer site with DealerCenter inventory sync, financing
              and trade-in lead flows, and vehicle pages with a transparent
              dealer price breakdown.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>Live inventory from DealerCenter</li>
              <li>Financing & trade-in lead flows</li>
              <li>Dealer price breakdown on the VDP</li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Demo on request — no public live URL published here.
            </p>
            <Link
              href="/work/garage-mahal"
              className="focus-ring mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent-soft"
            >
              Read the case study
            </Link>
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
