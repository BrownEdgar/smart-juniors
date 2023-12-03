import { createSlice } from "@reduxjs/toolkit";

const initialValue = 0

const countSlice =  createSlice({
    name: "count",
    initialState: initialValue,
    reducers: {
        plus(state,action){
            return state + 1
        }
    }
})

export const { plus } = countSlice.actions
export default countSlice.reducer