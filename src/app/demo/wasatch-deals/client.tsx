"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  handle?: string;
  image: string;
  title: string;
  price: number;
  wasPrice?: number;
};

type Props = {
  products: Product[];
  categories: string[];
  brandColors: { primary: string; secondary: string; dark: string };
};

export function WasatchDealsClient({ products, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSeoInfo, setShowSeoInfo] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => {
        const categoryMap: Record<string, string[]> = {
          "Home Living": ["01", "05", "06", "07", "08", "12"],
          "Home Improvement": ["02", "03", "10"],
          "Furniture": ["01", "06", "07"],
          "Bath": ["02", "10"],
          "Recreation": ["11"],
          "Specialty Items": ["09"],
        };
        const handles = categoryMap[selectedCategory] || [];
        const imgNum = product.image.match(/\/(\d+)\.jpg$/)?.[1];
        return imgNum && handles.includes(imgNum);
      });
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          (p.handle && p.handle.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  return (
    <>
      {/* SEO Showcase Strip */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-[#E0B82F]/10 to-[#FFB800]/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => setShowSeoInfo(!showSeoInfo)}
            className="flex w-full items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2"
          >
            <span className="text-sm font-semibold text-[#73560C]">
              What this site adds (SEO showcase)
            </span>
            <svg
              className={`h-5 w-5 text-[#73560C] transition-transform ${
                showSeoInfo ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showSeoInfo && (
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-[#E0B82F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keyword-optimized title &amp; meta description</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-[#E0B82F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Open Graph &amp; Twitter share previews with product images</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-[#E0B82F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Google Business / LocalBusiness structured data (name, service area, delivery info)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-[#E0B82F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Product structured data with price &amp; availability on every product page</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-[#E0B82F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FAQPage structured data for the FAQ section</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 focus:border-[#E0B82F] focus:outline-none focus:ring-2 focus:ring-[#E0B82F]"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2 ${
                selectedCategory === null
                  ? "bg-[#E0B82F] text-black"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-[#E0B82F] hover:text-[#E0B82F]"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2 ${
                  selectedCategory === category
                    ? "bg-[#E0B82F] text-black"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-[#E0B82F] hover:text-[#E0B82F]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Deals
          </h2>
          {filteredProducts.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600">No products found matching your search.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => {
                const discountPercent = product.wasPrice
                  ? Math.round(((product.wasPrice - product.price) / product.wasPrice) * 100)
                  : 0;

                return (
                  <Link
                    key={product.handle || product.image}
                    href={`/demo/wasatch-deals/p/${product.handle}`}
                    className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E0B82F] focus:ring-offset-2"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                      {product.wasPrice && discountPercent > 0 && (
                        <div className="absolute left-3 top-3 rounded-full bg-[#E0B82F] px-3 py-1 text-xs font-bold text-black shadow-md">
                          {discountPercent}% OFF
                        </div>
                      )}
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
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
