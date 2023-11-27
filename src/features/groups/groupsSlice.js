import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: '92447',
		name: 'Wintheiser Group Group',
		contact: {
			address: '566 Leonardo Loop',
			phone: '025.415.9443 x5894',
			email: 'Esta36@gmail.com',
		},
		opened: false,
	},
	{
		id: '42354',
		name: 'Larson Inc and Sons',
		contact: {
			address: '3089 Waelchi Keys',
			phone: '711.874.8437 x58199',
			email: 'Lloyd_Shanahan73@hotmail.com',
		},
		opened: false,
	},
];

const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		addGroup: (state, { payload }) => {
			state.push(payload);
		},
		toggleOpen: (state, { payload }) => {
			state.splice(payload, 1, { ...state[payload], opened: !state[payload].opened });
		},
	},
});

export default groupsSlice.reducer;
export const { addGroup, toggleOpen } = groupsSlice.actions;
