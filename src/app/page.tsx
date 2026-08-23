import Link from "next/link";
import { howItWorks, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent-deep/20 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {site.name}
          </p>
          <h1 className="display mt-4 max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Websites that make small businesses look unmistakably premium.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We’re a small-business web agency led by {site.owner}. We design
            and build custom Next.js sites for owners who want clarity, speed,
            and real integrations — not another cookie-cutter theme.
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
              className="focus-ring inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent-soft"
            >
              See Garage Mahal case study
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                What we do
              </h2>
              <p className="mt-2 max-w-lg text-muted">
                End-to-end websites for local businesses ready to grow online.
              </p>
            </div>
            <Link
              href="/services"
              className="focus-ring text-sm font-medium text-accent hover:text-accent-soft"
            >
              View pricing →
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.title}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/30"
              >
                <h3 className="text-lg font-medium text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="border-b border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured work
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                Garage Mahal
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                A Next.js car-dealer experience with DealerCenter inventory
                sync, financing & trade-in flows, and vehicle detail pages with
                transparent dealer price breakdown.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ▹
                  </span>
                  Live inventory from DealerCenter
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ▹
                  </span>
                  Financing & trade-in lead flows
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ▹
                  </span>
                  Dealer price breakdown on VDP
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted/80">
                Demo available on request — no public live URL published here.
              </p>
              <Link
                href="/work/garage-mahal"
                className="focus-ring mt-8 inline-flex rounded-full border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent-soft transition hover:bg-accent/10"
              >
                Read the case study
              </Link>
            </div>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-elevated"
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-deep/25" />
              <div className="absolute inset-6 flex flex-col justify-between rounded-xl border border-border/80 bg-background/60 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>Inventory</span>
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent-soft">
                    Synced
                  </span>
                </div>
                <div>
                  <p className="display text-2xl text-foreground">2021 BMW X5</p>
                  <p className="mt-1 text-sm text-muted">Dealer price · transparent fees</p>
                  <div className="mt-4 h-2 w-2/3 rounded-full bg-accent/40" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="display text-3xl text-foreground sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-border bg-surface p-6"
              >
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

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-surface px-6 py-12 text-center sm:px-12">
            <h2 className="display text-3xl text-foreground sm:text-4xl">
              Ready for a site that feels custom?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Tell us about your business. Or start with clear pricing —
              $250 one-time for design/UI, or $150/month for ongoing maintenance.
              Payments are refundable if we don’t kick off within 14 days.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="focus-ring inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft"
              >
                Contact {site.owner.split(" ")[0]}
              </Link>
              <Link
                href="/services#pricing"
                className="focus-ring inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/40"
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
