import { COPY } from "@/lib/copy";
import { BUSINESS } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">About advanceddocumentworkflow</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Document workflows built for operators
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-text-secondary leading-relaxed">
            {COPY.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "16", label: "Document Systems" },
              { stat: "Instant", label: "Email Delivery" },
              { stat: "30-Day", label: "Refund Window" },
            ].map((item) => (
              <div key={item.label} className="doc-card rounded-2xl bg-surface border border-navy/10 p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="font-heading text-3xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-sm text-text-secondary">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-surface border border-navy/10 p-8">
            <h3 className="font-heading text-xl font-semibold text-navy mb-4">Business Information</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p><span className="font-semibold text-navy">Company:</span> Logi Depot Inc</p>
              <p><span className="font-semibold text-navy">Address:</span> {BUSINESS.address}</p>
              <p><span className="font-semibold text-navy">Phone:</span> {BUSINESS.phone}</p>
              <p><span className="font-semibold text-navy">Email:</span> {BUSINESS.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
