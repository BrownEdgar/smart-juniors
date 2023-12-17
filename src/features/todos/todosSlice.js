import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('todoList'));
// const initialState = [{id: 1, title=}];

console.log(initialState);

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add: (state, action) => {
			state.push(action.payload);
		},
		check: (state, action) => {
			const checkedTodoIndex = state.find((todo) => todo.id === action.payload);
			state.splice(checkedTodoIndex, 1, state[checkedTodoIndex]);
		},
	},
});

export const { add, check } = todosSlice.actions;
export default todosSlice.reducer;
