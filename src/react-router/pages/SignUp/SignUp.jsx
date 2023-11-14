import React from 'react'

import RegForm from "../../components/RegForm/RegForm";

import "./SignUp.scss"

export default function SignUp({users, setUsers}) {
  return (
    <div className='SignUp'>
      <RegForm users={users} setUsers={setUsers}/>
    </div>
  )
}
