import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  data: [],
  status: '',
  actions: 0
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialStateValue,
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload)
      // return [...state, action.payload]
    },
    deleteUser(state, {payload}) {
      // state.data.splice(payload, 1)
      const f = state.data.filter((elem, index) => index !== payload)
      state.data = f
    }
  }
})

export const { addUser, deleteUser} = userSlice.actions
export default userSlice.reducer