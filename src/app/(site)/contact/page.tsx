import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.email}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="display mt-3 text-4xl text-foreground sm:text-5xl">
            Tell us what you’re building
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Share your business and goals. We usually reply within one business
            day. Ask for {site.owner.split(" ")[0]}.
          </p>
          <div className="mt-8 border-t border-border pt-6">
            <a
              href={`mailto:${site.email}`}
              className="focus-ring mt-2 inline-block text-lg text-accent-soft hover:text-accent"
            >
              {site.email}
            </a>
            <p className="mt-4 text-sm text-muted">
              Looking at pricing?{" "}
              <Link href="/services#pricing" className="text-accent-soft hover:underline">
                See packages
              </Link>{" "}
              — $250 one-time design/UI or $150/month maintenance. Stripe
              checkout coming soon; email us or use the form to get started.
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
