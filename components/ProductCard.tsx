"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/supabase";
import { useCart } from "@/lib/cart-context";
import WishlistButton from "@/components/WishlistButton";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes ? "" : null,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="doc-card group flex flex-col overflow-hidden rounded-2xl bg-white border border-navy/10 shadow-sm hover:shadow-lg transition-all duration-500">
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <WishlistButton id={product.id} className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <span className="inline-flex items-center w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent">
          {product.category}
        </span>
        <h3 className="font-heading text-base font-semibold leading-snug text-navy group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3">
          <p className="text-xl font-bold text-navy">${product.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={handleAdd}
            className="min-h-[44px] flex-shrink-0 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-all duration-300"
          >
            {added ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
