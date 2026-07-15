"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useAuth } from "@/lib/auth-context";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { totalItems, openCart } = useCart();
  const { ids } = useWishlist();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-xl border-b border-navy/10 shadow-sm"
            : "bg-[#FAFAF8]/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-primary text-2xl leading-none">&#9670;</span>
              <span className="font-heading font-semibold text-xl text-navy tracking-tight">advanceddocumentworkflow</span>
            </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative py-2"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex min-w-[44px] min-h-[44px] items-center justify-center rounded-full text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Search"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <Link
              href="/wishlist"
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Wishlist"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 5.8 4c2-.3 3.8.6 5.2 2.3C12.4 4.6 14.2 3.7 16.2 4c3.5.5 5.3 4.1 3.8 7.7C19.5 16.4 12 21 12 21z" />
              </svg>
              {ids.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {ids.length}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Open cart"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>

            {user ? (
              <div className="hidden sm:flex items-center gap-1 ml-1">
                <Link
                  href="/dashboard"
                  className="min-h-[44px] inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => logout()}
                  className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-full bg-navy px-5 py-2.5 ml-2 text-sm font-semibold text-white hover:bg-navy-light transition-all duration-300"
              >
                Login
              </Link>
            )}

            <Link
              href="/shop"
              className="hidden lg:inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-navy/15 px-5 py-2.5 ml-2 text-sm font-semibold text-navy hover:bg-navy/5 transition-all duration-300"
            >
              Browse Library
            </Link>

            <button
              type="button"
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-secondary hover:text-navy hover:bg-navy/5 transition-all"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm px-4 pt-24 animate-fade-in">
          <div className="mx-auto w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-navy/10 p-6 animate-scale-in">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search SOPs, templates, process maps..."
                className="w-full min-h-[56px] pl-14 pr-4 rounded-xl bg-surface border border-navy/10 text-navy placeholder-text-muted text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-text-muted">Press ESC to close</p>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-sm text-text-secondary hover:text-navy font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl border-l border-navy/10 p-6 animate-slide-right">
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading text-lg font-semibold text-navy">Menu</span>
              <button
                type="button"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-text-secondary hover:text-navy"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setOpen(false);
              }}
              className="w-full mb-4 min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-surface border border-navy/10 text-sm text-text-secondary hover:text-navy transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search
            </button>
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/wishlist" onClick={() => setOpen(false)} className="py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium">
                Wishlist
              </Link>
              {user && (
                <Link href="/dashboard" onClick={() => setOpen(false)} className="py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium">
                  Dashboard
                </Link>
              )}
              <div className="mt-4 pt-4 border-t border-navy/10 space-y-3">
                {user ? (
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="flex items-center justify-center w-full min-h-[44px] rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center min-h-[44px] rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white"
                  >
                    Login
                  </Link>
                )}
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center min-h-[44px] rounded-full border-2 border-navy/15 px-4 py-3 text-sm font-semibold text-navy"
                >
                  Browse Library
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
