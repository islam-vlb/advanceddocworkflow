"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative bg-navy py-16 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay ahead of your operations
        </h2>
        <p className="text-text-muted mb-8 max-w-lg mx-auto">
          Get notified when new SOP systems, process maps, and document kits are added to the library.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-6 py-4 text-primary">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-semibold">You&apos;re on the list — welcome aboard.</span>
          </div>
        ) : (
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 min-h-[50px] rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
            <button
              type="submit"
              className="min-h-[50px] rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accent transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
