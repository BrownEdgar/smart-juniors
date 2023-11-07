import React from 'react'
import { NavLink } from "react-router-dom";
import ROUTES from '../../routes/routes';

import "./Navbar.scss"

export default function Navbar() {
  const linkActive = ({ isActive }) => {
    return {
      color: isActive ? "inherit" : "",
      backgroundColor: isActive ? "darkcyan" : ""
    };
  }
  return (
    <header>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME}  style={linkActive}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT} style={linkActive}>About</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.NEWS} style={linkActive}>News</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.BLOG} style={linkActive}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.SIGNUP} style={linkActive}>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.USERS} style={linkActive}>Users</NavLink>
        </li>
      </ul>
    </header>
  )
}
