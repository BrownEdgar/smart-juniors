import { nanoid } from '@reduxjs/toolkit';

const checkId = (store) => (next) => (action) => {
	if (action.type === 'groups/addGroup') {
		const companies = store.getState().groups;

		const idIsExisted = companies.some((company) => company.id === action.payload.id);

		if (idIsExisted) {
			const newPayload = {
				...action.payload,
				id: nanoid(),
			};
			action.payload = newPayload;
		}
	}

	next(action);
};

export default checkId;
