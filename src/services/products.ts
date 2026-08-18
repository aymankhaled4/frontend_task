import { cache } from "react";
import axios from "axios";
import type { Product, ProductsResponse } from "@/types/product";

const LIMIT = 10;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function getFeaturedProducts(): Promise<ProductsResponse> {
    const { data } = await axios.get<ProductsResponse>(BASE_URL, {
        params: { limit: 8 },
    });
    return data;
}

export async function getProducts(page: number): Promise<ProductsResponse> {
    const skip = (page - 1) * LIMIT;
    const { data } = await axios.get<ProductsResponse>(BASE_URL, {
        params: { limit: LIMIT, skip },
    });
    return data;
}

export const getProductById = cache(async (id: number): Promise<Product> => {
    const { data } = await axios.get<Product>(`${BASE_URL}/${id}`);
    return data;
});

export async function getAllProductIds(): Promise<number[]> {
    const { data } = await axios.get<ProductsResponse>(BASE_URL, {
        params: { limit: 0, select: "id" },
    });
    return data.products.map((p) => p.id);
}