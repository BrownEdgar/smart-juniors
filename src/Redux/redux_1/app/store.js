import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import countersSlice from "../features/counters/countersSlice";

const checkUserMiddleWare = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    const users = store.getState().users.data;
    const isExistUser = users.some(user => user.username === action.payload)
    if (isExistUser) {
      alert('user is exist')
      return;
    }
  }
  next(action)
}


const myFirstMiddleWare = (store) => (next) => (action) => {
  // console.log({ store, next, action });
  // console.log(new Date().toLocaleTimeString());

  if (action.type === 'users/addUser') {
    const newPayload = {
      id: Math.random().toString(36).slice(2, 8),
      username: action.payload
    }
    action.payload = newPayload
  }
  next(action)
}


const nonRepeatedNumbersMiddleWare = (store) => (next) => (action) => {
  if (action.type === 'counters/addCount') {
    const counters = store.getState().counters;
    if (counters.includes(action.payload)) {
      console.log('Repeating number: ', action.payload)
      return;
    }
  }
  next(action)
}


const store = configureStore({
  reducer: {
    users: usersSlice,
    counters: countersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkUserMiddleWare, myFirstMiddleWare, nonRepeatedNumbersMiddleWare)
})

export default store