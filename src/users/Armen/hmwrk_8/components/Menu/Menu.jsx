import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './Menu.scss';

const setClassName = ({ isActive }) => (isActive ? 'activeLink' : '');

export default function Menu() {
	return (
		<div className="Menu">
			<ul>
				<li>
					<NavLink to={ROUTES.REGISTER} className={setClassName}>
						Sign up
					</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.USERS} className={setClassName}>
						Users
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
