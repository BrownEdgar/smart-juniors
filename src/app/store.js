import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import countersSlice from '../features/count/countersSlice';
import mainMiddleWare from '../middleWares/main';

const store = configureStore({
    reducer:{
        counters: countersSlice,
        users: usersSlice
    },
    middleware: mainMiddleWare, 
})

export default store