import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './InputField.scss';

export default function InputField({ inputType, inputName, inputLabel }) {
	return (
		<div className="InputField">
			<Field type={inputType} name={inputName} id={inputName} autoComplete="off" />
			<div className="InputField-label">{inputLabel}</div>
			<ErrorMessage name={inputName}>
				{(message) => {
					return (
						<p className="InputField-errorMessage" style={{ width: `${message.length * 11}px` }}>
							{message}
						</p>
					);
				}}
			</ErrorMessage>
			<div className="InputField-light"></div>
		</div>
	);
}

InputField.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputLabel: PropTypes.string.isRequired,
};
