---
name: Refresh Studio
description: Dark charcoal + metallic silver marketing site for a small-business website studio
colors:
  background: "#121314"
  foreground: "#e6e8ea"
  muted: "#9aa0a6"
  surface: "#1a1c1e"
  surface-elevated: "#222528"
  border: "#3a3f44"
  accent: "#c8ccd0"
  accent-soft: "#dfe2e5"
  accent-deep: "#8b9198"
  success: "#6f9f7e"
  accent-hairline: "#c4a574"
  danger: "#d08072"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.03em"
    lineHeight: 1.05
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "10px"
  pill: "999px"
spacing:
  section-y: "5rem"
  content-max: "72rem"
  measure: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
---

## Overview

Refresh Studio’s marketing surface mirrors the top-left logo panel: deep charcoal ground, metallic silver type and accents, fine grain texture. It should feel industrial-luxe and authored — not beige paper, not purple SaaS gradients, not gold-plated “AI luxury.” Hierarchy comes from type scale, tracking, and space. Cards are the exception, not the default.

Audience: small-business owners scanning for proof (work), price, and a clear next step. One primary CTA per view.

## Colors

- **Ground:** `#121314` charcoal (tinted near-black — never pure `#000`).
- **Ink:** `#e6e8ea` cool silver-white for headings and body.
- **Muted:** `#9aa0a6` for secondary copy (tinted; not `#808080`).
- **Surfaces:** `#1a1c1e` / `#222528` only when a region truly needs lift.
- **Borders:** `#3a3f44` hairlines.
- **Accent:** silver `#c8ccd0` / `#dfe2e5` for links, labels, primary buttons.
- **Status:** tinted success/danger that stay readable on charcoal.

Do not place gray text on saturated color fields. Prefer silver on charcoal.

## Typography

Two families, limited roles:

| Role | Face | Weights | Notes |
|------|------|---------|-------|
| Display | Bricolage Grotesque | 500–700 | Headlines only; tight tracking |
| Body / UI | Source Sans 3 | 400, 500, 600, 700 | Body, nav, forms, labels |

Scale (approx): display clamp ~2.5–3.75rem; section ~1.75–2.25rem; body 1rem; label 0.75rem uppercase wide tracking. Body measure ~45–65ch. On dark, slightly more line-height and tracking than a light theme.

Avoid Inter, Arial, DM Sans, Fraunces, and ornamental serifs that fight the metallic wordmark.

## Layout

- Max width ~72rem; horizontal padding 1–1.5rem.
- Vertical rhythm: generous section padding; group related lines tightly, separate sections clearly.
- Prefer single-column flow with occasional 2-up for pricing or feature lists — not decorative grids of icon tiles.
- Sticky header: solid charcoal (slight opacity OK); avoid stacked glassmorphism.

## Elevation & Depth

Depth from border hairlines, grain overlay (~4% noise), and surface shifts — not drop shadows, neon glow, or blur orbs. No nested translucent cards.

## Shapes

Pill CTAs (`999px`). Form controls ~6–10px radius. Avoid oversized 24–32px “soft SaaS” cards everywhere; when a border is needed, keep radius modest.

## Components

- **Header:** `public/logo.png` wordmark; text nav; one silver pill CTA (“Start a project”).
- **Primary button:** silver fill, charcoal label.
- **Secondary button:** hairline border, silver/foreground text.
- **Form fields:** surface fill, border, clear focus ring in silver/foreground.
- **Pricing:** two options max; emphasize design package without nesting cards-in-cards.
- **Footer:** quiet; name, short tagline, nav, email.

## Do's and Don'ts

**Do**

- Lead with concrete outcomes (inventory sync, Stripe, lead flows, pricing).
- Use one primary CTA; demote the rest to text links.
- Match logo silver/charcoal; keep grain subtle.
- Preserve CSP, checkout allowlists, and contact rate limits.

**Don’t**

- Purple→blue gradients, centered glow orbs, bounce/elastic easing.
- Inter/Arial as the brand face; icon tiles above every heading.
- Cards nested in cards; wrapping every paragraph in a panel.
- Generic copy: empower, seamless, next-level, leverage, unlock.
- Beige/cream grounds or heavy champagne-gold fills from other logo panels.
