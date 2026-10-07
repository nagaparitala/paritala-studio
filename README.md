# Refresh Studio

Marketing site for **Refresh Studio** — an agency building custom websites for small businesses. Founded by **Naga Bhargav Paritala**.

**Brand:** Refresh Studio (dark charcoal + metallic silver — top-left logo panel)  
**Contact:** naga.paritala@gmail.com  
**Featured case study:** Garage Mahal (Next.js dealer site — demo on request)

> Repo name remains `paritala-studio` for now; product brand is Refresh Studio.

See `PRODUCT.md` and `DESIGN.md` for brand and design system.

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

## Adding / removing a demo

Demo homepages are designed for build-first outreach: real, functional homepage previews of local trade businesses hosted at `getrefreshstudios.com/demo/<slug>`.

### Adding a new demo

1. **Add demo data** to `src/lib/demos.ts`:
   ```typescript
   const yourSlug: DemoData = {
     slug: "your-slug",
     businessName: "Business Name",
     trade: "Trade (e.g., Roofing Contractor, Plumber)",
     city: "City",
     serviceArea: "City and surrounding areas",
     tagline: "One-line tagline",
     about: "About paragraph",
     services: [
       { title: "Service 1", description: "Description" },
       { title: "Service 2", description: "Description" },
     ],
     rating: 4.8,
     reviewCount: 42,
     reviews: [
       { reviewerName: "Customer Name", stars: 5, quote: "Review text" },
     ],
     photos: [
       { path: "/demo/your-slug/hero.jpg", alt: "Alt text" },
       { path: "/demo/your-slug/photo1.jpg", alt: "Alt text" },
     ],
     hours: "Monday-Friday: 8am-6pm",
     accentColor: "#d97706", // optional
   };
   ```
   Then add it to the `demos` object: `"your-slug": yourSlug,`

2. **Add photos** to `public/demo/your-slug/`:
   - Create the directory: `mkdir -p public/demo/your-slug`
   - Add images (hero, project photos, etc.)
   - Make sure file paths in the data match the actual files

3. **Deploy**: The site will build the new demo page automatically on the next deploy.

### Removing a demo (takedown)

1. **Delete the data entry** from `src/lib/demos.ts` (remove from the `demos` object)
2. **Delete the photos folder**: `rm -rf public/demo/<slug>`
3. **Redeploy**: The demo page will no longer exist on the next deploy

### Demo page guardrails

All demo pages include these protections (baked into the template, not per-demo):

- Persistent top banner: "Demo by Refresh Studios. A preview built for {businessName}, not their official site."
- `robots` meta tag and `X-Robots-Tag` header: `noindex, nofollow`
- No contact forms, phone numbers, tel:/sms:/mailto: links to the shop, or booking widgets
- The only CTA points to `naga@getrefreshstudios.com` or `/contact`
- Photos served locally from `public/demo/<slug>/`, never hotlinked

## License

Private / all rights reserved unless otherwise noted.
