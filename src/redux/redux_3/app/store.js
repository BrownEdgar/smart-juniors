import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";
import productsReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
    products: productsReducer
  }
})

export default store