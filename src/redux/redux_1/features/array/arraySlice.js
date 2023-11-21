import { createSlice } from "@reduxjs/toolkit";

const initialState = [2, 8, 31, 47, -8, 99, 75]

const arraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    pushValue: (state, action) => {
      state.length !== 10
        ? state.push(action.payload)
        : state
    },
    sortArray: (state) => state.sort((a, b) => a - b),
    popArray: (state) => {
      state.pop()
    },
    shiftArray: (state) => {
      state.shift()
    },
    unshiftArray: (state, action) => {
      state.unshift(action.payload)
    },
    reverseArray: (state) => {
      state.reverse()
    }
  }
})

export const {
  sortArray,
  pushValue,
  popArray,
  shiftArray,
  unshiftArray,
  reverseArray
} = arraySlice.actions

export default arraySlice.reducer