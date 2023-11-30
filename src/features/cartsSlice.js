import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCarts = createAsyncThunk(
    'carts/getcarts',
    async () =>{
        const response = await fetch("https://dummyjson.com/carts?limit=3");
        const data = await response.json()
        console.log
        console.log(data.carts)
        return data.carts
    }
)

const cartsSlice = createSlice({
    name: 'carts',
    initialState:{
        data:[],
        status:'idle',
        error: null,
        
    },
    reducers: {
        sortPrice: (state) => {
            state.data.map(elm =>elm.products.sort((a, b) => a.price- b.price))
        },
        filterPrice: (state)=> {
            state.data.filter(elm  => elm.products.price> 3000)
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getCarts.pending, (state, action)=>{
            state.status = 'pending'
        } )
        .addCase(getCarts.fulfilled, (state, action)=>{
           
            return{
                data: action.payload,
                status: 'Success',
                error: null
            }
        })
        .addCase(getCarts.rejected, (state, action)=>{
            return{
                data: action.payload,
                status: 'fail',
                error: error.message
            }
        })


    }


})

export default cartsSlice.reducer
export const {sortPrice, filterPrice} = cartsSlice.actions