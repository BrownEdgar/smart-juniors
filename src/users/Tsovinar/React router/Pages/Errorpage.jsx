import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function Errorpage() {
 const navigate =  useNavigate()     
const goHome = ()=>{
    navigate(ROUTES.HOME)
}

  return (
    <div>
        <h2>Error 404 page not found</h2>
        <Link to={ROUTES.HOME}>Go Home</Link>
        <button onClick={goHome}>Go back</button>
    </div>
  )
}

