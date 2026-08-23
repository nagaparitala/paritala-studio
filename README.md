# Paritala Studio

Personal studio site for **Naga Bhargav Paritala** — custom websites for small businesses.

**Brand:** Paritala Studio  
**Contact:** naga.paritala@gmail.com  
**Featured case study:** Garage Mahal (Next.js dealer site — demo on request)

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Stripe Checkout for package deposits
- Contact API with local JSONL store + optional Resend email

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — hero, services, Garage Mahal teaser, how-it-works, CTA |
| `/work` | Work index |
| `/work/garage-mahal` | Garage Mahal case study |
| `/services` | Packages + Stripe deposit buttons |
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
| `STRIPE_SECRET_KEY` | For deposits | Server Stripe secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For deposits | Publishable key |
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

### Stripe deposits

`POST /api/create-checkout-session` with `{ "packageId": "starter" | "growth" | "custom" }` creates a Checkout Session for the package deposit ($500 / $1,000 / $1,500). Without `STRIPE_SECRET_KEY`, the API returns 503 with a clear error.

## Build and deploy

```bash
bun run build
bun run start
```

Deploy on Vercel: import this repo, set the env vars above, deploy. Default branch: `main`.

## License

Private / all rights reserved unless otherwise noted.
