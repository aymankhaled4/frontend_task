import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Product, ProductsResponse } from "@/types/product";

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    total: number;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
    currentPage: 1,
    total: 0,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ limit, skip }: { limit: number; skip: number }) => {
        const res = await axios.get<ProductsResponse>(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        return res.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export const { setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;