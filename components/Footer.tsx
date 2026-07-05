import Link from "next/link";
import { BUSINESS } from "@/lib/config";

function PaymentIconsFooter() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 50 32" className="h-8 w-auto rounded-lg opacity-90" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1A1F71" />
        <text x="25" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
      </svg>
      <svg viewBox="0 0 50 32" className="h-8 w-auto rounded-lg opacity-90" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1C1C1C" />
        <circle cx="19" cy="16" r="11" fill="#EB001B" />
        <circle cx="31" cy="16" r="11" fill="#F79E1B" />
        <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00" />
      </svg>
    </div>
  );
}

const FOOTER_LINKS = {
  products: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=Document Templates", label: "Document Templates" },
    { href: "/shop?category=SOP Systems", label: "SOP Systems" },
    { href: "/shop?category=Process Maps", label: "Process Maps" },
    { href: "/shop?category=Business Kits", label: "Business Kits" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/digital-delivery", label: "Digital Delivery" },
    { href: "/fulfillment", label: "Fulfillment" },
  ],
  resources: [
    { href: "/shop", label: "Browse Products" },
    { href: "/cart", label: "Cart" },
    { href: "/wishlist", label: "Wishlist" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-primary text-2xl leading-none">&#9670;</span>
              <span className="font-heading font-semibold text-xl text-white">advanceddocumentworkflow</span>
            </Link>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed mb-6">
              Document systems built for operators. SOPs, process maps, and business document kits delivered instantly, so your business runs the same way every time.
            </p>
            <div className="space-y-1.5 text-sm text-text-muted mb-6">
              <p>{BUSINESS.phone}</p>
              <p>{BUSINESS.email}</p>
              <p>Logi Depot Inc, {BUSINESS.address}</p>
            </div>
            <PaymentIconsFooter />
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-white mb-4">Products</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-white mb-4">Resources</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-white mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-sm text-text-muted">© 2026 Logi Depot Inc — {BUSINESS.name}. All rights reserved.</p>
            <p className="text-sm font-bold text-text-muted">Charges appear as {BUSINESS.descriptor} on your statement</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="text-sm font-semibold text-text-muted">Personal information will not be shared with Third Parties</p>
            <p className="text-sm font-bold text-red-600">&#9888;&#65039; Individuals under 18 are not permitted to purchase</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
