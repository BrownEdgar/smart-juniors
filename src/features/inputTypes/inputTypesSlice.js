import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		type: 'text',
		name: 'name',
		id: 'name',
		placeholder: 'Comany Name',
	},
	{
		type: 'address',
		name: 'address',
		id: 'address',
		placeholder: 'Address',
	},
	{
		type: 'tel',
		name: 'phone',
		id: 'phone',
		placeholder: 'Phone Number',
	},
	{
		type: 'email',
		name: 'email',
		id: 'email',
		placeholder: 'Email Address',
	},
];

const inputTypesSlice = createSlice({
	name: 'inputTypes',
	initialState,
	reducers: {},
});

export default inputTypesSlice.reducer;
