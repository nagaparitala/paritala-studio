import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getDemo, getAllDemoSlugs, formatReviewerName } from "@/lib/demos";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllDemoSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    return {};
  }

  return {
    title: `${demo.businessName} - ${demo.trade}`,
    description: demo.tagline,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    notFound();
  }

  const accentColorStyle = demo.accentColor
    ? { "--demo-accent": demo.accentColor }
    : {};

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "text-[var(--demo-accent,#d97706)]"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={accentColorStyle as React.CSSProperties}
    >
      {/* Demo Banner - Always visible, not dismissible */}
      <div className="sticky top-0 z-50 bg-[var(--demo-accent,#d97706)] px-4 py-3 text-center text-sm font-medium text-white shadow-md">
        <div className="mx-auto max-w-7xl">
          Demo by{" "}
          <a
            href="https://www.getrefreshstudios.com"
            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--demo-accent,#d97706)]"
          >
            Refresh Studios
          </a>
          . A preview built for {demo.businessName}, not their official site.
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className={demo.kind === "store" ? "" : "grid gap-12 lg:grid-cols-2 lg:gap-16"}>
            <div className={demo.kind === "store" ? "mx-auto max-w-4xl text-center" : "flex flex-col justify-center"}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {demo.businessName}
              </h1>
              <p className="mt-2 text-xl text-[var(--demo-accent,#d97706)]">
                {demo.trade} • {demo.city}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {demo.tagline}
              </p>

              {demo.rating && demo.reviewCount && (
                <div className={`mt-6 flex items-center gap-4 ${demo.kind === "store" ? "justify-center" : ""}`}>
                  <div className="flex items-center gap-2">
                    {renderStars(demo.rating)}
                    <span className="text-sm font-medium text-gray-900">
                      {demo.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    ({demo.reviewCount} reviews)
                  </span>
                </div>
              )}

              {demo.hours && demo.kind !== "store" && (
                <div className="mt-6 text-sm text-gray-700">
                  <span className="font-medium">Hours:</span> {demo.hours}
                </div>
              )}

              {demo.kind === "store" && (
                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Shop
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Account
                    </span>
                  </div>
                </div>
              )}

              <div className={`mt-10 ${demo.kind === "store" ? "flex justify-center" : ""}`}>
                <a
                  href={`mailto:naga@getrefreshstudios.com?subject=Demo Site for ${encodeURIComponent(demo.businessName)}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--demo-accent,#d97706)] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--demo-accent,#d97706)] focus:ring-offset-2"
                >
                  Is this your business? This site is yours if you want it
                </a>
              </div>
            </div>

            {demo.kind !== "store" && demo.photos.length > 0 && (
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={demo.photos[0].path}
                    alt={demo.photos[0].alt}
                    width={800}
                    height={600}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section (Store only) */}
      {demo.kind === "store" && demo.categories && (
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {demo.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[var(--demo-accent,#d97706)] hover:text-[var(--demo-accent,#d97706)]"
                  aria-disabled="true"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section (Store only) */}
      {demo.kind === "store" && demo.products && (
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Deals
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {demo.products.map((product, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.wasPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.wasPrice}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      aria-disabled="true"
                      className="mt-4 w-full rounded-lg bg-[var(--demo-accent,#d97706)] px-4 py-2.5 text-sm font-semibold text-white opacity-60"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value Props (Store only) */}
      {demo.kind === "store" && demo.valueProps && (
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {demo.valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-[var(--demo-accent,#d97706)]"
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

      {/* Services Section (Service businesses only) */}
      {demo.kind !== "store" && demo.services && (
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {demo.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section (Store only) */}
      {demo.kind === "store" && demo.faq && (
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

      {/* Reviews Section (Service businesses only) */}
      {demo.kind !== "store" && demo.reviews && (
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Customer Reviews
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {demo.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {formatReviewerName(review.reviewerName)}
                    </span>
                    {renderStars(review.stars)}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery (Service businesses only) */}
      {demo.kind !== "store" && demo.photos.length > 1 && (
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {demo.photos.slice(1).map((photo, idx) => (
                <div
                  key={idx}
                  className="w-full overflow-hidden rounded-xl shadow-md transition hover:shadow-lg sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <Image
                    src={photo.path}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-r from-[var(--demo-accent,#d97706)] to-[var(--demo-accent,#b45309)] px-8 py-12 text-center shadow-xl sm:px-12 sm:py-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Contact us today to discuss your project
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:naga@getrefreshstudios.com?subject=Demo Site for ${encodeURIComponent(demo.businessName)}`}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--demo-accent,#d97706)] shadow-lg transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--demo-accent,#d97706)]"
              >
                Claim this demo site
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-3.5 text-base font-semibold text-white underline underline-offset-4 transition hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--demo-accent,#d97706)]"
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
              className="text-[var(--demo-accent,#d97706)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--demo-accent,#d97706)] focus:ring-offset-2"
            >
              Refresh Studios
            </a>
            . Not the official website of {demo.businessName}.
          </p>
        </div>
      </footer>
    </div>
  );
}
