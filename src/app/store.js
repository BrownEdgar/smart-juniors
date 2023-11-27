import { configureStore } from '@reduxjs/toolkit';
import mainMiddlewares from '../middlewares/main';
import { counterReducer, groupsReducer, inputTypesReducer, randomizerReducer } from '../features';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		randomizer: randomizerReducer,
		groups: groupsReducer,
		inputTypes: inputTypesReducer,
	},
	middleware: mainMiddlewares,
});

export default store;
