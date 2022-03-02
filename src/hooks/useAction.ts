import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as UserActionCreators from '../store/actions/usersAction'

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreators, dispatch)
}