import {configureStore} from "@reduxjs/toolkit"
import usersSlice from '../feuters/users/usersSlice'


const store  = configureStore({
reducer:{
users:usersSlice
}
})


export default store



