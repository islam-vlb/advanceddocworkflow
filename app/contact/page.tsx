"use client";

import { BUSINESS } from "@/lib/config";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold text-white mb-4">Get in touch</h1>
            <p className="text-text-muted text-lg">
              Have questions about a document system? We&apos;re here to help. Reach out and our team will get back to you within 1-2 business days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            <div className="doc-card rounded-2xl border border-navy/10 bg-surface p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-navy mb-1">Phone</h3>
              <p className="text-sm text-text-secondary mb-1">{BUSINESS.phone}</p>
              <p className="text-xs text-text-muted">Mon-Fri, 9am-5pm EST</p>
            </div>

            <div className="doc-card rounded-2xl border border-navy/10 bg-surface p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-navy mb-1">Email</h3>
              <p className="text-sm text-text-secondary mb-1">{BUSINESS.email}</p>
              <p className="text-xs text-text-muted">We reply within 1-2 business days</p>
            </div>

            <div className="doc-card rounded-2xl border border-navy/10 bg-surface p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-navy mb-1">Business Hours</h3>
              <p className="text-sm text-text-secondary">Monday - Friday</p>
              <p className="text-xs text-text-muted">9:00 AM - 5:00 PM EST</p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send us a message</h2>
              <form className="space-y-4">
                <input required placeholder="Full Name" className="w-full min-h-[50px] rounded-xl border border-navy/10 bg-surface px-4 py-3 text-sm text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <input required type="email" placeholder="Email Address" className="w-full min-h-[50px] rounded-xl border border-navy/10 bg-surface px-4 py-3 text-sm text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <input required placeholder="Subject" className="w-full min-h-[50px] rounded-xl border border-navy/10 bg-surface px-4 py-3 text-sm text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <textarea required placeholder="Your message" rows={5} className="w-full rounded-xl border border-navy/10 bg-surface px-4 py-3 text-sm text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
                <button type="submit" className="min-h-[52px] w-full rounded-full bg-navy px-4 py-3.5 text-sm font-semibold text-white hover:bg-navy-light transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "How long does delivery take?", a: "All document systems are delivered instantly via email after purchase." },
                  { q: "What payment methods do you accept?", a: "We accept Visa and Mastercard securely through our checkout." },
                  { q: "Can I get a refund?", a: "Yes, we offer a 30-day refund window on all purchases." },
                ].map((faq) => (
                  <div key={faq.q} className="rounded-xl bg-surface border border-navy/10 p-5">
                    <p className="text-sm font-semibold text-navy mb-1">{faq.q}</p>
                    <p className="text-xs text-text-secondary">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/20 p-6">
                <h4 className="font-heading text-base font-semibold text-navy mb-2">Our Support Promise</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We&apos;re committed to providing exceptional support. Every message is read by a real person, and we respond within 1-2 business days.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-surface border border-navy/10 p-6">
                <h4 className="font-heading text-sm font-semibold text-navy mb-2">Business Correspondence</h4>
                <p className="text-xs text-text-secondary">
                  Logi Depot Inc<br />
                  {BUSINESS.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
