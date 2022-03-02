import { createReducer } from '@reduxjs/toolkit'
import {IInitialState, UsersGetFailure, UsersGetSuccess, DeleteUser, SelectId, UnSelectId} from "../../types/types";
import {getUsersRequest, getUsersSuccess, getUsersFailure, deleteUser, selectId, unSelectId} from "../actions/usersAction";

const initialState:IInitialState = {
  users: [],
  selectedIds: [],
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
  [deleteUser]: (state: IInitialState, action: DeleteUser ): void  => {
    state.users = state.users?.filter((user) => (
      user.id !== action.payload
    ))
  },
  [selectId]: (state: IInitialState, action: SelectId ): void  => {
    if (action.payload != null) {
      state.selectedIds?.push(action.payload)
    }
  },
  [unSelectId]: (state: IInitialState, action: UnSelectId ): void  => {
    state.selectedIds = state.selectedIds?.filter((id) => (
      id !== action.payload
    ))
  }
})