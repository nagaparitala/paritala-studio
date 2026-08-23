import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment received",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="display text-3xl text-foreground sm:text-4xl">
        Payment received — thank you
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        I’ll confirm your project kickoff by email shortly. Questions? Reach me at{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-accent-soft hover:underline"
        >
          {site.email}
        </a>
        .
      </p>
      <Link
        href="/"
        className="focus-ring mt-10 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background hover:bg-accent-soft"
      >
        Back home
      </Link>
    </div>
  );
}
