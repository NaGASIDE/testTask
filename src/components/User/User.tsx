import React, { FC } from 'react';
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const User:FC = () => {

  let params: any = useParams();
  const { users } = useTypedSelector(state => state.users)

  // @ts-ignore
  const { address,company,email,name,username,phone,website} = (users?.filter((user) => (user.id == params.userId)))[0]

  return (
    <div>
      <div>Логин:{ username }</div>
      <div>Город: { address.city }</div>
      <div>Улица: { address.street }</div>
      <div>Компания: { company.name }</div>
      <div>Эл. почта: { email }</div>
      <div>ФИО: { name }</div>
      <div>тел: { phone }</div>
      <div>сайт: { website }</div>
    </div>
  )
}