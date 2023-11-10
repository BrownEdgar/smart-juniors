import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './User.scss';
import ROUTES from '../../routes/routes';

export default function User({ users }) {
	const { id } = useParams();
	const [userById, setUserById] = useState({});

	useEffect(() => {
		if (users?.length !== 0) {
			setUserById(users.find((user) => user.id == id));
		}
	}, [id]);

	if (!users.find((user) => user.id == id)) {
		return (
			<div className="User-noData">
				<h2>NOT FOUND</h2>
				<Link to={`/${ROUTES.USERS}`}>Go Back</Link>
			</div>
		);
	}

	return (
		<div className="User">
			<div className="User-content">
				<div className="User-mainContent">
					<h1>IMAGE</h1>
					<div className="User-textContent">
						<h2>
							{userById.firstname} {userById.lastname}
						</h2>
						<hr />
						<div className="otherInfo" style={{ display: 'flex', justifyContent: 'space-between' }}>
							<i>{userById.username}</i>
							<small style={{ opacity: 0.7 }}>{userById.email}</small>
						</div>
						<p>
							<span style={{ color: 'lime', marginRight: '10px' }}>birth date</span> {userById.day} {userById.month},{' '}
							{userById.year}
						</p>
						<p>
							<span style={{ color: 'lime', marginRight: '10px' }}>gender</span> {userById.gender}
						</p>
					</div>
				</div>
				<div className="User-textInfoContent">{userById.info}</div>
			</div>
		</div>
	);
}

User.propTypes = {
	users: PropTypes.array.isRequired,
};
