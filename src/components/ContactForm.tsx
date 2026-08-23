"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      business: String(data.get("business") || "").trim(),
      budget: String(data.get("budget") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }
      setStatus("success");
      setMessage("Thanks — we’ll reply within one business day.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-foreground placeholder:text-muted/60"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-foreground placeholder:text-muted/60"
            placeholder="you@business.com"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Business</span>
          <input
            name="business"
            autoComplete="organization"
            className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-foreground placeholder:text-muted/60"
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Approx. budget</span>
          <select
            name="budget"
            className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-foreground"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-3k">Under $3k</option>
            <option value="3k-6k">$3k – $6k</option>
            <option value="6k-12k">$6k – $12k</option>
            <option value="12k-plus">$12k+</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-muted">Project details</span>
        <textarea
          name="message"
          required
          rows={5}
          className="focus-ring mt-1.5 w-full resize-y rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-foreground placeholder:text-muted/60"
          placeholder="What are you building? Timeline? Any must-have integrations?"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition hover:bg-accent-soft disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {message && (
          <p
            role="status"
            className={`text-sm ${
              status === "success" ? "text-success" : "text-danger"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
