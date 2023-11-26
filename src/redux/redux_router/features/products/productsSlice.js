import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const res = await axios("products");
    return res.data
  } catch (error) {
    return error
  }
})

export const postProducts = createAsyncThunk("products/postProducts", async (product) => {
  try {
    const res = await axios.post("products", product);
    return res.data
  } catch (error) {
    return error
  }
})

const initialState = {
  data: [],
  status: "idle",
  error: null
}

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.status = "pending"
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "OK"
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload.error
      state.status = "fail"
    })
    .addCase(postProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "OK"
    })
  }
})

export default productsSlice.reducer