"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-6 border border-navy/10">
          <svg className="w-10 h-10 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl font-bold text-navy mb-3">Your cart is empty</h1>
        <p className="text-text-secondary mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white hover:bg-navy-light transition-all duration-300"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-navy mb-2">Shopping Cart</h1>
      <p className="text-text-secondary mb-8">{items.length} item{items.length !== 1 ? "s" : ""} in your cart</p>

      <div className="grid gap-8 lg:grid-cols-3">
        <ul className="space-y-4 lg:col-span-2">
          {items.map((i) => (
            <li key={`${i.id}-${i.size}`} className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                <Image src={i.image} alt={i.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-navy">{i.name}</p>
                {i.size && <p className="text-sm text-text-muted">Size: {i.size}</p>}
                <div className="mt-2 flex items-center gap-3">
                  <label className="text-sm text-text-secondary">Qty</label>
                  <input
                    type="number"
                    min={1}
                    value={i.qty}
                    onChange={(e) => updateQty(i.id, i.size, Number(e.target.value))}
                    className="w-16 rounded-lg border border-navy/10 bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className="font-bold text-navy">${(i.price * i.qty).toFixed(2)}</span>
                <button
                  type="button"
                  onClick={() => removeItem(i.id, i.size)}
                  className="min-h-[44px] text-sm text-text-muted hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="h-fit rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-navy mb-4">Order Summary</h2>
          <div className="flex justify-between text-base font-bold text-navy mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-text-secondary mb-6">
            <span>Digital Delivery</span>
            <span className="font-semibold text-navy">Complimentary (Instant via Email)</span>
          </div>
          <Link
            href="/checkout"
            className="mt-4 block min-h-[48px] rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white hover:bg-navy-light transition-all duration-300"
          >
            Proceed to Checkout
          </Link>
          <Link href="/shop" className="mt-3 block text-center text-sm text-primary hover:underline font-medium">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
