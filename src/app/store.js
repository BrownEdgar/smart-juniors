import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/count/countSlice'

const store = configureStore({
    reducer:{
        count: countReducer

    }
})

export default store