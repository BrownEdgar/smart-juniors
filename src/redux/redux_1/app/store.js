import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/countSlice";
import arrayReducer from "../features/array/arraySlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    array: arrayReducer
  }
})

export default store