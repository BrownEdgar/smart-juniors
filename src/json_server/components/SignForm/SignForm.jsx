import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './SignForm.scss';
import { object, string } from 'yup';

const validationSchema = object({
	firstname: string().min(3).max(26),
	lastname: string().min(3).max(26),
	email: string().email(),
	username: string().min(6).max(26),
	password: string().min(8).max(26),
	profile_image: string(),
	birthdate: string(),
	birthplace: string(),
	known_as: string().min(10).max(24),
	about: string().min(10).max(400),
});

export default function SignForm({ actionName, handleFormSubmit }) {
	const signInitialValues = {
		firstname: '',
		lastname: '',
		email: '',
		username: '',
		password: '',
		profile_image: '',
		birthdate: '',
		birthplace: '',
		known_as: '',
		about: '',
	};

	// const editInitialValues = {
	// 	firstname: '',
	// 	lastname: '',
	// 	email: '',
	// 	username: '',
	// 	password: '',
	// 	profile_image: '',
	// 	birthdate: '',
	// 	birthplace: '',
	// 	known_as: '',
	// 	about: '',
	// };

	const handleSubmit = (values, { resetForm }) => {
		handleFormSubmit(values, resetForm);
		console.log(values);
	};

	return (
		<div className="SignForm">
			<Formik
				initialValues={signInitialValues}
				validateOnChange={false}
				validateOnBlur={true}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<label>
						<p>Profile Picture</p>
						<Field type="file" name="profile_image" id="profile_image" required />
					</label>
					<Field type="text" name="firstname" id="firstname" placeholder="First Name" autoComplete="off" required />
					<ErrorMessage name="firstname">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field type="text" name="lastname" id="lastname" placeholder="Last Name" autoComplete="off" required />
					<ErrorMessage name="lastname">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field type="email" name="email" id="email" placeholder="Email Address" autoComplete="off" required />
					<ErrorMessage name="email">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field type="text" name="username" id="username" placeholder="Username" autoComplete="off" required />
					<ErrorMessage name="username">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field type="password" name="password" id="password" placeholder="Password" autoComplete="off" required />
					<ErrorMessage name="password">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field type="text" name="birthplace" id="birthplace" placeholder="Birth Place" autoComplete="off" required />
					<ErrorMessage name="birthplace">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<label>
						<p>Birth date</p>
						<Field type="date" name="birthdate" id="birthdate" required />
						<ErrorMessage name="birthdate">
							{(message) => {
								return <p className="errorMessage">{message}</p>;
							}}
						</ErrorMessage>
					</label>
					<Field
						type="text"
						name="known_as"
						id="known_as"
						placeholder="You are known as ?"
						autoComplete="off"
						required
					/>
					<ErrorMessage name="known_as">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<Field as="textarea" min="10" max="300" name="about" id="about" placeholder="Write about you"></Field>
					<ErrorMessage name="about">
						{(message) => {
							return <p className="errorMessage">{message}</p>;
						}}
					</ErrorMessage>
					<input type="submit" id="submit" value={actionName} />
				</Form>
			</Formik>
		</div>
	);
}

SignForm.propTypes = {
	actionName: PropTypes.string.isRequired,
	handleFormSubmit: PropTypes.func.isRequired,
};
