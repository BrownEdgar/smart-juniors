import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchCarts = createAsyncThunk(
  'carts/fetchCarts',
  async () => {
    const response = await axios.get('https://dummyjson.com/carts');
    console.log(response);
    return response.data.carts;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCarts.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchCarts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.carts = action.payload;
    })
    .addCase(fetchCarts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message;
    })
  }
})

export default cartSlice.reducer;

