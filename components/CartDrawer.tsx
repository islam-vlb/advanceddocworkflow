"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={closeCart} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-right">
        <div className="flex items-center justify-between border-b border-navy/10 p-6">
          <h2 className="font-heading text-lg font-semibold text-navy">Your Cart ({totalItems})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-secondary hover:text-navy hover:bg-navy/5 transition-all"
            aria-label="Close cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="text-sm text-text-secondary mb-4">Your cart is empty</p>
              <Link href="/shop" onClick={closeCart} className="text-sm font-semibold text-primary hover:underline">
                Browse Products
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={`${i.id}-${i.size}`} className="flex gap-3 p-3 rounded-xl bg-surface border border-navy/5">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src={i.image} alt={i.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-navy truncate">{i.name}</p>
                    {i.size && <p className="text-xs text-text-muted">Size: {i.size}</p>}
                    <div className="mt-2 flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        value={i.qty}
                        onChange={(e) => updateQty(i.id, i.size, Number(e.target.value))}
                        className="w-14 rounded-lg border border-navy/10 bg-white px-2 py-1 text-sm text-navy"
                      />
                      <span className="text-sm font-bold text-primary">${(i.price * i.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(i.id, i.size)}
                    className="min-w-[44px] min-h-[44px] text-text-muted hover:text-red-600 flex items-center justify-center transition-colors"
                    aria-label="Remove item"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-navy/10 p-6 space-y-3 bg-white">
            <div className="flex items-center justify-between text-base font-bold text-navy">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-muted">Digital Delivery — Complimentary (Instant via Email)</p>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block min-h-[44px] rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white hover:bg-navy-light transition-all"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block min-h-[44px] rounded-full border-2 border-primary px-4 py-3 text-center text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
