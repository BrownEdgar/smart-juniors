import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{ id: 1, title: 'Mirana', author: 'C.R.Safon', price: 3200, country: 'Italy' },
		{ id: 2, title: 'Opati', author: 'C.R.Safon', price: 1000, country: 'France' },
		{ id: 3, title: 'Giqor', author: 'H.Tumanyan', price: 2500, country: 'Armenia' },
		{ id: 4, title: 'Lord of the rings', author: 'R.Tolkin', price: 5000, country: 'USA' },
		{ id: 5, title: "American God's", author: 'N.Geyman', price: 4000, country: 'USA' },
		{ id: 6, title: 'Triumfalnaya Arka', author: 'E.M.Reamark', price: 6000, country: 'Germany' },
	],
	filter: 'all',
};

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		updateFilter(state, action) {
			state.filter = action.payload;
		},
	},
});

// selectors
export const getAllBooksByFilterSelector = (state) => state.books.data;

const getFilterSelector = (state) => state.books.filter;

export const getALlCountrySelector = (state) => {
	const countries = state.books.data.map((book) => book.country);
	return [...new Set(countries)];
};

export const memobooksSelector = createSelector([getAllBooksByFilterSelector, getFilterSelector], (books, filter) => {
	if (filter === 'all') return books;
	return books.filter((book) => book.country === filter);
});

export default booksSlice.reducer;
export const { updateFilter } = booksSlice.actions;
