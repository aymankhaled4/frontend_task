import axios from "axios";
import type { ProductsResponse } from "@/types/product";

export async function getFeaturedProducts(): Promise<ProductsResponse> {
    const { data } = await axios.get<ProductsResponse>(process.env.API_BASE_URL!, {
        params: { limit: 8 },
    });

    return data;
}