import { configureStore } from '@reduxjs/toolkit';
import mainMiddlewares from '../middlewares/main';
import {
	booksReducer,
	cartsReducer,
	counterReducer,
	groupsReducer,
	inputTypesReducer,
	postsReducer,
	randomizerReducer,
} from '../features';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		randomizer: randomizerReducer,
		groups: groupsReducer,
		inputTypes: inputTypesReducer,
		books: booksReducer,
		posts: postsReducer,
		carts: cartsReducer,
	},
	middleware: mainMiddlewares,
});

export default store;
