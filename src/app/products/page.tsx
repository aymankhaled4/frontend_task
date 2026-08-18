import type { Metadata } from "next";
import { getProducts } from "@/services/products";
import ProductsView from "./ProductsView";

export const metadata: Metadata = {
  title: "All Products | Mina Space",
  description: "Browse our full collection of custom t-shirts and apparel.",
};

export default async function ProductsPage() {
  const initialData = await getProducts(1);
  return <ProductsView initialData={initialData} />;
}
