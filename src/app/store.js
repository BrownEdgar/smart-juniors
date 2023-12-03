import { configureStore } from '@reduxjs/toolkit';
import { slickSlideReducer } from '../features';

const store = configureStore({
	reducer: {
		slickSlide: slickSlideReducer,
	},
});

export default store;
