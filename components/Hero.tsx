import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-16 pb-20 lg:pt-24 lg:pb-28" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent mb-6 uppercase">
              Document Systems for Operators
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.1] animate-slide-up">
              Document workflows built for{" "}
              <span className="text-primary">operators.</span>
            </h1>

            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              SOPs, process maps, and business document kits that turn how your business actually runs into something clear, repeatable, and easy to hand off.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-navy-light transition-all duration-300"
              >
                Browse the Library
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-4 text-base font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                Our Approach
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md border-t border-navy/10 pt-8">
              <div>
                <div className="font-heading text-2xl font-bold text-navy">16</div>
                <div className="text-xs text-text-muted mt-1">Document Systems</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-navy">Instant</div>
                <div className="text-xs text-text-muted mt-1">Email Delivery</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-navy">30-Day</div>
                <div className="text-xs text-text-muted mt-1">Refund Window</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center h-[420px]">
            <div className="absolute w-64 h-80 bg-white border border-navy/10 rounded-2xl shadow-md rotate-[-8deg] translate-x-[-70px] translate-y-4">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent rounded-t-2xl" />
              <div className="p-6 space-y-3">
                <div className="h-2.5 w-2/3 rounded-full bg-navy/10" />
                <div className="h-2 w-1/2 rounded-full bg-navy/10" />
                <div className="h-2 w-3/4 rounded-full bg-navy/10 mt-6" />
                <div className="h-2 w-2/3 rounded-full bg-navy/10" />
                <div className="h-2 w-1/2 rounded-full bg-navy/10" />
              </div>
            </div>
            <div className="absolute w-64 h-80 bg-white border border-navy/10 rounded-2xl shadow-lg rotate-[4deg] translate-x-[60px] translate-y-[-8px]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-2xl" />
              <div className="p-6 space-y-3">
                <div className="h-2.5 w-3/4 rounded-full bg-navy/10" />
                <div className="h-2 w-1/2 rounded-full bg-navy/10" />
                <div className="h-2 w-2/3 rounded-full bg-navy/10 mt-6" />
                <div className="h-2 w-1/3 rounded-full bg-navy/10" />
                <div className="h-2 w-3/5 rounded-full bg-navy/10" />
              </div>
            </div>
            <div className="relative w-64 h-80 bg-white border border-navy/10 rounded-2xl shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-2xl" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-2/5 rounded-full bg-navy/15" />
                  <span className="text-primary text-lg">&#9670;</span>
                </div>
                <div className="h-px w-full bg-navy/10" />
                <div className="space-y-2.5">
                  <div className="h-2 w-full rounded-full bg-navy/10" />
                  <div className="h-2 w-11/12 rounded-full bg-navy/10" />
                  <div className="h-2 w-4/5 rounded-full bg-navy/10" />
                </div>
                <div className="h-20 rounded-xl border border-navy/10 bg-surface" />
                <div className="flex gap-2">
                  <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-surface" />
                  <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-surface" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
