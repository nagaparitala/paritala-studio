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

export const demos: Record<string, DemoData> = {
  "sample-roofing": sampleRoofing,
};

export function getDemo(slug: string): DemoData | undefined {
  return demos[slug];
}

export function getAllDemoSlugs(): string[] {
  return Object.keys(demos);
}
