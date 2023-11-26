import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    status: false,
    type: ""
  },
  reducers: {
    toggleModal: (state, action) => {
      state.status = !state.status
      state.type = action.payload
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer