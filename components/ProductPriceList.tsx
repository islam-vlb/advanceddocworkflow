import { FALLBACK_PRODUCTS } from "@/lib/supabase";

export default function ProductPriceList() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-surface">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-navy/10 bg-navy/5">
            <th className="py-3 px-4 font-semibold text-navy">Product</th>
            <th className="py-3 px-4 text-right font-semibold text-navy">Price</th>
          </tr>
        </thead>
        <tbody>
          {FALLBACK_PRODUCTS.map((p, i) => (
            <tr key={p.id} className={`border-b border-navy/5 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>
              <td className="py-3 px-4 text-text-secondary">{p.name}</td>
              <td className="py-3 px-4 text-right font-semibold text-navy">${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
