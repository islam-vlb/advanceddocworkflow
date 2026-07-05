import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import { BUSINESS } from "@/lib/config";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return FALLBACK_PRODUCTS.map((p) => ({ id: String(p.id) }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = FALLBACK_PRODUCTS.find((p) => String(p.id) === id);
  if (!product) return { title: BUSINESS.name };
  const content = PRODUCT_CONTENT[product.id];
  return {
    title: `${product.name} — ${BUSINESS.name}`,
    description: content?.overview ?? `${product.name} at ${BUSINESS.name}.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = FALLBACK_PRODUCTS.find((p) => String(p.id) === id);
  if (!product) notFound();

  const related = FALLBACK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
