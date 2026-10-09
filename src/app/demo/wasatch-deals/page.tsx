import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDemo } from "@/lib/demos";
import { WasatchDealsClient } from "./client";

export const metadata: Metadata = {
  title: {
    absolute: "Liquidation & Overstock Deals in Salt Lake City | Wasatch Deals",
  },
  description:
    "Brand-name home goods, open-box and overstock items up to 70% below retail in Salt Lake City. Local pickup and delivery within 30 miles of SLC.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Liquidation & Overstock Deals in Salt Lake City | Wasatch Deals",
    description:
      "Brand-name home goods, open-box and overstock items up to 70% below retail. Local pickup and delivery within 30 miles of SLC.",
    images: [
      {
        url: "https://paritala.studio/demo/wasatch-deals/01.jpg",
        width: 800,
        height: 800,
        alt: "Power glider recliner with USB charging",
      },
    ],
    siteName: "Wasatch Deals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquidation & Overstock Deals in Salt Lake City | Wasatch Deals",
    description:
      "Brand-name home goods, open-box and overstock items up to 70% below retail in Salt Lake City.",
    images: ["https://paritala.studio/demo/wasatch-deals/01.jpg"],
  },
};

export default function WasatchDealsPage() {
  const demo = getDemo("wasatch-deals");

  if (!demo) {
    notFound();
  }

  const brandColors = demo.brandColors || {
    primary: "#E0B82F",
    secondary: "#FFB800",
    dark: "#73560C",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": "https://paritala.studio/demo/wasatch-deals/#store",
        name: demo.businessName,
        description: demo.about,
        areaServed: {
          "@type": "City",
          name: "Salt Lake City",
        },
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Delivery Service",
          value: "Delivery within 30 miles of Salt Lake City",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://paritala.studio/demo/wasatch-deals/#business",
        name: demo.businessName,
        description: demo.about,
        areaServed: {
          "@type": "City",
          name: "Salt Lake City",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: demo.faq?.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              {/* Logo as styled text */}
              <h1 className="text-5xl font-black uppercase tracking-wider text-black sm:text-6xl lg:text-7xl">
                <span className="text-[#E0B82F]">WASATCH</span>{" "}
                <span className="text-black">DEALS</span>
              </h1>
              <p className="mt-4 text-xl text-gray-700">
                {demo.trade} • {demo.city}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {demo.tagline}
              </p>

              <div className="mt-10 flex justify-center">
                <a
                  href={`mailto:naga@getrefreshstudios.com?subject=Demo Site for ${encodeURIComponent(
                    demo.businessName
                  )}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[#E0B82F] px-8 py-3.5 text-base font-semibold text-black shadow-lg transition hover:bg-[#FFB800] focus:outline-none focus:ring-2 focus:ring-[#73560C] focus:ring-offset-2"
                >
                  Is this your business? This site is yours if you want it
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Client-side interactive components */}
        <WasatchDealsClient
          products={demo.products || []}
          categories={demo.categories || []}
          brandColors={brandColors}
        />

        {/* Value Props */}
        {demo.valueProps && (
          <section className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {demo.valueProps.map((prop, idx) => (
                  <div key={idx} className="flex items-start gap-3">
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
                    <span className="text-sm text-gray-700">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About {demo.businessName}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
              {demo.about}
            </p>
            {demo.serviceArea && (
              <p className="mt-4 text-base text-gray-600">
                Serving {demo.serviceArea}
              </p>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        {demo.faq && (
          <section className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-12 space-y-8">
                {demo.faq.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="rounded-2xl bg-gradient-to-r from-[#E0B82F] to-[#FFB800] px-8 py-12 text-center shadow-xl sm:px-12 sm:py-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Like what you see?
              </h2>
              <p className="mt-4 text-lg text-black/90">Claim this demo site</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:naga@getrefreshstudios.com?subject=Demo Site for ${encodeURIComponent(
                    demo.businessName
                  )}`}
                  className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#73560C] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#E0B82F]"
                >
                  Claim this demo site
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-3.5 text-base font-semibold text-black underline underline-offset-4 transition hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#E0B82F]"
                >
                  Visit Refresh Studios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
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
