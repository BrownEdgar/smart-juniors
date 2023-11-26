import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
      plus(state,action){
        return state + 1
      } 
    }
})

export const { plus } = countSlice.actions

export default countSlice.reducer