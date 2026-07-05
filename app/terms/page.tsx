import { BUSINESS } from "@/lib/config";
import ProductPriceList from "@/components/ProductPriceList";

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="mt-4 text-text-muted max-w-2xl">
            The terms and conditions for using our platform and services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy max-w-none">
            <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
              <p>
                These Terms &amp; Conditions govern your use of {BUSINESS.name} (the &quot;Site&quot;), operated by Ecom
                Fire INC. By placing an order, you agree to these terms in full.
              </p>
              <p>
                All purchases are subject to product availability. Prices are listed in U.S. dollars and are
                subject to change without notice. Charges will appear on your statement as {BUSINESS.descriptor}.
              </p>
              <div className="rounded-xl bg-red-50 border border-red-100 p-6">
                <p className="text-sm font-semibold text-red-700">Individuals under 18 are not permitted to purchase from this Site.</p>
              </div>
              <p>
                Payment is accepted via Visa and Mastercard only. Personal information will not be shared with
                Third Parties except as required to process your order.
              </p>
              <p>
                For questions regarding these Terms, contact us at {BUSINESS.email} or {BUSINESS.phone}, or by
                mail at Ecom Fire INC, {BUSINESS.address}.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Products &amp; Pricing</h2>
              <ProductPriceList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
