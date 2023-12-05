import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAsyncData } from "../actions/asyncActions";

export const getPosts = createAsyncThunk("posts/getPosts", getAsyncData)

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: {},
    status: "idle",
    error: null,
    page: 1,
    perPage: 10
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    changePerPage: (state, action) => {
      state.perPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = "ok"
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.error = action.error.message
        state.status = "fail"
      })
  }
})

export const { changePage, changePerPage } = postsSlice.actions
export const getAllPosts = (state) => state.posts.data
export const getPostsSettings = (state) => state.posts

export default postsSlice.reducer