import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    data:[],
    status:'',
    actions: 0
}

const usersSlice = createSlice({
    name:'users',
    initialState: initialStateValue,
    reducers:{
        addUser(state, action){
            state.data.push(action.payload)
            // return [...state, action.payload]
        },
        deleteUser(state, {payload}){
            // return {...state,
            //     data: state.data.toSpliced(payload, 1),
            //     actions: state.actions + 1
            // }
            state.data.splice(payload, 1)
        }
    }
})

export default usersSlice.reducer
export const { addUser, deleteUser } = usersSlice.actions