import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAsyncData } from "../actions/asyncActions";


export const getUsers = createAsyncThunk("users/getUsers", getAsyncData)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) =>  {
      state.status = "loading"
    })
    .addCase(getUsers.fulfilled, (state,action) =>  {
      state.data = action.payload.users
      state.status = "ok"
    })
    .addCase(getUsers.rejected, (state,action) =>  {
      state.status = "fail"
      state.error = action.error.message
    })
  }
})

export const getAllUsers = (state) => state.users.data

export default usersSlice.reducer