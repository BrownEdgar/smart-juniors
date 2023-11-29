import { configureStore } from "@reduxjs/toolkit";
import usersSlice from '../features/users/usersSlice';
import countersSlice from '../features/counters/countersSlice';
import mainMiddleWares from '../middleWares/main';
import postsSlice from '../features/posts/postsSlice';
import booksSlice from '../features/books/booksSlice';




// const myFirstMiddleWare = (store) => (next) => (action) => {
//   console.log({ store, next, action });
//   console.log(new Date().toLocaleTimeString())

//   if (action.type === 'users/addUser') {
//     const newpayload = {
//       id: Math.random().toString(36).slice(2, 8),
//       username: action.payload
//     }
//     action.payload = newpayload
//   }

//   next(action)
// }

const store = configureStore({
  reducer: {
    users: usersSlice,
    // counters: countersSlice,
    // posts: postsSlice,
    books: booksSlice
  },
  middleware: mainMiddleWares,
})

export default store