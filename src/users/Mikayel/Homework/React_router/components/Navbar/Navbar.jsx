import { Link } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to={ROUTES.REGISTRATION}>Registration</Link>
        </li>
        <li>
          <Link to={ROUTES.USERS}>Users</Link>
        </li>
      </ul>
    </header>
  )
}