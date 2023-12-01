import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAsyncPosts = createAsyncThunk(
    'posts/getPosts',
    async ()=>{
         const response=await fetch(' http://localhost:3000/posts');
         const data=await response.json();
         return data;   
    }
)



const postSlice=createSlice({
    name:'posts',
    initialState:{
        data:[],
        status:'idle',
        error:null
    },
    reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getAsyncPosts.pending, (state)=>{
      state.status='pending'
    })
    .addCase(getAsyncPosts.fulfilled, (_,action)=>{
      return{
        data:action.payload,
        status:'succes',
        error:null
      }
    })
    .addCase(getAsyncPosts.rejected, (_,action)=>{
        return{
            data:[],
            status:'fail',
            error:action.error
          }
    })
}
})


export default postSlice.reducer






// extraReducers:{
//     [getAsyncPosts.pending]:(state)=>{
//         state.status='pending'
//     },
//     [getAsyncPosts.fulfilled]:(state,action)=>{
//         return{
//             data:action.payload,
//             status:'succes',
//             error:null
//         }
//     },
//     [getAsyncPosts.rejected]:(state,action)=>{
//         return{
//             data:[],
//             status:'fail',
//             error:action.error
//         }        
//     }
//    }