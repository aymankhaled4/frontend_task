import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getAllProductIds } from "@/services/products";
import ProductDetailsView from "./ProductDetailsView";

export async function generateStaticParams() {
  const ids = await getAllProductIds();
  return ids.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const product = await getProductById(Number(id));
    return {
      title: `${product.title} | Mina Space`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.thumbnail],
      },
    };
  } catch {
    return { title: "Product not found | Mina Space" };
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;
  try {
    product = await getProductById(Number(id));
  } catch {
    notFound();
  }

  return <ProductDetailsView initialProduct={product} />;
}
