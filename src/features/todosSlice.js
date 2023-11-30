
import {createSlice} from '@reduxjs/toolkit'
const initialTodo =[]
const todosSlice = createSlice({
    name: 'todos',
    initialState:initialTodo,
    reducers: {
        addtodo: (state, action) => {
           state.push(action.payload)
        },
        
    }}
)

export default todosSlice.reducer
export const {addtodo} = todosSlice.actions