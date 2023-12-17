import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
		{
			id: 1,
			name: 'Modern lamp study',
			image: './slide/modernLampStudy.png',
			price: 258,
		},
		{
			id: 2,
			name: 'Chair',
			image: './slide/chair.png',
			price: 135,
		},
		{
			id: 3,
			name: 'Classic lamp',
			image: './slide/classicLamp.png',
			price: 425,
		},
		{
			id: 4,
			name: 'Clock cute',
			image: './slide/clockCute.png',
			price: 331,
		},
		{
			id: 5,
			name: 'Modern lamp study',
			image: './slide/modernLampStudy.png',
			price: 258,
		},
		{
			id: 6,
			name: 'Chair',
			image: './slide/chair.png',
			price: 135,
		},
		{
			id: 7,
			name: 'Classic lamp',
			image: './slide/classicLamp.png',
			price: 425,
		},
		{
			id: 8,
			name: 'Clock cute',
			image: './slide/clockCute.png',
			price: 331,
		},
	],
};

const slickSlideSlice = createSlice({
	name: 'slickSlide',
	initialState,
	reducers: {},
});

export const getSlideProducts = (state) => state.slickSlide.products;

export default slickSlideSlice.reducer;
