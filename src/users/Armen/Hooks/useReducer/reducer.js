import { FILL_ARRAY, SUM_OF_ARRAY } from './actionTypes';

export const initialValue = {
	data: [],
	sum: 0,
	lastAction: '',
};

export default function reducer(state = initialValue, { type, payload }) {
	switch (type) {
		case FILL_ARRAY:
			return fillArray(state, payload.quantity);
		case SUM_OF_ARRAY:
			return sumOfArray(state);
		default:
			return state;
	}
}

function fillArray(state, quantity) {
	const result = new Array(quantity).fill().map((_, index) => index + 1);
	return {
		...state,
		data: result,
		lastAction: SUM_OF_ARRAY,
	};
}

function sumOfArray(state) {
	const sum = state.data.reduce((acc, cv) => acc + cv, 0);
	return {
		...state,
		sum,
		lastAction: SUM_OF_ARRAY,
	};
}

// const arr = [
// 	{ id: 1, name: 'Sebastian', salary: 1_200_000 },
// 	{ id: 2, name: 'Sebastian', salary: 1_400_000 },
// 	{ id: 3, name: 'Sebastian', salary: 1_250_000 },
// 	{ id: 4, name: 'Sebastian', salary: 800_000 },
// 	{ id: 5, name: 'Sebastian', salary: 980_000 },
// ];

// const debt = 600_000;
