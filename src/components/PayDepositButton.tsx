"use client";

import { useState } from "react";

type Props = {
  packageId: string;
  label?: string;
  className?: string;
};

function isStripeCheckoutUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    const host = parsed.hostname.toLowerCase();
    return host === "checkout.stripe.com" || host === "stripe.com" || host.endsWith(".stripe.com");
  } catch {
    return false;
  }
}

export function PayDepositButton({
  packageId,
  label = "Pay deposit",
  className = "",
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });
      const json = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !json.url) {
        throw new Error(json.error || "Unable to start checkout");
      }
      if (!isStripeCheckoutUrl(json.url)) {
        throw new Error("Unexpected checkout URL");
      }
      window.location.href = json.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={checkout}
        disabled={loading}
        className={`focus-ring inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition disabled:opacity-60 ${className}`}
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
