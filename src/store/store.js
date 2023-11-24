import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, groupsReducer, inputTypesReducer, randomizerReducer } from '../features';

const checkIdMiddleware = (store) => (next) => (action) => {
	if (action.type === 'groups/addGroup') {
		const data = store.getState().groups;
		console.log(action.payload);
		console.log(data);

		if (
			action.payload.name === data.name &&
			action.payload.contact.address === data.contact.address &&
			action.payload.contact.phone === data.contact.phone &&
			action.payload.contact.email === data.contact.email
		) {
			const newPayload = {
				...action.payload,
				date: new Date(),
			};

			action.payload = newPayload;
		}
	}

	next(action);
};

const store = configureStore({
	reducer: {
		counter: counterReducer,
		randomizer: randomizerReducer,
		groups: groupsReducer,
		inputTypes: inputTypesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkIdMiddleware),
});

export default store;
