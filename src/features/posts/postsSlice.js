import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncPosts = createAsyncThunk('posts/getPosts', async (options) => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
		params: {
			_limit: options.perPage,
			_start: options.perPage * options.page - options.perPage,
		},
	});
	const data = response.data;
	return data;
});

const initialState = {
	data: [],
	status: 'idle',
	error: null,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncPosts.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getAsyncPosts.fulfilled, (_, { payload: posts }) => {
				return {
					data: posts,
					status: 'success',
					error: null,
				};
			})
			.addCase(getAsyncPosts.rejected, (_, { error }) => {
				return {
					data: [],
					status: 'fail',
					error,
				};
			});
	},
});

export const getPosts = (state) => state.posts;

export default postsSlice.reducer;
