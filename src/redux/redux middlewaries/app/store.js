import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

    const addCompanyMiddleWare = (store) => (next) => (action) => {
        if (action.type === 'users/addCompany') {
          const newpayload = action.payload = {
            id: `${Math.floor(Math.random()*100000)}` ,
            added: new Date().toLocaleTimeString(),
            contact: action.payload.contact,
          }
          action.payload = newpayload
        } 
        next(action)  
    }

    const checkIdMiddleWare = (store) => (next) => (action) => {
        if (action.type === 'users/addCompany') {
            const users = store.getState().users.data;
            console.log(users);
            // const isExisteUSers = users.some(user => user.username === action.payload)
            // console.log(users.some(user => console.log(user)));
            // if (isExisteUSers) {
            //     alert('This user is exist')
            //     return
            // }
        }
        next(action)
    }

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        addCompanyMiddleWare,
        checkIdMiddleWare,
    
    ),
})

export default store