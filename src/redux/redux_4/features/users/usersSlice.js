import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  uniqueID: 1
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload)
      state.uniqueID++;
    }
  }
})

export const getAllUsers = ({ users }) => users.data
export const getAllUsersId = ({ users: { data } }) => data.map(user => user.id)

export const getAllUsersIdSelector = createSelector(
  [getAllUsersId],
  (usersId) => usersId
)

export const { addUser } = usersSlice.actions
export default usersSlice.reducer