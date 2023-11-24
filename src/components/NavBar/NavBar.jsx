import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './NavBar.scss';

export default function NavBar() {
	return (
		<div className="NavBar">
			<ul>
				<li>
					<NavLink to={ROUTES.HOME}>Home</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.COUNTER}>Counter</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.RANDOMIZER}>Randomizer</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.GROUPS}>Groups</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.ADD_GROUP}>Add Group</NavLink>
				</li>
			</ul>
		</div>
	);
}
