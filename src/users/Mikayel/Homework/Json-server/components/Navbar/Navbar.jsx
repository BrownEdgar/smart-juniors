import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME} activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PEOPLE_LIST} activeClassName="active-link">Famous People</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.NEW_PERSON} activeClassName="active-link">New Person</NavLink>
        </li>
      </ul>
    </header>
  )
}