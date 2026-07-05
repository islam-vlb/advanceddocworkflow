import { BUSINESS } from "@/lib/config";

export default function FulfillmentPage() {
  return (
    <div className="bg-white">
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Fulfillment Address</h1>
          <p className="mt-4 text-text-muted text-lg max-w-2xl">
            Our business correspondence and fulfillment address
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <p>
              All orders placed on {BUSINESS.name} are digital and fulfilled by instant email delivery. All
              correspondence, order inquiries, and refund requests should be directed to our business mailing
              address below.
            </p>
            <div className="rounded-2xl bg-surface border border-navy/10 p-6">
              <p className="text-base font-semibold text-navy">
                Logi Depot Inc<br />
                4711 34th St. N. Suite F, St. Petersburg, FL 33714
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-navy mb-1">Phone</p>
                <p className="text-sm text-text-secondary">{BUSINESS.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-navy mb-1">Email</p>
                <p className="text-sm text-text-secondary">{BUSINESS.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
