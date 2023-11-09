import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'

const setClassName = ({isActive}) => isActive ? 'active-link' : ''

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME} className={setClassName}>Home</NavLink>
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
      </ul>
    </header>
  )
}
