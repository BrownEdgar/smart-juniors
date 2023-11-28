import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk("carts/getCarts", async () => {
  try {
    const res = await axios("https://dummyjson.com/carts");
    return res.data.carts
  } catch (error) {
    return error
  }
})

const initialState = {
  data: [],
  status: "idle",
  error: null,
  sort: "initial",
  filter: "all"
}

const cartsSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    updateSort: (state, action) => {
      state.sort = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarts.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = "ok"
      })
      .addCase(getCarts.rejected, (state, action) => {
        state.status = "fail"
        state.error = action.error
      })
  }
})

const getSortSelector = (state) => state.carts.sort
const getAllCarts = (state) => state.carts.data

export const getSortedCartsSelector = createSelector(
  [getAllCarts, getSortSelector],
  (carts, sorted) => {
    if (sorted === "initial") return carts
    return ([...carts]
      .map(cart => ({
        ...cart,
        products: cart.products.toSorted((a, b) => a.price - b.price)
      })
      ))
  }
)

export const { updateSort } = cartsSlice.actions
export default cartsSlice.reducer