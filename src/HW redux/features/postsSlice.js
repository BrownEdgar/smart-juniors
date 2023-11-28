import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncPosts = createAsyncThunk(
    "posts/getPosts",
    () => {
    async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
        return data;
    }
    }
)
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data:[],
        status: 'idle',
        error:null
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncPosts.pending, (state) =>{
         state.status = 'pending'
        })
        .addCase(getAsyncPosts.fulfilled, (state, action) =>{
            return{
                data: action.payload,
                status: 'success',
                error: null
            }
        } )
        .addCase(getAsyncPosts.rejected, (state, action) =>{
            return{
                data: [],
                status: 'fail',
                error: action.error
            }
        })
    }
})


export default postsSlice.reducer
