const checkEmail = (store) => (next) => (action) => {
	if (action.type === 'groups/addGroup') {
		const companies = store.getState().groups;

		const isExisted = companies.some((company) => action.payload.contact.email === company.contact.email);

		if (isExisted) {
			alert('Company already exists!');
			return;
		}
	}

	next(action);
};

export default checkEmail;
