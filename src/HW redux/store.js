import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './features/usersSlice'
import mainMD from "./middleWares/mainMiddleWare";

const store = configureStore({
    reducer:{
        users: usersSlice
    },
    middleware: mainMD
    
})
export default store