import { createReducer } from '@reduxjs/toolkit'
import {IInitialState, UsersGetFailure, UsersGetSuccess} from "../../types/types";
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../actions/usersAction";

const initialState:IInitialState = {
  users: [],
  isFetching: false,
  isError: false,
  errorTitle: null
}

export default createReducer(initialState, {
  [getUsersRequest]: (state: IInitialState ): void  => {
    state.isFetching = true
  },

  [getUsersSuccess]: (state: IInitialState, action: UsersGetSuccess): void => {
    state.users = action.payload
    state.isFetching = false
  },

  [getUsersFailure]: (state: IInitialState, action: UsersGetFailure ): void  => {
    state.isFetching = false
    state.isError = true
    state.errorTitle = action.payload
  },
})