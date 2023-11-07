import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../Routes/routes'

export default function Navbar() {
  return (
    <div>
      <header>
        <ul>
            <li>
                <Link to={ROUTES.REGISTER}> register </Link>
            </li>
            <li>
                <Link to={ROUTES.USERS}> users </Link>
            </li> 
        </ul>
    </header>
    </div>
  )
}
