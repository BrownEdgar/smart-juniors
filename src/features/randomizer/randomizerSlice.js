import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	numbers: new Array(10).fill().map(() => Math.floor(Math.random() * 90 + 10)),
};

export const randomizerSlice = createSlice({
	name: 'randomizer',
	initialState,
	reducers: {
		update: (state) => {
			const numbers = state.numbers.map(() => Math.floor(Math.random() * 90 + 10));
			return { numbers };
		},
		shuffle: (state) => {
			state.numbers.sort(() => Math.random() - 0.5);
		},
		sorter: (state) => {
			state.numbers.sort((a, b) => a - b);
		},
	},
});

export const { update, shuffle, sorter } = randomizerSlice.actions;
export default randomizerSlice.reducer;
