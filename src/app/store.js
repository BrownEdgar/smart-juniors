import {configureStore} from "@reduxjs/toolkit"
import cartsSlice from "../features/cartsSlice"

const store = configureStore({
    reducer:{
        carts: cartsSlice
    }
})
export default store