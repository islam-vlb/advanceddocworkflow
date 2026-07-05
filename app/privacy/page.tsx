import { BUSINESS } from "@/lib/config";
import ProductPriceList from "@/components/ProductPriceList";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4 text-text-muted max-w-2xl">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy max-w-none">
            <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
              <p>
                This Privacy Policy describes how {BUSINESS.name}, operated by Logi Depot Inc, collects and uses
                your information when you visit or make a purchase from this Site.
              </p>
              <p>
                We collect information you provide directly, such as your name, email, mailing address, and
                payment details, in order to process and fulfill your order.
              </p>
              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <p className="text-sm font-semibold text-navy">Personal information will not be shared with Third Parties.</p>
              </div>
              <p>
                Payment is processed securely via Visa and Mastercard. We do not store full card details on our
                servers.
              </p>
              <p>
                For privacy-related questions, contact us at {BUSINESS.email} or {BUSINESS.phone}, or by mail at
                Logi Depot Inc, {BUSINESS.address}.
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
