import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from "../routes/routes"


export default function ErrorPages() {
    const navigate=useNavigate()
    const goHome=()=>{
        navigate({pathname:ROUTES.HOME})
    }
  return (
    <div>
        <h2>404 | Page not found</h2>
        <Link to={ROUTES.HOME}>Go home</Link>
        <button onClick={goHome}>Go back</button>
    </div>
  )
}
