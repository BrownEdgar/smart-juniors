import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    data: [
        {
          id: '92447',
          name: 'Wintheiser Group Group',
          added: new Date().toLocaleTimeString(),
          contact: {
            address: '566 Leonardo Loop',
            phone: '025.415.9443 x5894',
            email: 'Esta36@gmail.com',
          },
        },
        {
          id: '42354',
          name: 'Larson Inc and Sons',
          added: new Date().toLocaleTimeString(),
          contact: {
            address: '3089 Waelchi Keys',
            phone: '711.874.8437 x58199',
            email: 'Lloyd_Shanahan73@hotmail.com',
          },
        },
      ],
    actions: 0
}

const usersSlice =  createSlice({
    name: "users",
    initialState: initialValue,
    reducers: {
        addCompany(state,action){
          state.data.push(action.payload)
          state.actions = state.actions + 1
        }
    }
})

export const { addCompany, deleteCompany } = usersSlice.actions
export default usersSlice.reducer