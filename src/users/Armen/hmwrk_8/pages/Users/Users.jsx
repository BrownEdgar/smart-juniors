import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './Users.scss';

export default function Users({ users, removeUser }) {
	return (
		<div className="Users">
			<h1 className="Users-title Layouts-pageTitle">USERS</h1>
			<p className="Users-count">Count: {users.length}</p>
			<table>
				<thead>
					<tr>
						<th className="tableId">ID</th>
						<th className="tableFirstName">First Name</th>
						<th className="tableLastName">Last Name</th>
						<th className="tableEmail">Email Address</th>
						<th className="tableRemove"></th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? (
						users.map((user, index) => {
							return (
								<tr key={user.id}>
									<td>...{user.id % 1e4}</td>
									<td>{user.firstname}</td>
									<td>{user.lastname}</td>
									<td>{user.email}</td>
									<td>
										<i className="fa-solid fa-trash-can" onClick={() => removeUser(index)}></i>
									</td>
								</tr>
							);
						})
					) : (
						<tr className="noData">
							<td colSpan={4}>
								<h3>NO DATA</h3>
								<Link to={ROUTES.REGISTER}>Add User</Link>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

Users.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			firstname: PropTypes.string.isRequired,
			lastname: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
		})
	),
	removeUser: PropTypes.func.isRequired,
};
