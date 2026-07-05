import { BUSINESS } from "@/lib/config";

export default function DigitalDeliveryPage() {
  return (
    <div className="bg-white">
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Digital Delivery</h1>
          <p className="mt-4 text-text-muted text-lg max-w-2xl">
            Instant email delivery for every purchase — nothing is ever mailed or delivered by hand
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <p>
              {BUSINESS.name} sells fully digital document products. Nothing is ever mailed or delivered in any
              physical form — every purchase is delivered instantly to your email address after your order is placed.
            </p>
            <p>
              After checkout, you&apos;ll receive an email with your document system and access instructions.
              Delivery is complimentary and included with every purchase.
            </p>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <p className="text-sm">
                If you don&apos;t see your delivery email within a few minutes, check your spam folder or contact us
                at {BUSINESS.email} or {BUSINESS.phone}.
              </p>
            </div>
            <p className="text-sm">Business correspondence: Ecom Fire INC, {BUSINESS.address}.</p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "Purchase", desc: "Complete your secure, one-time checkout" },
              { step: "02", title: "Instant Email", desc: "Receive your document system within minutes" },
              { step: "03", title: "Access", desc: "Open, customize, and put your system to work" },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-surface border border-navy/10 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="font-heading text-2xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="font-heading text-base font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
