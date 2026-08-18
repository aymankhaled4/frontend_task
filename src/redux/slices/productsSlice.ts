import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";
import { getProducts } from "@/services/products";

interface ProductsState {
    itemsByPage: Record<number, Product[]>;
    currentPage: number;
    total: number;
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    itemsByPage: {},
    currentPage: 1,
    total: 0,
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page: number) => {
    const data = await getProducts(page);
    return { page, ...data };
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        hydrateProducts: (
            state,
            action: PayloadAction<{ page: number; products: Product[]; total: number }>
        ) => {
            const { page, products, total } = action.payload;
            state.itemsByPage[page] = products;
            state.currentPage = page;
            state.total = total;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
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
                const { page, products, total } = action.payload;
                state.itemsByPage[page] = products;
                state.currentPage = page;
                state.total = total;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch products";
            });
    },
});

export const { hydrateProducts, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;