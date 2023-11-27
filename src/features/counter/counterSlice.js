import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		multiply: (state) => {
			state.count *= 2;
		},
		divide: (state) => {
			state.count /= 2;
		},
		random: (state) => {
			state.count = Math.ceil(Math.random() * 1000);
		},
		trunc: (state) => {
			state.count = Math.trunc(state.count);
		},
		floor: (state) => {
			state.count = Math.floor(state.count);
		},
		ceil: (state) => {
			state.count = Math.ceil(state.count);
		},
		round: (state) => {
			state.count = Math.round(state.count);
		},
		square: (state) => {
			state.count = Math.pow(state.count, 2);
		},
		cube: (state) => {
			state.count = Math.pow(state.count, 3);
		},
	},
});

export const { increment, decrement, reset, divide, multiply, random, trunc, floor, ceil, round, square, cube } =
	counterSlice.actions;
export default counterSlice.reducer;
