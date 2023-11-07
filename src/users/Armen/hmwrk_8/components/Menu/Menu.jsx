import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './Menu.scss';

export default function Menu() {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to={ROUTES.REGISTER}>Sign up</Link>
				</li>
				<li>
					<Link to={ROUTES.USERS}>Users</Link>
				</li>
			</ul>
		</div>
	);
}
