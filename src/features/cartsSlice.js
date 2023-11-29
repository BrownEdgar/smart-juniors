import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCarts = createAsyncThunk(
    'carts/getcarts',
    async () =>{
        const response = await fetch("https://dummyjson.com/carts");
        const data = await response.json();
        console.log(data)
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