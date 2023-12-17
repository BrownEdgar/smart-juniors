import { configureStore } from '@reduxjs/toolkit';
import { postsReducer, slickSlideReducer, todosReducer } from '../features';

const store = configureStore({
	reducer: {
		slickSlide: slickSlideReducer,
		posts: postsReducer,
		todos: todosReducer,
	},
});

export default store;
