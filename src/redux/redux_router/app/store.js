import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import modalReducer from "../features/modal/modalSlice";
import adminReducer from "../features/admin/adminSlice";
import { defaultMiddleWare } from "../middlewares/main";

const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
    admin: adminReducer
  },
  middleware: defaultMiddleWare
})

export default store