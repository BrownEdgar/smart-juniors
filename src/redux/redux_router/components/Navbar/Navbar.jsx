import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { toggleModal } from '../../features/modal/modalSlice';
import ROUTES from '../../routes/routes'
import './Navbar.scss'

const linkActive = ({ isActive }) => {
  return isActive ? "active" : "";
}

export default function Navbar() {
  const logged = localStorage.getItem("adminLogged")
  const dispatch = useDispatch()
  return (
    <header className='Navbar'>
      <div className='Navbar-leftSide'>
        <img src="./images/logo/maxtron-labs-1.svg" alt="maxtron" />
      </div>
      <div className='Navbar-rightSide'>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={linkActive}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SHOP} className={linkActive}>SHOP</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} className={linkActive}>BLOG</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.MEDIA} className={linkActive}>MEDIA</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.FEATURES} className={linkActive}>FEATURES</NavLink>
          </li>
          <li>
            {
              logged === "true"
                ? <NavLink to={ROUTES.ADMIN} className={linkActive}>ADMIN</NavLink>
                : null
            }
          </li>
          <li>
            {
              logged === "true"
                ? null
                : <i className="fa-solid fa-user-plus" onClick={() => dispatch(toggleModal("AdminForm"))}></i>
            }
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
