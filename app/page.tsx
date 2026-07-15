"use client";

import { useState } from "react";
import Link from "next/link";
import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const STEPS = [
  {
    step: "01",
    title: "Choose Your System",
    desc: "Browse single-page SOPs, full document kits, process maps, and complete business systems built for how operators actually work.",
  },
  {
    step: "02",
    title: "Checkout Securely",
    desc: "Complete a secure, one-time checkout with Visa or Mastercard. Digital delivery is complimentary and included with every order.",
  },
  {
    step: "03",
    title: "Create Your Account",
    desc: "Register (or log in) right after checkout to link your order to your Dashboard — takes less than a minute.",
  },
  {
    step: "04",
    title: "Download & Deploy",
    desc: "Access and download every document system you've purchased anytime from your Dashboard, and put it to work with your team the same day.",
  },
];

const FEATURES = [
  {
    title: "Editable Document Formats",
    desc: "Every template is delivered in standard, easy-to-edit formats so you can adapt it to your business in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h6" /></svg>
    ),
  },
  {
    title: "Consistent Numbering & Structure",
    desc: "Every SOP and process map follows the same structure, so teams can find what they need without guesswork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    ),
  },
  {
    title: "Built for Handoffs",
    desc: "Documents are written so a new hire, contractor, or partner can pick them up and execute without extra training.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    title: "Instant Digital Delivery",
    desc: "Every purchase arrives by email immediately after checkout, with clear access instructions included.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
  },
  {
    title: "Secure, One-Time Checkout",
    desc: "Pay once via Visa or Mastercard. There is nothing further to manage and no additional charges after your order.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: "30-Day Refund Window",
    desc: "If a system isn't the right fit, request a refund within 30 days of purchase — no returns process to manage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    ),
  },
];

const FAQS = [
  {
    q: "Is this a physical product?",
    a: "No. Every product in the advanceddocumentworkflow library is a digital document system — there is nothing physical to ship.",
  },
  {
    q: "How do I receive my purchase?",
    a: "Your document system is delivered instantly to the email address you provide at checkout, along with access instructions.",
  },
  {
    q: "Will I be billed again after my purchase?",
    a: "No. Each purchase is a one-time payment, and you will not be billed again for that product.",
  },
  {
    q: "What's the difference between an SOP and a process map?",
    a: "An SOP is a written, step-by-step procedure for completing a task. A process map is a visual flowchart showing how work and decisions move between people and steps.",
  },
  {
    q: "Can I customize the document templates for my own brand?",
    a: "Yes. All templates are delivered in editable formats so you can add your logo, adjust wording, and match how your team runs.",
  },
  {
    q: "Do the business kits include more than one document?",
    a: "Yes. Business Kits bundle multiple related SOPs, templates, and process maps into a single organized system covering a full business function.",
  },
  {
    q: "How do I access my downloads after purchase?",
    a: "Create a free account (or log in) after checkout and every document system you've purchased will be available to download anytime from your Dashboard.",
  },
];

export default function HomePage() {
  const featured = FALLBACK_PRODUCTS.slice(0, 8);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* How It Works */}
      <section className="bg-white py-20 border-t border-navy/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              From selecting a system to putting it in front of your team — four steps, beginning to end.
            </p>
          </div>
          <div className="space-y-12">
            {STEPS.map((s) => (
              <div key={s.step} className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-navy/10 pt-10 first:border-t-0 first:pt-0">
                <div className="font-heading text-5xl sm:text-6xl font-bold text-primary w-24 flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-surface py-20 border-t border-navy/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-3">Featured Systems</h2>
              <p className="text-lg text-text-secondary max-w-2xl">A cross-section of the document library, from single-page SOPs to complete operations suites.</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap">
              View all products &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-white py-20 border-t border-navy/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-4">Built for how documentation actually gets used</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every system in the library follows the same disciplined structure</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 border-t border-navy/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
            {FAQS.map((faq, i) => (
              <div key={faq.q}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading text-base font-semibold text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-6 animate-slide-up">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
