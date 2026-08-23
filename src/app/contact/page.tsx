import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.email}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
            Let’s talk about your site
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Share a bit about your business and goals. I usually reply within one
            business day.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Email directly
            </p>
            <a
              href={`mailto:${site.email}`}
              className="focus-ring mt-2 inline-block text-lg text-accent-soft hover:text-accent"
            >
              {site.email}
            </a>
            <p className="mt-4 text-sm text-muted">
              Prefer to reserve a slot first?{" "}
              <a href="/services#pricing" className="text-accent-soft hover:underline">
                Pay a package deposit
              </a>{" "}
              via Stripe.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
