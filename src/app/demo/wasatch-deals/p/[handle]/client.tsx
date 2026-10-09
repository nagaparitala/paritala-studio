"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  handle?: string;
  image: string;
  images?: string[];
  title: string;
  titleFull?: string;
  price: number;
  wasPrice?: number;
  bullets?: string[];
};

type Props = {
  product: Product;
  brandColors: { primary: string; secondary: string; dark: string };
  discountPercent: number;
};

export function ProductPageClient({ product, discountPercent }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [cartCount, setCartCount] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wasatch-cart-count");
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("wasatch-cart-count", newCount.toString());
    
    const cartItems = JSON.parse(localStorage.getItem("wasatch-cart") || "[]");
    cartItems.push({
      handle: product.handle,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    localStorage.setItem("wasatch-cart", JSON.stringify(cartItems));
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  return (
    <>
      <div>
        {/* Main Image */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={images[selectedImage]}
            alt={product.title}
            width={800}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
          {product.wasPrice && discountPercent > 0 && (
            <div className="absolute left-4 top-4 rounded-full bg-[#E0B82F] px-4 py-2 text-lg font-bold text-black shadow-lg">
              {discountPercent}% OFF
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  selectedImage === idx
                    ? "border-[#E0B82F]"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.title} - view ${idx + 1}`}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart */}
        <div className="mt-8 space-y-4">
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full rounded-lg bg-[#E0B82F] px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:bg-[#FFB800] focus:outline-none focus:ring-2 focus:ring-[#73560C] focus:ring-offset-2"
          >
            Add to Cart
          </button>
          
          {cartCount > 0 && (
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full rounded-lg border-2 border-[#E0B82F] bg-white px-8 py-4 text-lg font-bold text-[#73560C] transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#73560C] focus:ring-offset-2"
            >
              Checkout ({cartCount} {cartCount === 1 ? "item" : "items"})
            </button>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowCheckoutModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E0B82F]/20">
                <svg
                  className="h-10 w-10 text-[#E0B82F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                This is a demo
              </h2>
              <p className="mt-4 text-base text-gray-700">
                Nothing is charged. This is a demonstration site showcasing what{" "}
                <span className="font-semibold">Wasatch Deals</span> could look like.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:naga@getrefreshstudios.com?subject=Claim Wasatch Deals Demo Site"
                  className="block w-full rounded-lg bg-[#E0B82F] px-6 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-[#FFB800] focus:outline-none focus:ring-2 focus:ring-[#73560C] focus:ring-offset-2"
                >
                  Claim this demo site
                </a>
                <button
                  type="button"
                  onClick={() => setShowCheckoutModal(false)}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
