import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routes'

import "./Navbar.scss"

export default function Navbar() {
  return (
    <header className='Navbar'>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SLIDES}>Slides</Link>
        </li>
      </ul>
    </header>
  )
}
