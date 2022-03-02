import React, { useEffect, useState } from 'react';
import { columns } from './shared/helpers'
import { useDispatch } from 'react-redux'
import {getUsers} from "./store/actions/usersAction";
import { Loading } from './components/Loading/Loading'
import { useTypedSelector } from './hooks/useTypedSelector'
import './style.scss'
import {isArray} from "util";
import {Outlet, Link, Routes, Route, Navigate} from "react-router-dom";
import { Users } from "./components/Users/Users";
import {User} from "./components/User/User";
import {useAction} from "./hooks/useAction";
require("react/package.json"); // react is a peer dependency.
const reactTable = require("react-table")

export const App = () => {

  const { getUsers } = useAction()

  useEffect(() => {
    getUsers()
  }, [])

  const {users, isError, errorTitle} = useTypedSelector((state) => state.users)

  if (isError) {
    return (
      <div>{ errorTitle }</div>
    )}

  return (
    <Routes>
      <Route path='/users' element={<Users />}>
        <Route path=':userId' element={<User />}/>
      </Route>
      <Route path="*" element={<Navigate to='/users' />}/>
    </Routes>
  )
}