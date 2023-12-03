import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAsync } from "./productsActions";


export const getProducts = createAsyncThunk("products/getProducts", getProductsAsync)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading"
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload.products;
      state.status = "ok"
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.error = action.error.message
      state.status = "fail"
    })
  }
})

export const getAllProducts = (state) => state.products.data

export default productsSlice.reducer