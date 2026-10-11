export type DemoData = {
  slug: string;
  businessName: string;
  trade: string;
  city: string;
  serviceArea: string;
  tagline: string;
  about: string;
  kind?: "service" | "store";
  services?: Array<{
    title: string;
    description: string;
  }>;
  categories?: Array<string>;
  products?: Array<{
    handle: string;
    image: string;
    images?: string[];
    title: string;
    titleFull?: string;
    price: number;
    wasPrice?: number;
    description?: string;
    bullets?: string[];
  }>;
  valueProps?: Array<string>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  rating?: number;
  reviewCount?: number;
  reviews?: Array<{
    reviewerName: string;
    stars: number;
    quote: string;
  }>;
  photos: Array<{
    path: string;
    alt: string;
    // Only owner-uploaded listing photos may be used (no customer review photos)
    source: "owner";
  }>;
  hours?: string;
  accentColor?: string;
  brandColors?: {
    primary: string;
    secondary: string;
    dark: string;
  };
};

/**
 * Format reviewer name to first name + last initial for privacy.
 * Examples:
 * - "John Smith" -> "John S."
 * - "michelle rodriguez" -> "Michelle R."
 * - "Wesley" -> "Wesley"
 * - "Mary Jane Watson" -> "Mary W." (uses first + last initial)
 */
export function formatReviewerName(fullName: string): string {
  const trimmed = fullName.trim();
  if (!trimmed) return "";

  const parts = trimmed.split(/\s+/);

  // Single word name: capitalize and return as-is
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  }

  // Multiple words: capitalize first name + last initial with period
  const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();

  return `${firstName} ${lastInitial}.`;
}

const sampleRoofing: DemoData = {
  slug: "sample-roofing",
  businessName: "Sample Roofing Co.",
  trade: "Roofing Contractor",
  city: "Sample City",
  serviceArea: "Sample City and surrounding areas",
  tagline: "Quality roofing services you can trust",
  about:
    "Sample Roofing Co. is a fictional demonstration business created to showcase the demo homepage template. This is not a real roofing company. All information, reviews, and photos are placeholder content for demonstration purposes only.",
  services: [
    {
      title: "Roof Replacement",
      description:
        "Complete roof replacement services with quality materials and expert installation.",
    },
    {
      title: "Roof Repairs",
      description:
        "Fast, reliable repairs for leaks, damaged shingles, and storm damage.",
    },
    {
      title: "Roof Inspections",
      description:
        "Thorough inspections to identify issues before they become major problems.",
    },
    {
      title: "Gutter Installation",
      description:
        "Professional gutter installation and maintenance to protect your home.",
    },
  ],
  rating: 4.8,
  reviewCount: 42,
  reviews: [
    {
      reviewerName: "Sample Customer A",
      stars: 5,
      quote:
        "This is a fictional review for demonstration purposes. Sample Roofing Co. is not a real business.",
    },
    {
      reviewerName: "Sample Customer B",
      stars: 5,
      quote:
        "Another placeholder review. All content on this page is for demonstration only.",
    },
    {
      reviewerName: "Sample Customer C",
      stars: 4,
      quote:
        "Sample review content. This business and all reviews are fictional examples.",
    },
  ],
  photos: [
    {
      path: "/demo/sample-roofing/hero.svg",
      alt: "Sample roofing project - demonstration image",
      source: "owner" as const,
    },
    {
      path: "/demo/sample-roofing/project-1.svg",
      alt: "Sample project photo 1 - placeholder",
      source: "owner" as const,
    },
    {
      path: "/demo/sample-roofing/project-2.svg",
      alt: "Sample project photo 2 - placeholder",
      source: "owner" as const,
    },
    {
      path: "/demo/sample-roofing/project-3.svg",
      alt: "Sample project photo 3 - placeholder",
      source: "owner" as const,
    },
  ],
  hours: "Monday-Friday: 8am-6pm, Saturday: 9am-4pm, Sunday: Closed",
  accentColor: "#d97706",
};

const wasatchDeals: DemoData = {
  slug: "wasatch-deals",
  businessName: "Wasatch Deals",
  trade: "Home Goods Reseller",
  city: "Salt Lake City",
  serviceArea: "Salt Lake City area",
  tagline:
    "Brand-name home goods, open-box and overstock, up to 70% below retail",
  about:
    "Locally owned Salt Lake City reseller of liquidation, overstock, open-box and customer-return goods from big retailers. Prices up to 70% below retail. Many items priced OBO (or best offer). Local pickup and delivery within 30 miles of SLC.",
  kind: "store" as const,
  categories: [
    "Home Living",
    "Home Improvement",
    "Furniture",
    "Bath",
    "Recreation",
    "Specialty Items",
  ],
  products: [
    {
      handle: "power-glider-recliner",
      image: "/demo/wasatch-deals/01.jpg",
      images: ["/demo/wasatch-deals/01.jpg", "/demo/wasatch-deals/01-2.jpg", "/demo/wasatch-deals/01-3.jpg", "/demo/wasatch-deals/01-4.jpg"],
      title: "Power glider recliner with USB charging",
      titleFull: "Harlow Upholstered Power Glider Recliner with USB Charging",
      price: 230,
      wasPrice: 367,
      bullets: [
        "Rocking & 275° swivel with smooth glide",
        "Greenguard Gold & FSC Certified",
        "Modern design in light grey",
        "USB charging port built-in",
        "Perfect for nursery or living room"
      ]
    },
    {
      handle: "kohler-vanity-sink",
      image: "/demo/wasatch-deals/02.jpg",
      images: ["/demo/wasatch-deals/02.jpg", "/demo/wasatch-deals/02-2.jpg", "/demo/wasatch-deals/02-3.jpg"],
      title: 'KOHLER Verticyl 17" undermount vanity sink',
      titleFull: 'KOHLER Verticyl 17" Undermount Bathroom Vanity Sink',
      price: 130,
      bullets: [
        "17\" undermount bathroom sink",
        "Overflow drain included",
        "White finish",
        "New in box, open box inspected",
        "Quality KOHLER construction"
      ]
    },
    {
      handle: "glacier-bay-faucet",
      image: "/demo/wasatch-deals/03.jpg",
      images: ["/demo/wasatch-deals/03.jpg", "/demo/wasatch-deals/03-2.jpg", "/demo/wasatch-deals/03-3.jpg", "/demo/wasatch-deals/03-4.jpg"],
      title: "Glacier Bay two-handle kitchen faucet",
      titleFull: "Glacier Bay Two-Handle Kitchen Faucet",
      price: 25,
      bullets: [
        "Chrome finish, sleek and easy to clean",
        "Metal handles are durable and easy to use",
        "Two-handle design",
        "Open box inspected"
      ]
    },
    {
      handle: "blackout-roller-shade",
      image: "/demo/wasatch-deals/04.jpg",
      images: ["/demo/wasatch-deals/04.jpg", "/demo/wasatch-deals/04-3.jpg", "/demo/wasatch-deals/04-4.jpg"],
      title: "Cordless blackout roller shade",
      titleFull: "Cordless Roller Shades 100% Blackout Blinds 75\"L x 62\"W",
      price: 40,
      bullets: [
        "100% blackout for complete room darkening",
        "Cordless pull-down design",
        "White finish",
        "Fixed 75 inches high, 62 inches width",
        "Easy to install for home and office"
      ]
    },
    {
      handle: "midea-window-ac",
      image: "/demo/wasatch-deals/05.jpg",
      images: ["/demo/wasatch-deals/05.jpg", "/demo/wasatch-deals/05-2.jpg", "/demo/wasatch-deals/05-3.jpg"],
      title: "Midea 8,000 BTU U-shaped window AC",
      titleFull: "Midea 8,000 BTU U-Shaped Window Air Conditioner",
      price: 280,
      bullets: [
        "Cools up to 350 sq ft",
        "Ultra quiet U-shaped design",
        "Inverter control for efficiency",
        "Open window flexibility",
        "Alexa & Google Assistant compatible",
        "37% energy savings vs standard models"
      ]
    },
    {
      handle: "nightstand-charging-station",
      image: "/demo/wasatch-deals/06.jpg",
      images: ["/demo/wasatch-deals/06.jpg", "/demo/wasatch-deals/06-2.jpg", "/demo/wasatch-deals/06-3.jpg"],
      title: "5-drawer nightstand with charging station & LED",
      titleFull: "Nightstand 5-Drawer Dresser with Charging Station & LED Lights",
      price: 35,
      bullets: [
        "5 fabric drawers for storage",
        "Built-in charging station",
        "LED lights included",
        "Open shelf with hooks",
        "White finish",
        "Perfect for bedroom, hallway, or entryway"
      ]
    },
    {
      handle: "tribesigns-office-desk",
      image: "/demo/wasatch-deals/07.jpg",
      images: ["/demo/wasatch-deals/07.jpg", "/demo/wasatch-deals/07-2.jpg", "/demo/wasatch-deals/07-4.jpg"],
      title: 'Tribesigns 63" home office desk',
      titleFull: 'Tribesigns 63" Large Desk for Home Office',
      price: 120,
      bullets: [
        "Spacious 63\" executive computer desk",
        "Ample leg room",
        "Double PC gaming or writing table",
        "Sturdy legs for stability",
        "Black finish",
        "Open box inspected"
      ]
    },
    {
      handle: "rovsun-electric-fireplace",
      image: "/demo/wasatch-deals/08.jpg",
      images: ["/demo/wasatch-deals/08.jpg", "/demo/wasatch-deals/08-3.jpg", "/demo/wasatch-deals/08-4.jpg"],
      title: 'ROVSUN 23" electric fireplace insert',
      titleFull: 'ROVSUN 23" Electric Fireplace Insert with APP & Remote',
      price: 95,
      bullets: [
        "1400W recessed stove heater",
        "APP & remote control",
        "8-hour timer",
        "6 flame colors",
        "5 brightness levels",
        "ETL certified for indoor use"
      ]
    },
    {
      handle: "sentrysafe-home-safe",
      image: "/demo/wasatch-deals/09.jpg",
      images: ["/demo/wasatch-deals/09.jpg", "/demo/wasatch-deals/09-2.jpg", "/demo/wasatch-deals/09-3.jpg", "/demo/wasatch-deals/09-4.jpg"],
      title: "SentrySafe fireproof & waterproof home safe",
      titleFull: "SentrySafe Fireproof and Waterproof Home Safe with Digital Keypad",
      price: 310,
      bullets: [
        "Fireproof and waterproof protection",
        "Digital keypad lock",
        "Interior lighting",
        "Floor safe design",
        "2.05 cubic feet capacity",
        "Gray steel construction",
        "Secures money and documents"
      ]
    },
    {
      handle: "small-bathroom-vanity",
      image: "/demo/wasatch-deals/10.jpg",
      images: ["/demo/wasatch-deals/10.jpg", "/demo/wasatch-deals/10-2.jpg", "/demo/wasatch-deals/10-3.jpg", "/demo/wasatch-deals/10-4.jpg"],
      title: '16" small bathroom vanity with sink (oak)',
      titleFull: '16" Small Bathroom Vanity with Sink - Snaefell Oak',
      price: 65,
      bullets: [
        "Small space fit, only 16 inches",
        "Snaefell Oak finish",
        "2 toilet paper holders & storage pocket",
        "Adjustable shelve",
        "Soft closing door & quiet hinges",
        "Floor-standing with extra storage"
      ]
    },
    {
      handle: "suncreat-double-hammock",
      image: "/demo/wasatch-deals/11.jpg",
      images: ["/demo/wasatch-deals/11.jpg", "/demo/wasatch-deals/11-3.jpg", "/demo/wasatch-deals/11-4.jpg"],
      title: "SUNCREAT double hammock with stand",
      titleFull: "SUNCREAT Double Portable Hammock with Stand",
      price: 120,
      bullets: [
        "2-person hammock",
        "Curved spreader bar for comfort",
        "Balance ropes included",
        "Dark gray color",
        "Portable design",
        "Open box inspected"
      ]
    },
    {
      handle: "artificial-olive-tree",
      image: "/demo/wasatch-deals/12.jpg",
      images: ["/demo/wasatch-deals/12.jpg", "/demo/wasatch-deals/12-2.jpg", "/demo/wasatch-deals/12-4.jpg"],
      title: "10 ft artificial olive tree",
      titleFull: "Artificial 10FT Olive Tree with White Planter",
      price: 170,
      bullets: [
        "10 feet tall faux olive tree",
        "Realistic with natural trunk",
        "Lifelike fruits",
        "White planter included",
        "Sturdy base",
        "Perfect for modern home, office, or living room"
      ]
    },
  ],
  valueProps: [
    "Up to 70% below retail",
    "Open-box, overstock & customer returns from big retailers",
    "Many items OBO, make an offer",
    "Local pickup or delivery within 30 miles of SLC",
  ],
  faq: [
    {
      question: "What does open-box and overstock mean?",
      answer:
        "Open-box items are customer returns or products with opened packaging. Overstock items are brand new but retailers had too many. Both come from big retailers at deep discounts.",
    },
    {
      question: "Where do your items come from?",
      answer:
        "We source liquidation, overstock, open-box, and customer-return goods from major retailers.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes! We offer local pickup in Salt Lake City and delivery within 30 miles of SLC. Contact us to arrange pickup or delivery.",
    },
    {
      question: "What does OBO mean?",
      answer:
        'OBO stands for "or best offer." Many of our items are priced OBO, which means we\'re open to reasonable offers. Contact us to discuss pricing.',
    },
  ],
  photos: [
    {
      path: "/demo/wasatch-deals/01.jpg",
      alt: "Power glider recliner",
      source: "owner" as const,
    },
    {
      path: "/demo/wasatch-deals/05.jpg",
      alt: "Midea window air conditioner",
      source: "owner" as const,
    },
    {
      path: "/demo/wasatch-deals/09.jpg",
      alt: "SentrySafe fireproof home safe",
      source: "owner" as const,
    },
  ],
  hours: "Contact for hours",
  accentColor: "#E0B82F",
  brandColors: {
    primary: "#E0B82F",
    secondary: "#FFB800",
    dark: "#73560C"
  }
};

export const demos: Record<string, DemoData> = {
  "sample-roofing": sampleRoofing,
  "wasatch-deals": wasatchDeals,
};

export function getDemo(slug: string): DemoData | undefined {
  return demos[slug];
}

export function getAllDemoSlugs(): string[] {
  return Object.keys(demos);
}
