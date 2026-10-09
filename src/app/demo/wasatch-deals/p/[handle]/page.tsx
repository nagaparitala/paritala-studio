import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDemo } from "@/lib/demos";
import { ProductPageClient } from "./client";

export const dynamicParams = false;

export async function generateStaticParams() {
  const demo = getDemo("wasatch-deals");
  if (!demo || !demo.products) return [];
  
  return demo.products.map((product) => ({
    handle: product.handle || "",
  })).filter(({ handle }) => handle);
}

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const demo = getDemo("wasatch-deals");
  
  if (!demo || !demo.products) {
    return {};
  }

  const product = demo.products.find((p) => p.handle === handle);
  
  if (!product) {
    return {};
  }

  const ogImage = product.image.startsWith("/") 
    ? `https://paritala.studio${product.image}`
    : product.image;

  return {
    title: `${product.titleFull || product.title} | Wasatch Deals`,
    description: product.bullets?.join(" • ") || `${product.title} - ${demo.tagline}`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `${product.titleFull || product.title} | Wasatch Deals`,
      description: product.bullets?.[0] || demo.tagline,
      images: [{ url: ogImage, width: 800, height: 800, alt: product.title }],
      siteName: "Wasatch Deals",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.titleFull || product.title} | Wasatch Deals`,
      description: product.bullets?.[0] || demo.tagline,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const demo = getDemo("wasatch-deals");

  if (!demo || !demo.products) {
    notFound();
  }

  const product = demo.products.find((p) => p.handle === handle);

  if (!product) {
    notFound();
  }

  const brandColors = demo.brandColors || {
    primary: "#E0B82F",
    secondary: "#FFB800",
    dark: "#73560C",
  };

  const discountPercent = product.wasPrice
    ? Math.round(((product.wasPrice - product.price) / product.wasPrice) * 100)
    : 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.titleFull || product.title,
        image: product.images || [product.image],
        description: product.bullets?.join(" ") || product.title,
        offers: {
          "@type": "Offer",
          price: product.price.toString(),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: demo.businessName,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://paritala.studio/demo/wasatch-deals",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.titleFull || product.title,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Demo Banner */}
        <div className="sticky top-0 z-50 bg-[#E0B82F] px-4 py-3 text-center text-sm font-medium text-black shadow-md">
          <div className="mx-auto max-w-7xl">
            Demo by{" "}
            <a
              href="https://www.getrefreshstudios.com"
              className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#E0B82F]"
            >
              Refresh Studios
            </a>
            . A preview built for {demo.businessName}, not their official site.
          </div>
        </div>

        {/* Header with Logo */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <Link
                href="/demo/wasatch-deals"
                className="text-2xl font-black uppercase tracking-wider text-black hover:text-[#73560C] focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2"
              >
                <span className="text-[#E0B82F]">WASATCH</span>{" "}
                <span className="text-black">DEALS</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/demo/wasatch-deals"
                  className="text-gray-600 hover:text-[#E0B82F] focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium line-clamp-1">
                {product.titleFull || product.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Product Details */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductPageClient
              product={product}
              brandColors={brandColors}
              discountPercent={discountPercent}
            />

            {/* Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {product.titleFull || product.title}
              </h1>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.wasPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">
                      ${product.wasPrice}
                    </span>
                    <span className="rounded-full bg-[#E0B82F] px-3 py-1 text-sm font-bold text-black">
                      {discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>

              {product.bullets && product.bullets.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                  <ul className="mt-4 space-y-2">
                    {product.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="h-6 w-6 flex-shrink-0 text-[#E0B82F]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#E0B82F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Open-box or overstock item</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#E0B82F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Pickup in Salt Lake City or delivery within 30 miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <p className="text-center text-sm text-gray-600">
              This is a demonstration site created by{" "}
              <a
                href="https://www.getrefreshstudios.com"
                className="text-[#E0B82F] hover:underline focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2"
              >
                Refresh Studios
              </a>
              . Not the official website of {demo.businessName}.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
