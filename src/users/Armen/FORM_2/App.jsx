import './App.scss';
// import { IoAirplane } from 'react-icons/io5';
// import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { number, object, string } from 'yup';

const validationSchema = object({
	email: string().email().required(),
	password: string()
		.min(8, 'կարճա')
		.max(18, 'ուզբագոյսյսա')
		.matches(/^[A-Z]/)
		.required('դատարկ մի թող'),
	age: number().min(18, 'դուք անչափահաս եք, գնացեք դաս արեք').max(80, 'գործ չունես').required(),
});

export default function App() {
	const initialValues = {
		email: '',
		password: '',
		age: '',
	};

	const handleSubmit = (values, { resetForm }) => {
		console.log(values);
		resetForm();
	};

	return (
		<div className="App">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validateOnChange={false}
				validateOnBlur={true}
				validationSchema={validationSchema}
			>
				{(formik) => {
					// console.log(formik);

					return (
						<Form>
							<Field type="email" name="email" placeholder="email" />
							<ErrorMessage name="email" component={'p'} />
							<Field type="password" name="password" placeholder="password" />
							<ErrorMessage name="password" component={'p'} />
							<Field type="number" name="age" placeholder="age" />
							<ErrorMessage name="age" component={'p'} />
							<input type="submit" value="add user" />
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
