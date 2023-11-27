import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counters',
  initialState: [21, 34, 56, 12],
  reducers: {
    addCount(state, action) {
      state.push(action.payload)
    }
  }
})

export const { addCount } = counterSlice.actions
export default counterSlice.reducer