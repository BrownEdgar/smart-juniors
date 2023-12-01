import { createSlice } from "@reduxjs/toolkit";


const initialBooksValue={
    data:[
        {id:1,title:'Cristin', author:'P.Cuelho',country:'Brasil',price:10000},
        {id:2,title:'Alchimic', author:'P.Cuelho',country:'Mexico',price:11000},
        {id:3,title:'The Mystery Guest', author:'Nita Prose ',country:'USA',price:12000},
        {id:4,title:'Nita Prose ', author:'Patricia Cornwell',country:'Argentina',price:1000},
        {id:5,title:'Iron Flame', author:'Rebecca Yarros',country:'England',price:8000},
        {id:6,title:' Rebecca Yarros', author:'Rebecca Yarros',country:'Canada',price:9000},
    ],
    filter:'all'
}


const booksSlice = createSlice({
    name:'books',
    initialState:initialBooksValue,
    reducers:{
        updateFilter(state,action){
            state.filter = action.payload 
        }
    }
})

export const getAllBooksByFilterSelector = (state) => {
    if (state.books.filter==='all') return state.books.data;
    return state.books.data.filter(book => book.country === state.books.filter)
}


export const getAllCountrySelector = (state) => {
    const countries = state.books.data.map(book => book.country)
    return [...new Set(countries)]
}

export const {updateFilter}=booksSlice.actions 
export default booksSlice.reducer