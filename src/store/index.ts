import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/usersReducer'

export const rootReducer = combineReducers({
  users: usersReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>