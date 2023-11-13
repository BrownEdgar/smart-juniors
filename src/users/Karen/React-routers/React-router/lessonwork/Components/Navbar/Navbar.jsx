import {NavLink } from "react-router-dom"
import ROUTES from "../../routes/routes"
import "./Navbar.scss"


// const setClassName=({isActive})=> isActive ? 'active-link':''

export default function Navbar() {
  return (
    <header>
        <ul>
             {/* <li>
                <NavLink to={ROUTES.BOB} className={setClassName}>Home</NavLink>
            </li>  */}
            <li>
                <NavLink to={ROUTES.HOME} className={({isActive})=> isActive ? 'active-link':''}>Home</NavLink>
            </li> 
            <li>
                <NavLink to={ROUTES.ABOUT} className={({isActive})=> isActive ? 'active-link':''}>About</NavLink>
            </li> 
            <li>
                <NavLink to={ROUTES.BLOG} className={({isActive})=> isActive ? 'active-link':''}>Blog</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.REGISTER} className={({isActive})=> isActive ? 'active-link':''}>Register</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.POSTS} className={({isActive})=>isActive ? 'active-link':''}>Posts</NavLink>
            </li>
        </ul>
    </header>
  )
}
