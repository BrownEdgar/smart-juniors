import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './NavBar.scss';

export default function NavBar() {
	return (
		<div className="NavBar">
			<ul>
				<li>
					<NavLink to={ROUTES.HOMEPAGE}>Home</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.SIGNIN}>Sign In</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.USERS}>Users</NavLink>
				</li>
			</ul>
		</div>
	);
}
