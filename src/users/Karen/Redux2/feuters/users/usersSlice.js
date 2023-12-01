import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getAsyncPosts = createAsyncThunk(
    'users/getUsers',
    async()=> {
    const res = await axios.get('http://localhost:3000/users')
      const {data}=res.data
      return res.data
  }
    )
    
    // const initialStateVaue={
    //    data:[],
    //    status:'idle',
    //    error:null,
    // }



const usersSlice = createSlice({
    name:'users',
    initialState:{
        data:[],
        status:'idle',
        error:null
    },
    reducers:{
    //    addUser(state,action){
    //     state.push(action.payload)
    //    },
    //    deleteUser(state,{payload}){
    //    return state.toSpliced(payload,1)    
    //    }
    },
    extraReducers:(builder)=>{
        builder
       .addCase(getAsyncPosts.pending, (state)=>{
          state.status='pending'  
        })     
        .addCase(getAsyncPosts.fulfilled, (_,action)=>{
            return{
                data:action.payload,
                state:'succes',
                error:null,
            }
        })     
        .addCase(getAsyncPosts.rejected, (_,action)=>{
        return{
            data:[],
            status:'fail',
            error:action.error
        }
       }) 
             
    },
   
})

export const {addUser,deleteUser} = usersSlice.actions
export default usersSlice.reducer