import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState:[],
    reducers: {
        adduser(state, action){
            state.push(action.payload)
        },
        
    }}
)

export default usersSlice.reducer
export const {adduser} = usersSlice.actions