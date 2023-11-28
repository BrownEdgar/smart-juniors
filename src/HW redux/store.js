import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './features/usersSlice'
import mainMD from "./middleWares/mainMiddleWare";
import postsSlice from "./features/postsSlice";

const store = configureStore({
    reducer:{
        users: usersSlice,
        posts: postsSlice
    },
    middleware: mainMD
    
})
export default store