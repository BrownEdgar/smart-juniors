import { NavLink } from "react-router-dom";
import HydraIcon from "../../icons/HydraIcon";
import HydraText from "../../icons/HydraText";

import "./Navbar.scss"
import ROUTES from "../../routes/routes";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar-leftSide">
        <HydraIcon />
        <HydraText />
      </div>
      <div className="Navbar-middle">
        <ul>
          <li>
            <NavLink to={ROUTES.ABOUT}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SERVICES}>SERVICES</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.TECHNOLOGIES}>TECHNOLOGIES</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.HOWTO}>HOW TO</NavLink>
          </li>
        </ul>
      </div>
      <div className="Navbar-rightSide">
        <Button title="CONTACT US" btnStyle={{name: "primary", status: true}}/>
        <Button title="JOIN HYDRA" btnStyle={{name: "secondary", status: true}}/>
      </div>
    </header>
  )
}
