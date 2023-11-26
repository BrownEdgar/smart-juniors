import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  try {
    const res = await axios("admin")
    return res.data
  } catch (error) {
    return error
  }
})

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    login: "",
    password: "",
    status: "idle"
  },
  reducers: {
    checkLogin: (state, {payload}) => {
      if(state.login === payload.login && state.password === payload.password) {
        state.status = "logged"
        localStorage.setItem("adminLogged", true)
      } else {
        localStorage.setItem("adminLogged", false)
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAdmin.pending, (state) => {
      state.status = "pending"
    })
    .addCase(getAdmin.fulfilled, (state, action) => {
      state.login = action.payload.login
      state.password = action.payload.password
      state.status = "OK"
    })
    .addCase(getAdmin.rejected, (state, action) => {
      state.error = action.payload.error
      state.status = "fail"
    })
  }
})
export const {checkLogin} = adminSlice.actions
export default adminSlice.reducer