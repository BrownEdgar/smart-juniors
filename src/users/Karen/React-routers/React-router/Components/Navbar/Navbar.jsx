import { Link } from "react-router-dom"
import ROUTES from "../../routes/routes"


import "./Navbar.scss"

export default function Navbar() {
  return (
    <header>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li> 
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li> 
            <li>
                <Link to={ROUTES.BLOG}>Blog</Link>
            </li>
            <li>
                <Link to={ROUTES.REGISTER}>Register</Link>
            </li>
        </ul>
    </header>
  )
}
