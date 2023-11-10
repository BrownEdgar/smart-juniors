
import './Navbar.scss'
import { Link, NavLink } from "react-router-dom"
import ROUTES from '../../routes/routes'

export default function Navbar() {

    const setClassname =({isActive}) => isActive? "isactive-true" : ''

  return (
    <header>
        <ul>
            <li>
                <NavLink to={ROUTES.HOME} className={setClassname}>Home</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ABOUT} className={setClassname}>About</NavLink>
            </li> 
            <li>
                <NavLink to={ROUTES.BLOG} className={setClassname}>Blog</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.POSTS} className={setClassname}>Posts</NavLink>
            </li>
        </ul>
    </header>
  )
}
