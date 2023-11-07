import { Link } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'

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
      </ul>
    </header>
  )
}
