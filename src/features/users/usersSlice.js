import { createSlice } from '@reduxjs/toolkit';


const initialStateVelue = {
  data: [],
  status: '',
  actions: 0
}


const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateVelue,
  reducers: {
    addUser(state, action) {
      console.log(action.payload)
      state.data.push(action.payload)
    },
    deleteUser(state, { payload }) {
      const f = state.data.filter((elem, index) => index !== payload);
      state.data = f
    }
  }
})


export const { addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer