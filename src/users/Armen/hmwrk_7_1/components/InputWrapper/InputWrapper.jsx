import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
import './InputWrapper.scss';

const validationSchema = object({
	todoInput: string().required("You didn't write anything!"),
});

export default function InputWrapper({ handleSubmit }) {
	const initialValues = {
		todoInput: '',
	};

	return (
		<div className="InputWrapper">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validateOnChange={true}
				validateOnBlur={true}
				validationSchema={validationSchema}
			>
				{(formik) => {
					return (
						<Form className="InputWrapper-form">
							<Field type="text" name="todoInput" id="todoInput" placeholder="Your plans?" autoComplete="off" />
							<div id="inputLogo">
								<RiArrowRightDoubleFill />
							</div>
							<ErrorMessage name="todoInput" id="errorMessage" component={'p'} />
							<button id="submitForm" type="submit">
								Add Todo
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

InputWrapper.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};
