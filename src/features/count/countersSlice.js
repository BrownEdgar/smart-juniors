import {createSlice} from '@reduxjs/toolkit'

const countersSlice = createSlice({
    name: 'counters',
    initialState: [20, 55, 558],
    reducers: {
        addCount(state, action){
            state.push(action.payload)
        }

    }
});

export default countersSlice.reducer
export const {addCount} = countersSlice.actions