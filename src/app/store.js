import {combineReducers, configureStore} from "@reduxjs/toolkit"
import cartsSlice from "../features/cartsSlice"
import todosSlice from "../features/todosSlice"
import usersSlice from "../features/usersSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['users', 'todos']
  }
  const rootReducer = combineReducers({
        carts: cartsSlice,
        users: usersSlice,
        todos: todosSlice
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer:persistedReducer
})
export const persistor = persistStore(store)
export default store
