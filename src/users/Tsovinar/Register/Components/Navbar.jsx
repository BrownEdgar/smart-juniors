import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../Routes/routes'

export default function Navbar() {
  const setClassName = ({isActive}) => isActive? 'isactive-true' : ''
  return (
    <div>
      <header>
        <ul>
            <li>
                <NavLink to={ROUTES.REGISTER} className={setClassName}> register </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.USERS} className={setClassName}> users </NavLink>
            </li> 
        </ul>
    </header>
    </div>
  )
}
