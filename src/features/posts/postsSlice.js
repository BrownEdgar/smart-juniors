import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getAsyncPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
)

export const changeStatus = createAction("changeStatus")


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {

  },
  extraReducers: {
    [getAsyncPosts.pending]: (state) => {
      state.status = 'pending'
    },
    [getAsyncPosts.fulfilled]: (_, action) => {
      return {
        data: action.payload,
        status: 'success',
        error: null
      }
    },
    [getAsyncPosts.rejected]: (_, action) => {
      return {
        data: [],
        status: 'fail',
        error: action.error
      }
    },
    'changeStatus': (state) => {
      state.status = 'changeStatus'
    }
  }
})


export default postSlice.reducer





// extraReducers: (builder) => {
//   builder
//     .addCase(getAsyncPosts.pending, (state) => {
//       state.status = 'pending'
//     })
//     .addCase(getAsyncPosts.fulfilled, (state, action) => {
//       console.log(action.payload)
//       return {
//         data: action.payload,
//         status: 'success',
//         error: null
//       }
//     })
//     .addCase(getAsyncPosts.rejected, (state, action) => {
//       return {
//         data: [],
//         status: 'fail',
//         error: action.error
//       }
//     })
// }