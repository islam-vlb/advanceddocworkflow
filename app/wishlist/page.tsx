"use client";

import Link from "next/link";
import { useWishlist } from "@/lib/wishlist-context";
import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const items = FALLBACK_PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-navy">Wishlist</h1>
      {items.length === 0 ? (
        <div className="mt-8">
          <p className="text-text-secondary">You haven&apos;t saved any items yet.</p>
          <Link href="/shop" className="mt-4 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-all">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
