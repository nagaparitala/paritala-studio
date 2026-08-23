export const site = {
  name: "Refresh Studio",
  tagline: "An agency building custom websites for small businesses that want to look bigger.",
  owner: "Naga Bhargav Paritala",
  email: "naga.paritala@gmail.com",
  url: "https://paritala.studio",
} as const;

export const packages = [
  {
    id: "design",
    name: "Site design / UI",
    price: "$250",
    priceNote: "one-time",
    amount: 250,
    description:
      "Custom site design and UI for your business — polished, mobile-first, and ready to build or hand off.",
    features: [
      "Custom design (not a theme)",
      "Responsive & accessible UI",
      "Clear page layouts & visual system",
      "Revision round included",
      "Handoff-ready assets / Next.js-ready structure",
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
      "Stay covered after launch — updates, fixes, and light improvements so your site keeps working.",
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
