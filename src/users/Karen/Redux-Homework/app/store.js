import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../feauters/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';




const persistConfig = {
    key:'root',
    storage:storage,
}

const rootReducer = combineReducers({
    users:usersSlice,
})

const persistorReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
reducer:persistorReducer,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
})

export const persistor = persistStore(store) 
export default store