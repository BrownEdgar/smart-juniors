// import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { object, string } from 'yup';
import ROUTES from '../../routes/routes';
import { InputField, SelectOption } from '../../components';
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
	username: string().min(6, 'minimum 6 symbol').max(14, 'maximum 14 symbol').required("You didn't write anything!"),
	password: string()
		.min(8, 'Pasword must contain minimum 8 characters')
		.max(16, 'Pasword must contain maximum 16 characters')
		.matches(
			/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
			'Must contain uppercase, lowercase, number, special character, no spaces!'
		)
		.required("You didn't write anything!"),
	day: string().required('Required!'),
	month: string().required('Required!'),
	year: string().required('Required!'),
	email: string().email().required("You didn't write anything!"),
	gender: string().required("You didn't choose anything!"),
	info: string()
		.min(10, 'Minimum 10 character allowed')
		.max(300, 'Maximum 300 character allowed')
		.required("You didn't write anything!"),
});

const birthDateOptions = {
	day: new Array(31).fill().map((_, i) => i + 1),
	month: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	year: new Array(2006 - 1900 + 1)
		.fill()
		.map((_, i) => i + 1900)
		.reverse(),
};

export default function Register({ setUsers }) {
	const navigate = useNavigate();

	const initialValues = {
		firstname: '',
		lastname: '',
		username: '',
		password: '',
		email: '',
		day: '',
		month: '',
		year: '',
		gender: 'male',
		info: '',
	};

	const handleSubmit = (values, { resetForm }) => {
		const signedValues = values;
		setUsers((prevUsers) => {
			return [...prevUsers, { id: Date.now(), ...signedValues }];
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
								<InputField inputType="text" inputName="username" inputLabel="Username" />
								<InputField inputType="password" inputName="password" inputLabel="Password" />
								<InputField inputType="email" inputName="email" inputLabel="Email Address" />
								<div className="Register-birthDateSelect">
									<SelectOption inputName="day" inputLabel="Day" options={birthDateOptions.day} />
									<SelectOption inputName="month" inputLabel="Month" options={birthDateOptions.month} />
									<SelectOption inputName="year" inputLabel="Year" options={birthDateOptions.year} />
								</div>
								<div className="Register-genderSelect">
									<Field type="radio" name="gender" id="male" value="male" />
									<label htmlFor="male" className="gender male">
										Male
									</label>
									<Field type="radio" name="gender" id="female" value="female" />
									<label htmlFor="female" className="gender female">
										Female
									</label>
									<div className="checkLight"></div>
								</div>
								<div className="Register-textAreaField">
									<div className={`label info`}>Info</div>
									<Field as="textarea" name="info" id="info" rows="5" placeholder=""></Field>
									<ErrorMessage name="info">
										{(message) => {
											return (
												<p className="InputField-errorMessage" style={{ width: `${message.length * 12}px` }}>
													{message}
												</p>
											);
										}}
									</ErrorMessage>
								</div>
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
