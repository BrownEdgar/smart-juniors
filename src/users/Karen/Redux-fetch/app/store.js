import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../feauters/postsSlice";

const store = configureStore({
    reducer:{
        posts:postsSlice
    },

})

export default store