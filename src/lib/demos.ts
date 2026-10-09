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
    image: string;
    title: string;
    price: number;
    wasPrice?: number;
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

const natureCleaningLandscaping: DemoData = {
  slug: "nature-cleaning-landscaping",
  businessName: "Nature Cleaning Landscaping & Tree Service",
  trade: "Lawn Care & Landscaping",
  city: "Kearns / Taylorsville",
  serviceArea: "Salt Lake City area",
  tagline: "Fast, friendly yard cleanup and tree service",
  about:
    "Miguel and his crew handle tree trimming, hedge work, yard cleanup, and stump removal across the Salt Lake City area. Customers mention quick response times, thorough cleanup, and fair pricing. Monday through Saturday service available.",
  services: [
    {
      title: "Tree Trimming & Service",
      description:
        "Professional tree trimming and full tree service for yards of all sizes.",
    },
    {
      title: "Hedge Trimming",
      description:
        "Hedge shaping and trimming to keep your property looking sharp.",
    },
    {
      title: "Yard Cleanup",
      description:
        "Complete yard cleanup including weed removal and debris hauling.",
    },
    {
      title: "Stump Removal",
      description: "Stump grinding and removal to clear your landscape.",
    },
  ],
  rating: 5.0,
  reviewCount: 27,
  reviews: [
    {
      reviewerName: "Lynn Dufrenne",
      stars: 5,
      quote: "Great service and the best price in town. Happy to use them again.",
    },
    {
      reviewerName: "Nita Mears",
      stars: 5,
      quote:
        "This company is excellent. They do excellent work, cleaned up real well. Very friendly people, I recommend them to everyone!",
    },
    {
      reviewerName: "Araceli Figueroa",
      stars: 5,
      quote:
        "I contacted Nature Cleaning on Saturday and the work was done by Monday. It was the quickest hassle free experience I have ever had.",
    },
    {
      reviewerName: "Alesa Wilde",
      stars: 5,
      quote:
        "Nature Cleaning did a fantastic job. I am so happy with the way my front yard looks.",
    },
    {
      reviewerName: "Wesley Dietlein",
      stars: 5,
      quote:
        "Miguel and his partner did a fantastic job with some hedge trimming at my house!",
    },
  ],
  photos: [
    {
      path: "/demo/nature-cleaning-landscaping/01.jpg",
      alt: "Crew laying new sod in a yard",
      source: "owner" as const,
    },
    {
      path: "/demo/nature-cleaning-landscaping/02.jpg",
      alt: "Flagstone path set in fresh mulch",
      source: "owner" as const,
    },
    {
      path: "/demo/nature-cleaning-landscaping/03.jpg",
      alt: "Crew aerating a lawn",
      source: "owner" as const,
    },
    {
      path: "/demo/nature-cleaning-landscaping/04.jpg",
      alt: "Before and after: gravel bed cleanup",
      source: "owner" as const,
    },
    {
      path: "/demo/nature-cleaning-landscaping/05.jpg",
      alt: "Finished front yard (collage)",
      source: "owner" as const,
    },
  ],
  hours: "Mon–Wed 9am–5pm, Thu 9am–5:30pm, Fri 9am–5pm, Sat 8am–2pm, Sun closed",
  accentColor: "#16a34a",
};

const affordableAssistance: DemoData = {
  slug: "affordable-assistance",
  businessName: "Affordable Assistance",
  trade: "Handyman",
  city: "West Valley City",
  serviceArea: "Salt Lake City area",
  tagline: "Reliable handyman service with a smile",
  about:
    "John and his assistant Zack handle drywall repair, wall texture, blinds, windows, doors, and bathroom remodels. Reviews highlight quick response, attention to detail, and fair pricing across the Salt Lake City area.",
  services: [
    {
      title: "Drywall Repair & Texture",
      description:
        "Wall floating, texture matching, and professional drywall repair.",
    },
    {
      title: "Blinds & Window Coverings",
      description: "Installation of blinds, shades, and window treatments.",
    },
    {
      title: "Doors & Windows",
      description: "Door installation, repair, and window work.",
    },
    {
      title: "Bathroom Remodels",
      description:
        "Complete bathroom renovations with careful attention to detail.",
    },
    {
      title: "Plumbing Fixes",
      description: "Tub drains, faucets, and minor plumbing repairs.",
    },
  ],
  rating: 4.8,
  reviewCount: 36,
  reviews: [
    {
      reviewerName: "Peggy Matlin",
      stars: 5,
      quote:
        "We couldn't be happier with the skills & service provided by John & his assistant Zack… Reliable & affordable service with a smile.",
    },
    {
      reviewerName: "Andrea Johnson",
      stars: 5,
      quote:
        "I am SO HAPPY with the bathroom remodel that John did for us. John is very attentive to detail, great troubleshooter, problem solver, priced very fair…",
    },
    {
      reviewerName: "Nicholas Gruzdowich",
      stars: 5,
      quote:
        "John was great! We had an extremely wavy wall in our bathroom and John came in and straightened/floated it for us.",
    },
    {
      reviewerName: "Marie Dippolito",
      stars: 5,
      quote:
        "I spoke to John before noon and he and Zack were in my home later in the afternoon. His quick response to tub drain issue was stellar.",
    },
    {
      reviewerName: "Roger McMullan",
      stars: 5,
      quote:
        "A lot of people search for 'the best handyman' or 'honest handyman.' John is both.",
    },
  ],
  photos: [
    {
      path: "/demo/affordable-assistance/01.jpg",
      alt: "Refinished concrete floor",
      source: "owner" as const,
    },
    {
      path: "/demo/affordable-assistance/02.jpg",
      alt: "Kitchen with butcher-block counters and red cabinets",
      source: "owner" as const,
    },
    {
      path: "/demo/affordable-assistance/03.jpg",
      alt: "Wall-mounted TV with floating shelf",
      source: "owner" as const,
    },
    {
      path: "/demo/affordable-assistance/04.jpg",
      alt: "Interior door with pet door installed",
      source: "owner" as const,
    },
    {
      path: "/demo/affordable-assistance/05.jpg",
      alt: "Window with roman shade installed",
      source: "owner" as const,
    },
    {
      path: "/demo/affordable-assistance/06.jpg",
      alt: "Stained baseboard trim",
      source: "owner" as const,
    },
  ],
  hours: "Mon–Sat 8am–5pm, Sun closed",
  accentColor: "#dc2626",
};

const handymanDirect: DemoData = {
  slug: "handyman-direct",
  businessName: "Handyman Direct",
  trade: "Handyman",
  city: "South Salt Lake",
  serviceArea: "Salt Lake City area",
  tagline: "Punctual, knowledgeable, and always cleans up",
  about:
    "David handles bathroom repairs, TV mounting, drywall, faucets, doors, plumbing fixes, furniture assembly, and cabinet work. Customers note his clear communication, fair pricing, and attention to cleanup.",
  services: [
    {
      title: "Bathroom Repairs",
      description: "Tub installations, faucets, and general bathroom fixes.",
    },
    {
      title: "TV & Picture Mounting",
      description: "Professional mounting for TVs, pictures, and heavy items.",
    },
    {
      title: "Sheetrock & Drywall",
      description: "Drywall repair, patching, and finishing.",
    },
    {
      title: "Furniture Assembly",
      description: "Assembly and installation of furniture and playsets.",
    },
    {
      title: "Cabinet & Door Work",
      description: "Cabinet leveling, hardware installation, and door repair.",
    },
  ],
  rating: 4.9,
  reviewCount: 60,
  reviews: [
    {
      reviewerName: "Miranda Rigby",
      stars: 5,
      quote:
        "If I could give more stars I would! So kind, punctual, knowledgeable. He wore foot coverings and even vacuumed after the job!",
    },
    {
      reviewerName: "Karlie Day Curran",
      stars: 5,
      quote:
        "David was super communicative and worked so quickly! He leveled several cabinets, filled in a scratch in my LVP, and installed knobs on all of my cabinets.",
    },
    {
      reviewerName: "Zachary Tucker",
      stars: 5,
      quote:
        "David was excellent! Communicated well, arrived on time, completed the project at a very fair price, and even offered to haul away the boxes.",
    },
    {
      reviewerName: "Mona Myers",
      stars: 5,
      quote:
        "I needed help putting together furniture and hanging a heavy glass picture and David delivered… I highly recommend reaching out to Handyman Direct!",
    },
    {
      reviewerName: "Acacia Jay",
      stars: 5,
      quote:
        "Super nice guys! Very fast and efficient… They also cleaned up behind themselves very well.",
    },
  ],
  photos: [
    {
      path: "/demo/handyman-direct/01.jpg",
      alt: "Corner jetted tub installation",
      source: "owner" as const,
    },
    {
      path: "/demo/handyman-direct/02.jpg",
      alt: "Kitchen with stone countertops",
      source: "owner" as const,
    },
    {
      path: "/demo/handyman-direct/03.jpg",
      alt: "Wall-mounted TV",
      source: "owner" as const,
    },
    {
      path: "/demo/handyman-direct/04.jpg",
      alt: "Backyard playset assembled",
      source: "owner" as const,
    },
    {
      path: "/demo/handyman-direct/05.jpg",
      alt: "Home sauna installed",
      source: "owner" as const,
    },
    {
      path: "/demo/handyman-direct/06.jpg",
      alt: "New interior door installed",
      source: "owner" as const,
    },
  ],
  hours: "Open daily 9am–5pm",
  accentColor: "#2563eb",
};

const southJordanHandyman: DemoData = {
  slug: "south-jordan-handyman",
  businessName: "South Jordan Handyman",
  trade: "Handyman",
  city: "South Jordan / West Jordan",
  serviceArea: "Salt Lake City area",
  tagline: "Fast response, quality work, fair prices",
  about:
    "Mike handles ceiling fans, light fixtures, electrical outlets, smoke detectors, security cameras, dryer vents, drywall repair, carpentry, and dog door installation. Customers mention same-day or 72-hour response times, punctuality, and clean work across the Salt Lake City area.",
  services: [
    {
      title: "Ceiling Fans & Lighting",
      description:
        "Ceiling fan installation, light fixture installation, and electrical work.",
    },
    {
      title: "Electrical Work",
      description:
        "Outlets, dimmers, smoke detectors, and security camera installation.",
    },
    {
      title: "Vent Service",
      description:
        "Exterior vent repair with bird guards and dryer vent cleaning.",
    },
    {
      title: "Carpentry & Repairs",
      description:
        "Drywall repair, cabinet pulls, dog door installation, and general carpentry.",
    },
  ],
  rating: 5.0,
  reviewCount: 144,
  reviews: [
    {
      reviewerName: "Michelle Willis",
      stars: 5,
      quote:
        "I had been looking for someone to help us repair some damaged exterior exhaust vents for months. When I found Mike, he was able to get to our project in less than 72 hours. He was courteous, professional, and did a fantastic job…",
    },
    {
      reviewerName: "Karen Schroyer",
      stars: 5,
      quote:
        "He was courteous, knowledgeable, fair, and clean. Would definitely recommend him for any (honey do) you may have around your home.",
    },
    {
      reviewerName: "Teota Daly",
      stars: 5,
      quote:
        "Mike has done several jobs for me from drywall repair, dog door install, carpentry for my office and installing security cameras. He responds quickly to requests, shows up when he says he will… prices are more than fair.",
    },
    {
      reviewerName: "Cherie",
      stars: 5,
      quote:
        "Mike fixed a vent on the outside of my house that a bird had destroyed and installed cages over both vents so it wouldn't happen again. Quick, quality and reasonably priced work!",
    },
    {
      reviewerName: "Dana Shepherd",
      stars: 5,
      quote:
        "I sent him a text early in the morning needing a time sensitive repair and he replied right back that he could come out the same day.",
    },
  ],
  photos: [
    {
      path: "/demo/south-jordan-handyman/01.jpg",
      alt: "Great room with vaulted ceiling and new ceiling fan",
      source: "owner" as const,
    },
    {
      path: "/demo/south-jordan-handyman/02.jpg",
      alt: "Kitchen with pendant lights over a granite island",
      source: "owner" as const,
    },
    {
      path: "/demo/south-jordan-handyman/03.jpg",
      alt: "Living room ceiling fan with a light ring over a green accent wall",
      source: "owner" as const,
    },
  ],
  hours: "Mon–Fri 9am–3pm, Sat–Sun closed",
  accentColor: "#7c3aed",
};

const saltLakePyramids: DemoData = {
  slug: "salt-lake-pyramids",
  businessName: "Salt Lake Pyramids",
  trade: "Handyman & Home Repair",
  city: "Holladay",
  serviceArea: "Salt Lake City area",
  tagline: "Professional home repair with attention to detail",
  about:
    "Moustafa (Mo) handles window installation, patio and entry door replacement, fence installation, and exterior repairs. Reviews highlight professional work, great value, and careful attention to finishing details.",
  services: [
    {
      title: "Window Installation",
      description: "Professional window replacement and installation services.",
    },
    {
      title: "Door Replacement",
      description: "Patio door and entry door replacement and installation.",
    },
    {
      title: "Fence Installation",
      description: "Custom fence installation for privacy and security.",
    },
    {
      title: "Exterior Repairs",
      description: "Exterior wall repairs and home exterior improvements.",
    },
  ],
  rating: 5.0,
  reviewCount: 24,
  reviews: [
    {
      reviewerName: "Blaise Vecchio",
      stars: 5,
      quote:
        "Mo did a great job putting in a window and 3 new patio doors for me. He made sure everything was to my liking. I even had a couple finishing details I didn't expect him to do and he completed them",
    },
    {
      reviewerName: "ahmed alameri",
      stars: 5,
      quote:
        "Great person very professional and really worth the value i will definitely recommend him to my family and friends",
    },
    {
      reviewerName: "mohammed Alwan",
      stars: 5,
      quote:
        "He is so nice guy and good work thank you my place looks beautiful",
    },
    {
      reviewerName: "mohamed Abuzarah",
      stars: 5,
      quote:
        "He was really good and cheap price and I liked his work and I will recommend him for my friends",
    },
    {
      reviewerName: "maycol mayta bastidas",
      stars: 5,
      quote:
        "He is great men he done all I need right and he is clean too thanks moustafa",
    },
  ],
  photos: [
    {
      path: "/demo/salt-lake-pyramids/01.jpg",
      alt: "New wooden privacy fence along a side yard",
      source: "owner" as const,
    },
    {
      path: "/demo/salt-lake-pyramids/02.jpg",
      alt: "Before and after: entry door replaced with new French doors",
      source: "owner" as const,
    },
    {
      path: "/demo/salt-lake-pyramids/03.jpg",
      alt: "Before and after: exterior wall cleanup with new windows",
      source: "owner" as const,
    },
  ],
  hours: "Open daily 8am–6pm",
  accentColor: "#ea580c",
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
    "Mirrors",
    "Exercise Equipment",
    "Auto & Industrial",
    "Deals under $50",
  ],
  products: [
    {
      image: "/demo/wasatch-deals/01.jpg",
      title: "Power glider recliner with USB charging",
      price: 230,
      wasPrice: 367,
    },
    {
      image: "/demo/wasatch-deals/02.jpg",
      title: 'KOHLER Verticyl 17" undermount vanity sink',
      price: 130,
    },
    {
      image: "/demo/wasatch-deals/03.jpg",
      title: "Glacier Bay two-handle kitchen faucet",
      price: 25,
    },
    {
      image: "/demo/wasatch-deals/04.jpg",
      title: "Cordless blackout roller shade",
      price: 40,
    },
    {
      image: "/demo/wasatch-deals/05.jpg",
      title: "Midea 8,000 BTU U-shaped window AC",
      price: 280,
    },
    {
      image: "/demo/wasatch-deals/06.jpg",
      title: "5-drawer nightstand with charging station & LED",
      price: 35,
    },
    {
      image: "/demo/wasatch-deals/07.jpg",
      title: 'Tribesigns 63" home office desk',
      price: 120,
    },
    {
      image: "/demo/wasatch-deals/08.jpg",
      title: 'ROVSUN 23" electric fireplace insert',
      price: 95,
    },
    {
      image: "/demo/wasatch-deals/09.jpg",
      title: "SentrySafe fireproof & waterproof home safe",
      price: 310,
    },
    {
      image: "/demo/wasatch-deals/10.jpg",
      title: '16" small bathroom vanity with sink (oak)',
      price: 65,
    },
    {
      image: "/demo/wasatch-deals/11.jpg",
      title: "SUNCREAT double hammock with stand",
      price: 120,
    },
    {
      image: "/demo/wasatch-deals/12.jpg",
      title: "10 ft artificial olive tree",
      price: 170,
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
  ],
  hours: "Contact for hours",
  accentColor: "#475569",
};

export const demos: Record<string, DemoData> = {
  "sample-roofing": sampleRoofing,
  "nature-cleaning-landscaping": natureCleaningLandscaping,
  "affordable-assistance": affordableAssistance,
  "handyman-direct": handymanDirect,
  "south-jordan-handyman": southJordanHandyman,
  "salt-lake-pyramids": saltLakePyramids,
  "wasatch-deals": wasatchDeals,
};

export function getDemo(slug: string): DemoData | undefined {
  return demos[slug];
}

export function getAllDemoSlugs(): string[] {
  return Object.keys(demos);
}
