export default function QuantitySelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="min-h-[44px] rounded-xl border border-navy/10 bg-white px-3 py-2 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
      aria-label="Quantity"
    >
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <option key={n} value={n}>
          Qty: {n}
        </option>
      ))}
    </select>
  );
}
