import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '92447',
    name: 'Wintheiser Group Group',
    contact: {
      address: '566 Leonardo Loop',
      phone: '025.415.9443 x5894',
      email: 'Esta36@gmail.com',
    },
    date: '2023-01-13T02:28:02.776Z'
  },
  {
    id: '42354',
    name: 'Larson Inc and Sons',
    contact: {
      address: '3089 Waelchi Keys',
      phone: '711.874.8437 x58199',
      email: 'Lloyd_Shanahan73@hotmail.com',
    },
    date: '2023-11-10T12:46:02.776Z'
  }
];

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.push(action.payload)
    },
    removeCompany: (state, action) => {
      return state.filter(company => company.id !== action.payload)
    },
    sortCompanies: (state) => {
      state.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    }
  }
})

export const { addCompany, removeCompany, sortCompanies } = companiesSlice.actions

export default companiesSlice.reducer