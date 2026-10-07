export type DemoData = {
  slug: string;
  businessName: string;
  trade: string;
  city: string;
  serviceArea: string;
  tagline: string;
  about: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  rating: number;
  reviewCount: number;
  reviews: Array<{
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

export const demos: Record<string, DemoData> = {
  "sample-roofing": sampleRoofing,
  "nature-cleaning-landscaping": natureCleaningLandscaping,
  "affordable-assistance": affordableAssistance,
  "handyman-direct": handymanDirect,
};

export function getDemo(slug: string): DemoData | undefined {
  return demos[slug];
}

export function getAllDemoSlugs(): string[] {
  return Object.keys(demos);
}
