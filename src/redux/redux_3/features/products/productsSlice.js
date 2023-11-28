import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const res = await axios("https://dummyjson.com/products")
    return res.data.products
  } catch (error) {
    return error
  }
})

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    filter: "all",
    sort: "all"
  },
  reducers: {
    updateProducts: (state, action) => {
      state.filter = action.payload
      state.sort = action.payload === "all" ? action.payload : state.sort
    },
    updateSortMethod: (state, action) => {
      state.sort = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "ok"
        state.data = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "fail"
        state.error = action.error
      })
  }
})

const getAllProducts = (state) => state.products.data
const getFilterProducts = (state) => state.products.filter
const getSortProducts = (state) => state.products.sort

export const getAllProductsByFilterSelector = createSelector(
  [getAllProducts, getFilterProducts, getSortProducts],
  (products, filter, sort) => {
    if (filter === "all" && sort === "all") return products

    let tmp = products;

    if(filter === "price") tmp = tmp.filter(product => product.price > 1000)
    if(sort === "up") tmp = tmp.toSorted((a, b) => a.price - b.price)
    if(sort === "down") tmp = tmp.toSorted((a, b) => b.price - a.price)
    return tmp
  }
)

export const { updateProducts, updateSortMethod } = productsSlice.actions
export default productsSlice.reducer