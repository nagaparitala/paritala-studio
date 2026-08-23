# Refresh Studio

Marketing site for **Refresh Studio** — an agency building custom websites for small businesses. Founded by **Naga Bhargav Paritala**.

**Brand:** Refresh Studio  
**Contact:** naga.paritala@gmail.com  
**Featured case study:** Garage Mahal (Next.js dealer site — demo on request)

> Repo name remains `paritala-studio` for now; product brand is Refresh Studio.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Stripe Checkout for design & maintenance payments
- Contact API with local JSONL store + optional Resend email

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — hero, services, Garage Mahal teaser, how-it-works, CTA |
| `/work` | Work index |
| `/work/garage-mahal` | Garage Mahal case study |
| `/services` | Pricing + Stripe payment buttons |
| `/contact` | Contact form + visible email |
| `/checkout/success` | Stripe success |
| `/checkout/cancel` | Stripe cancel |
| `POST /api/contact` | Contact form handler |
| `POST /api/create-checkout-session` | Creates Stripe Checkout Session |

## Getting started

```bash
bun install
# or use your preferred Node package manager

cp .env.example .env.local
# fill in Stripe keys (and optional Resend)

bun run dev
```

Open http://localhost:3000

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `STRIPE_SECRET_KEY` | For payments | Server Stripe secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For payments | Publishable key |
| `NEXT_PUBLIC_SITE_URL` | Recommended in prod | Canonical origin for success/cancel URLs |
| `RESEND_API_KEY` | Optional | Email contact submissions |
| `RESEND_FROM` | Optional | Verified Resend from address |
| `CONTACT_NOTIFY_TO` | Optional | Inbox for inquiries (default: naga.paritala@gmail.com) |

Never commit `.env`, `.env.local`, or real secrets. `.env.example` is the template only.

### Contact API behavior

1. Validates name, email, message.
2. Logs the submission to the server console.
3. Appends a line to `.data/contact-submissions.jsonl` when the filesystem allows.
4. If `RESEND_API_KEY` is set, sends an email via Resend.

### Stripe payments

`POST /api/create-checkout-session` with `{ "packageId": "design" | "maintenance" }` creates a Checkout Session for the allowlisted amount ($250 one-time design/UI, or $150 for the first month of maintenance). Without `STRIPE_SECRET_KEY`, the API returns 503 with a clear error.

## Build and deploy

```bash
bun run build
bun run start
```

Deploy on Vercel: import this repo, set the env vars above, deploy. Default branch: `main`.

## License

Private / all rights reserved unless otherwise noted.
