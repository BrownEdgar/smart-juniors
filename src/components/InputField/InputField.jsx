import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './InputField.scss';

export default function InputField({ inputType, inputName, inputId, inputPlaceholder }) {
	return (
		<div className="InputField">
			<Field type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} autoComplete="off" />
			<ErrorMessage name={inputName}>
				{(message) => {
					return <p className="AddGroup-errorMessage">{message}</p>;
				}}
			</ErrorMessage>
		</div>
	);
}

InputField.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputId: PropTypes.string.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
};
