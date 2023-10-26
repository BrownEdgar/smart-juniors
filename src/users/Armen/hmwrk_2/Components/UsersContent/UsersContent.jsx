import MainContent from '../MainContent/MainContent';
import './UsersContent.scss';
import PropTypes from 'prop-types';

export default function UsersContent({ users }) {
	return (
		<div className="UsersContent">
			{users.map((user) => {
				return (
					<MainContent
						key={user.id}
						id={user.id}
						name={user.name}
						username={user.username}
						email={user.email}
						phone={user.phone}
						website={user.website}
						address={user.address}
						company={user.company}
					/>
				);
			})}
		</div>
	);
}

UsersContent.propTypes = { users: PropTypes.array.isRequired };

// UsersContent.propTypes = {
// 	users: PropTypes.arrayOf(
// 		PropTypes.exact({
// 			id: PropTypes.number.isRequired,
// 			name: PropTypes.string.isRequired,
// 			username: PropTypes.string.isRequired,
// 			email: PropTypes.string.isRequired,
// 			address: PropTypes.objectOf(
// 				PropTypes.exact({
// 					street: PropTypes.string.isRequired,
// 					suite: PropTypes.string.isRequired,
// 					city: PropTypes.string.isRequired,
// 					zipcode: PropTypes.string.isRequired,
// 					geo: PropTypes.objectOf(
// 						PropTypes.exact({
// 							lat: PropTypes.string.isRequired,
// 							lng: PropTypes.string.isRequired,
// 						})
// 					),
// 				})
// 			),
// 			phone: PropTypes.string.isRequired,
// 			website: PropTypes.string.isRequired,
// 			company: PropTypes.objectOf(
// 				PropTypes.exact({
// 					name: PropTypes.string.isRequired,
// 					catchPhrase: PropTypes.string.isRequired,
// 					bs: PropTypes.string.isRequired,
// 				})
// 			),
// 		})
// 	),
// };
