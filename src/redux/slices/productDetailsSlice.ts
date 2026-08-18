import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";
import { getProductById } from "@/services/products";

interface ProductDetailsState {
    product: Product | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProductDetailsState = {
    product: null,
    loading: false,
    error: null,
};

export const fetchProductById = createAsyncThunk(
    "productDetails/fetchProductById",
    async (id: number) => getProductById(id)
);

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        hydrateProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.product = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch product";
            });
    },
});

export const { hydrateProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;