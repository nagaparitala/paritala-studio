export const site = {
  name: "Refresh Studio",
  tagline:
    "Custom websites for small businesses that need inventory, payments, and leads — not another theme.",
  owner: "Naga Bhargav Paritala",
  email: "naga.paritala@gmail.com",
  url: "https://getrefreshstudios.com",
} as const;

export const packages = [
  {
    id: "design",
    name: "Site design / UI",
    price: "$250",
    priceNote: "one-time",
    amount: 250,
    description:
      "Custom site design and UI for your business — mobile-first, polished, ready to build or hand off.",
    features: [
      "Custom design (not a theme)",
      "Responsive & accessible UI",
      "Clear page layouts & visual system",
      "Revision round included",
      "Handoff-ready / Next.js-ready structure",
    ],
    popular: true,
  },
  {
    id: "maintenance",
    name: "Ongoing maintenance",
    price: "$150",
    priceNote: "/month",
    amount: 150,
    description:
      "Updates, fixes, and light improvements after launch so the site keeps working.",
    features: [
      "Hosting & uptime check-ins",
      "Content & copy tweaks",
      "Dependency & security updates",
      "Bug fixes and small features",
      "Priority email support",
    ],
    popular: false,
  },
] as const;

export const services = [
  {
    title: "Custom website design",
    body: "Layouts and UI built for your brand and conversion goals — not a template with a logo swap.",
  },
  {
    title: "Next.js development",
    body: "App Router, TypeScript, Tailwind. Fast pages, clean components, SEO-friendly structure.",
  },
  {
    title: "Integrations that stick",
    body: "Inventory sync, Stripe, forms, financing or trade-in flows — wired so your team can use them.",
  },
  {
    title: "Launch & maintenance",
    body: "Ship to production, walk you through updates, stay on for fixes and small improvements.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Discovery",
    body: "Goals, must-have pages, and integrations (inventory, payments, CRM) in one call.",
  },
  {
    step: "02",
    title: "Design & build",
    body: "Scoped custom Next.js site — design and engineering together, not siloed.",
  },
  {
    step: "03",
    title: "Launch & support",
    body: "Deploy, hand off what you need, and stay available for maintenance.",
  },
] as const;
