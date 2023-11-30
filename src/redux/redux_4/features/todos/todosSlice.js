import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  uniqueID: 1
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload)
      state.uniqueID++;
    }
  }
})

export const getAllTodos = ({ todos }) => todos.data

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer