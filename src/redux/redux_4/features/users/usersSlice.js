import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload)
    }
  }
})

export const getAllUsers = (state) => state.users.data

export const {addUser} = usersSlice.actions
export default usersSlice.reducer