import React from 'react'
import "./SignUp.scss"
import RegForm from "../../components/RegForm/RegForm";

export default function SignUp({users, setUsers}) {
  return (
    <div className='SignUp'>
      <RegForm users={users} setUsers={setUsers}/>
    </div>
  )
}
