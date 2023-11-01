import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import './App.scss';
import InputField from './components/InputField/InputField';
import { useState } from 'react';

const validationSchema = object({
	firstName: string()
		.min(4, 'Имя не должно быть короче 4 символов')
		.max(20, 'Имя не должно быть длиннее 20 символов')
		.matches(/^[A-Z]/, 'Первая буква должна быть заглавной!')
		.required('Вы не ввели свое имя!'),
	lastName: string()
		.min(4, 'Имя не должно быть короче 4 символов')
		.max(20, 'Имя не должно быть длиннее 20 символов')
		.matches(/^[A-Z]/, 'Первая буква должна быть заглавной!')
		.required('Вы не ввели свою фамилию!'),
	email: string().email('Неверный формат для электронной почты').required('Вы не ввели свой адрес электронной почты!'),
	website: string().url('Неверный формат для ссылки'),
	message: string()
		.min(10, 'Ваше сообщение не должно быть короче 10 символов')
		.max(200, 'Ваше сообщение не должно быть длиннее 200 символов')
		.required(),
});

export default function App() {
	const [userData, setUserData] = useState([]);

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		website: '',
		message: '',
	};

	const handleSubmit = (values, { resetForm }) => {
		const exist = userData.some((user) => user.email === values.email);
		if (!exist) {
			setUserData([...userData, values]);
			resetForm();
		}
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
							<h2 className="formTitle">Responsive Contact us Form</h2>
							<InputField inputType="text" inputName="firstName" inputText="First Name" />
							<InputField inputType="text" inputName="lastName" inputText="Last Name" />
							<InputField inputType="email" inputName="email" inputText="Email Address" />
							<InputField inputType="url" inputName="website" inputText="Website Name" />
							<InputField inputType="text" inputName="message" inputText="Write your message" />
							<input type="submit" id="submit" value="SUBMIT" />
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
