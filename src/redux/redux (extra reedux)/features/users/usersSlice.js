import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    data: [],
    status: '',
    actions: 0
}

const usersSlice =  createSlice({
    name: "users",
    initialState: initialValue,
    reducers: {
        addUser(state,action){
          state.data.push(action.payload)
          state.actions = state.actions + 1
        },
        deleteUser(state,action){
          const data = state.data.toSpliced(action.payload,1)
          return {
            ...state,
            data: data,
            actions: state.actions + 1
          }
        }
    }
})

export const { addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer