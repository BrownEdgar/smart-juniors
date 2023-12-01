import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.userId !== action.payload.userId || todo.todo !== action.payload.todo);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
