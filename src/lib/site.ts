export const site = {
  name: "Paritala Studio",
  tagline: "Custom websites for small businesses that want to look bigger.",
  owner: "Naga Bhargav Paritala",
  email: "naga.paritala@gmail.com",
  url: "https://paritala.studio",
} as const;

export const packages = [
  {
    id: "starter",
    name: "Starter Site",
    price: "$2,400",
    deposit: 500,
    description:
      "A polished 4–6 page marketing site with contact form, mobile-first layout, and launch support.",
    features: [
      "Custom design (not a theme)",
      "Responsive & accessible UI",
      "Contact form + SEO basics",
      "2 rounds of revisions",
      "Deployed to Vercel or your host",
    ],
    popular: false,
  },
  {
    id: "growth",
    name: "Growth Site",
    price: "$4,800",
    deposit: 1000,
    description:
      "Conversion-focused site with CMS-ready content, analytics, and a light integrations layer.",
    features: [
      "Everything in Starter",
      "Blog or services catalog",
      "Analytics & conversion events",
      "Third-party form / CRM hookup",
      "Performance pass (Core Web Vitals)",
    ],
    popular: true,
  },
  {
    id: "custom",
    name: "Custom Build",
    price: "From $8,000",
    deposit: 1500,
    description:
      "Complex product flows — inventory, booking, payments, or dealer-style experiences.",
    features: [
      "Everything in Growth",
      "Custom app features & APIs",
      "Integrations (inventory, Stripe, CRM)",
      "Admin / ops tooling as needed",
      "Ongoing support retainer available",
    ],
    popular: false,
  },
] as const;

export const services = [
  {
    title: "Custom website design",
    body: "Brand-forward UI that feels intentional — not a template with your logo slapped on.",
  },
  {
    title: "Next.js development",
    body: "Fast, SEO-friendly App Router builds with TypeScript, Tailwind, and clean component structure.",
  },
  {
    title: "Integrations & workflows",
    body: "Inventory sync, payments, forms, financing flows — wired so your team can actually use them.",
  },
  {
    title: "Launch & iterate",
    body: "Deploy, measure, and refine. Small businesses get a partner, not a one-and-done handoff.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Discovery call",
    body: "We clarify goals, audience, must-have pages, and any integrations (inventory, payments, CRM).",
  },
  {
    step: "02",
    title: "Design & build",
    body: "You get a clear scope, then a custom Next.js site — design and engineering together, not siloed.",
  },
  {
    step: "03",
    title: "Launch & support",
    body: "We ship to production, train you on updates, and stay available for iterations.",
  },
] as const;
