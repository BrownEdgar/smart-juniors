import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from '../../routes/routes';
import './ControlPanel.scss';

export default function ControlPanel({ userCount }) {
	return (
		<div className="ControlPanel">
			<Link to={ROUTES.REGISTER} className="ControlPanel-addUser">
				Add User
			</Link>
			<p className="ControlPanel-userCount">Count: {userCount}</p>
		</div>
	);
}

ControlPanel.propTypes = {
	userCount: PropTypes.number.isRequired,
};
