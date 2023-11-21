import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        addCount(state, action){
            return state + 1
        }

    }
});

export default countSlice.reducer
export const {addCount} = countSlice.actions