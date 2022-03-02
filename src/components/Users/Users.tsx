import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Loading} from "../Loading/Loading";
import {columns} from "../../shared/helpers";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

export const Users = () => {

  const { isFetching, users, selectedIds } = useTypedSelector(state => state.users)
  const { deleteUser, selectId, unSelectId } = useAction()

  const checkBoxHendler = (id: number) => {

    if (selectedIds?.includes(id)) {
      unSelectId(id)
    } else {
      selectId(id)
    }
  }

  return (
    <>
      {isFetching ?
        <Loading /> :
        <table>
          <thead>
          <tr>
            {columns.map(({ Header }) => (
              <th>{ Header }</th>
            ))}
          </tr>
          </thead>
          {users?.map((user) => (
            <tbody>
            <tr>
              <td>
                <input onClick={() => checkBoxHendler(user.id)}
                       type='checkbox'
                       checked={selectedIds?.includes(user.id)} />
              </td>
              <td>
                {user.id}
              </td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <span>подробнее</span>
                </Link>
              </td>
              <td>
                {user.username}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.website}
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)} >удалить</button>
              </td>
            </tr>
            </tbody>
          ))}
        </table>
      }
      <Outlet />
    </>
  )
}