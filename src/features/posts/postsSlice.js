import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAsyncPosts = createAsyncThunk('posts/getPosts', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();

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

export const getAllPostsSelector = (state) => state.posts;

export default postsSlice.reducer;
