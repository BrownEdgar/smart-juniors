import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksSlice from '../feauters/books'
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
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage:storage    
  }
  
  const rootReducer = combineReducers({
      books:booksSlice,
    })
    
  const persisteReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer:persisteReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor=persistStore(store) 
export default store