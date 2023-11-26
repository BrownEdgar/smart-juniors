import { configureStore } from '@reduxjs/toolkit'
import countReducer from './features/count/count/countSlice'


const store = configureStore({
    reducer: {
        count: countReducer ,
    },
})

export default store