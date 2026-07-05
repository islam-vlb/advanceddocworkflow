import Link from "next/link";

export default function CategoryTiles({ categories }: { categories: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c}
            href={`/shop?category=${encodeURIComponent(c)}`}
            className="group relative overflow-hidden rounded-2xl bg-navy p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 min-h-[140px] flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative font-heading text-sm sm:text-base font-semibold text-white">{c}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
