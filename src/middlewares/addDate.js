const addDate = () => (next) => (action) => {
	if (action.type === 'groups/addGroup') {
		const newPayload = {
			...action.payload,
			date: new Date().toISOString(),
		};
		action.payload = newPayload;
	}

	next(action);
};

export default addDate;
