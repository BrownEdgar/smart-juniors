import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/carts/cartSlice";


export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})