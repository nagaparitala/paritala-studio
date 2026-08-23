import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  /** Kept for call-site compatibility; unused until Stripe is live. */
  packageId?: string;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
};

/**
 * Contact-first CTAs while Stripe checkout is not live.
 * Stripe API routes remain in place; this no longer starts checkout.
 */
export function PayDepositButton({
  primaryClassName = "bg-accent text-background hover:bg-accent-soft",
  secondaryClassName = "border border-border text-foreground hover:border-accent",
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`mailto:${site.email}?subject=Refresh%20Studio%20inquiry`}
        className={`focus-ring inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${primaryClassName}`}
      >
        Email us
      </a>
      <Link
        href="/contact"
        className={`focus-ring inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${secondaryClassName}`}
      >
        Request a mockup
      </Link>
    </div>
  );
}
