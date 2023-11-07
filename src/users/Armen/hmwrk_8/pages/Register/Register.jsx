import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { object, string } from 'yup';
import ROUTES from '../../routes/routes';
import InputField from '../../components/InputField/InputField';
import './Register.scss';

const validationSchema = object({
	firstname: string()
		.min(3, 'minimum 3 symbol')
		.max(18, 'maximum 18 symbol')
		.matches(/^[A-Z]/, 'The first letter must be capitalized')
		.required("You didn't write anything!"),
	lastname: string()
		.min(3, 'minimum 3 symbol')
		.max(18, 'maximum 18 symbol')
		.matches(/^[A-Z]/, 'The first letter must be capitalized')
		.required("You didn't write anything!"),
	email: string().email().required("You didn't write anything!"),
});

export default function Register({ setUsers }) {
	const navigate = useNavigate();

	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
	};

	const handleSubmit = (values, { resetForm }) => {
		const { firstname, lastname, email } = values;
		setUsers((prevUsers) => {
			return [...prevUsers, { id: Date.now(), firstname, lastname, email }];
		});
		resetForm();
		navigate({
			pathname: ROUTES.USERS,
		});
	};

	return (
		<div className="Register">
			<h1 className="Register-title Layouts-pageTitle">REGISTRATION</h1>
			<Formik
				initialValues={initialValues}
				validateOnBlur={true}
				validateOnChange={false}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => {
					return (
						<Form className="Register-form">
							<div className="Register-inputWrapper">
								<InputField inputType="text" inputName="firstname" inputLabel="First name" />
								<InputField inputType="text" inputName="lastname" inputLabel="Last name" />
								<InputField inputType="email" inputName="email" inputLabel="Email Address" />
							</div>
							<input type="submit" id="submit" value="Sign Up" />
							<div className="Register-buttonLight"></div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

Register.propTypes = {
	setUsers: PropTypes.func.isRequired,
};
