import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

    const checkUserMiddleWare = (store) => (next) => (action) => {
        if (action.type === 'users/addUser') {
            const users = store.getState().users.data;
            const isExisteUSers = users.some(user => user.username === action.payload)
            if (isExisteUSers) {
                alert('This user is exist')
                return
            }
        }
        next(action)
    }

    const myFirstMiddleWare = (store) => (next) => (action) => {
        if (action.type === 'users/addUser') {
          const newpayload = action.payload = {
            id: Math.random().toString(36).slice(2,8),
            username: action.payload,
            addtime: new Date().toLocaleTimeString(),
          }
          action.payload = newpayload
        } 
        next(action)  
    }



const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        checkUserMiddleWare,
        myFirstMiddleWare,
    
    ),
})

export default store