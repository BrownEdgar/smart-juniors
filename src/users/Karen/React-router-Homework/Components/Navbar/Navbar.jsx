import {  NavLink } from "react-router-dom"
import ROUTES from "../../routes/routes"

import "./Navbar.scss"


const setClassName=({isActive})=> isActive ? 'active-Link':''





export default function Navbar() {

  return (
    <header >
            <ul>
            <li>
                <NavLink to={ROUTES.HOME} 
                className={({isActive})=> isActive ? 'active-Link':''}>Home</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ABOUT} className={setClassName}>About</NavLink>
            </li> 
             <li>
                <NavLink to={ROUTES.BLOG} className={setClassName}>Blog</NavLink>
            </li> 
             <li>
                <NavLink to={ROUTES.POSTS} className={setClassName}>Posts</NavLink>
            </li>
              <li>
                <NavLink to={ROUTES.REGISTER} className={setClassName}>Register</NavLink>
            </li>
             <li>
                <NavLink to={ROUTES.USERS} className={setClassName}>Users</NavLink>
            </li>
        </ul>
    </header>
  )
}
