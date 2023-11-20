import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import { SignForm } from '../../components';
import './SignUp.scss';

export default function SignUp({ users }) {
	const navigate = useNavigate;

	const handleSignUp = (values, resetForm) => {
		const { profile_image, firstname, lastname, email, username, password, birthplace, birthdate, known_as, about } =
			values;

		if (users.every((user) => user.email != email)) {
			axios
				.post('http://localhost:3000/users', {
					id: Date.now(),
					profile_image: profile_image.match(/(?<=fakepath\\).*$/)?.[0],
					firstname,
					lastname,
					email,
					username,
					password,
					birthday: +birthdate.slice(8),
					birthmonth: +birthdate.slice(5, 7),
					birthyear: +birthdate.slice(0, 4),
					birthplace: birthplace,
					known_as,
					about,
				})
				.catch((err) => console.log(err));
		}

		resetForm();
		navigate({ pathname: `/${ROUTES.USERS}` });
	};

	return (
		<div className="SignUp">
			<h2 className="SignUp-title">Sign Up</h2>
			<SignForm actionName="Sign Up" handleFormSubmit={handleSignUp} />
		</div>
	);
}

SignUp.propTypes = {
	users: PropTypes.array.isRequired,
};
