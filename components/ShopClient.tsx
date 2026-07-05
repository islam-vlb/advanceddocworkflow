"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FALLBACK_PRODUCTS, FALLBACK_CATEGORIES } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const [category, setCategory] = useState(activeCategory || "");

  const filtered = category
    ? FALLBACK_PRODUCTS.filter((p) => p.category === category)
    : FALLBACK_PRODUCTS;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-3">
          {searchQuery ? `Results for "${searchQuery}"` : "The Document Library"}
        </h1>
        <p className="text-text-secondary">
          {searchQuery
            ? `Found ${filtered.length} product${filtered.length !== 1 ? "s" : ""} matching your search`
            : "Browse our complete collection of SOPs, process maps, templates, and business document kits"}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("")}
          className={`min-h-[44px] rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            category === ""
              ? "bg-navy text-white border-navy"
              : "border-navy/15 bg-white text-text-secondary hover:border-primary/40 hover:text-primary"
          }`}
        >
          All
        </button>
        {FALLBACK_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`min-h-[44px] rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              category === c
                ? "bg-navy text-white border-navy"
                : "border-navy/15 bg-white text-text-secondary hover:border-primary/40 hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-secondary mb-4">No products found in this category.</p>
          <button
            type="button"
            onClick={() => setCategory("")}
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all products
          </button>
        </div>
      )}
    </div>
  );
}
