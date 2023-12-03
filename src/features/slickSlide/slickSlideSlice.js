import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
		{
			id: 1,
			name: 'Modern lamp study',
			image: './public/slide/modernLampStudy.png',
			price: 258,
		},
		{
			id: 2,
			name: 'Chair',
			image: './public/slide/chair.png',
			price: 135,
		},
		{
			id: 3,
			name: 'Classic lamp',
			image: './public/slide/classicLamp.png',
			price: 425,
		},
		{
			id: 4,
			name: 'Clock cute',
			image: './public/slide/clockCute.png',
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
