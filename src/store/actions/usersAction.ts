import {createAction, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersRequest: any = createAction(`GET_USERS_REQUEST`)
export const getUsersSuccess: any = createAction(`GET_USERS_SUCCESS`)
export const getUsersFailure: any = createAction(`GET_USERS_FAILURE`)

export const getUsers: any = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getUsersRequest())
    const responce = await axios.get(`https://jsonplaceholder.typicode.com/users`).then(item => item)
    dispatch(getUsersSuccess(responce.data))
  } catch (e) {
    dispatch(getUsersFailure(`Возникла ошибка при загрузке пользователей`))
  }
}

export const deleteUser: any = createAction(`DELETE_USER`)
export const selectId: any = createAction(`SELECT_ID`)
export const unSelectId: any = createAction(`UNSELECT_ID`)

