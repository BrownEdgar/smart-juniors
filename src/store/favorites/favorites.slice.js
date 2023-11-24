import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload }) => {
			const recipe = payload;
			if (state.some((elem) => elem.id === recipe.id)) return;
			state.push();
		},
	},
});

addToFavorites(1);
