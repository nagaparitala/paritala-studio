# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of local / small businesses (dealers, service shops, clinics, retailers) who need a site that sells and captures leads — not a brochure theme. They often arrive with inventory feeds, booking needs, or payment flows and limited time to manage tech.

Secondary: referrals from existing clients evaluating a redesign or maintenance partner.

## Product Purpose

Refresh Studio designs and builds custom Next.js websites for small businesses. Success means a live site that looks intentional, loads fast, and wires real workflows (inventory, forms, Stripe, financing/trade-in) so the owner can run the business without wrestling plugins.

## Positioning

A singular studio (not a faceless agency farm) led by Naga Bhargav Paritala. Custom design + App Router engineering together. Clear public pricing for design/UI and ongoing maintenance — no “empower / seamless / next-level” fluff.

## Operating Context

Marketing site at this repo. Prospects browse Work → Services/Pricing → Contact or Stripe checkout. Contact submissions are rate-limited; checkout only redirects to allowlisted Stripe hosts. Security headers (CSP, HSTS, frame denial) stay on.

## Capabilities and Constraints

- Public pricing: **$250 one-time** site design/UI; **$150/month** maintenance.
- Payments via Stripe Checkout when configured; refundable if kickoff does not happen within 14 days.
- Contact API: field length limits, IP rate limit, redacted logs; optional Resend notify.
- Do not invent testimonials, live client URLs, or case studies beyond Garage Mahal Motors (live at https://garagemahalmotors.com).
- Brand name in UI: **Refresh Studio** (singular).

## Brand Commitments

- Visual identity from the top-left logo panel: dark charcoal ground, metallic silver wordmark + refresh mark. Not beige, not purple-blue gradients, not luxury-gold overuse.
- Logo assets: `public/logo.png` (wordmark), favicon/mark crops from the same panel.
- Voice: concrete, direct, small-business practical. No AI marketing clichés.

## Evidence on Hand

- Case study: Garage Mahal Motors — live inventory sync, financing & trade-in flows, transparent dealer price breakdown. Live at https://garagemahalmotors.com.
- Logo sheet (agent attachment) — top-left panel is authoritative for theme.

## Product Principles

1. One primary action per page: start a conversation or pay to start.
2. Show real capabilities (integrations, pricing) before brand poetry.
3. Prefer spacing and typography over card chrome.
4. Keep security controls intact when restyling.
5. Sound like a studio that ships sites, not a growth deck.

## Accessibility & Inclusion

WCAG AA contrast for text on charcoal; visible focus rings; keyboard-reachable header and forms; do not rely on color alone for status.
