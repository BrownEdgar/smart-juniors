import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncCarts = createAsyncThunk('carts/getCarts', async () => {
	const response = await axios('https://dummyjson.com/carts');
	const data = await response.data.carts;
	return data;
});

const initialState = {
	data: [],
	status: 'idle',
	error: null,
};

const cartsSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		sortByPrice: (state) => {
			state.data.sort((a, b) => a.total - b.total);
		},
		greaterThreeThousand: (state) => {
			return {
				data: state.data.filter((cart) => cart.total > 3000),
				status: state.status,
				error: state.error,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncCarts.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getAsyncCarts.fulfilled, (_, { payload }) => {
				return {
					data: payload,
					status: 'success',
					error: null,
				};
			})
			.addCase(getAsyncCarts.rejected, (_, { error }) => {
				return {
					data: [],
					status: 'fail',
					error,
				};
			});
	},
});

export const getAllCartsSelector = (state) => state.carts;

export default cartsSlice.reducer;
export const { sortByPrice, greaterThreeThousand } = cartsSlice.actions;
