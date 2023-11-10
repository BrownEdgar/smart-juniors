import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ROUTES from '../../React router/routes/routes'

export default function Errorpage() {
    const navigate = useNavigate()
    const goHome = ()=> {
        navigate(ROUTES.REGISTER)
    }
  return (
    <div>
        <h2>Error 404 /page not found</h2>
        <button onClick={goHome}>Go to the Registration page</button>
    </div>
  )
}
