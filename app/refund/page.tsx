import { BUSINESS } from "@/lib/config";

export default function RefundPage() {
  return (
    <div className="bg-white">
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Return &amp; Refund Policy</h1>
          <p className="mt-4 text-text-muted max-w-2xl">
            Our refund policy for digital document products
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <p>
                All products sold on this Site are digital documents delivered by email. There are no physical
                items and nothing to return. Refunds may be requested within 30 days from the date of purchase.
              </p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <p>
                To request a refund, contact us at {BUSINESS.email} or {BUSINESS.phone} with your order number.
                Approved refunds are issued to your original payment method.
              </p>
            </div>
            <div className="rounded-xl bg-surface border border-navy/10 p-6">
              <p className="text-sm text-text-secondary">
                Refund correspondence should be sent to Ecom Fire INC, {BUSINESS.address}.
              </p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <p className="text-sm font-semibold text-navy">Personal information will not be shared with Third Parties</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
