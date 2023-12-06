import { configureStore } from '@reduxjs/toolkit';
import { postsReducer, slickSlideReducer } from '../features';

const store = configureStore({
	reducer: {
		slickSlide: slickSlideReducer,
		posts: postsReducer,
	},
});

export default store;
