import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productDetailsReducer from "./slices/productDetailsSlice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;