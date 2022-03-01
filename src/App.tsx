import React, { useEffect } from 'react';
import { columns, data } from './shared/helpers'
import { useDispatch } from 'react-redux'
import {getUsers} from "./store/actions/usersAction";
import { Loading } from './components/Loading/Loading'
import { useTypedSelector } from './hooks/useTypedSelector'
require("react/package.json"); // react is a peer dependency.
const reactTable = require("react-table")


export const App = () => {

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const dispatch = useDispatch()
  const {users, isError, errorTitle, isFetching} = useTypedSelector((state) => state.users)

  const tableInstance = reactTable.useTable({ columns, data })

  const {
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  if (isError) {
    return (
      <div>
        { errorTitle }
      </div>
    )
  }

  return (
    <>
      {isFetching ?
      <Loading /> :
        <table>
          <thead  >
          {headerGroups.map((headerGroup:any) => (
            <tr>
              {headerGroup.headers.map((column:any) => (
                <th style={{border:`1px solid black`}} >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
          </thead>
          <tbody>
          {rows.map((row:any) => {
            prepareRow(row)
            return (
              <tr>
                {row.cells.map((cell:any) => (
                  <td style={{border:`1px solid black`}} >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )})}
          </tbody>
        </table>
      }
    </>
  )
}