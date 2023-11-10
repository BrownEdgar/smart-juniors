import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import './SelectOption.scss';

export default function SelectOption({ inputName, inputLabel, options }) {
	return (
		<div className="SelectOption">
			<p className="SelectOption-label">{inputLabel}</p>
			<Field as="select" name={inputName} required>
				<option value="" defaultChecked>
					-
				</option>
				{options.map((option) => {
					return (
						<option value={option} key={option}>
							{option}
						</option>
					);
				})}
			</Field>
			<ErrorMessage name={inputName}>
				{(message) => {
					return (
						<p className="SelectOption-errorMessage" style={{ width: `${message.length * 12}px` }}>
							{message}
						</p>
					);
				}}
			</ErrorMessage>
		</div>
	);
}

SelectOption.propTypes = {
	inputName: PropTypes.string.isRequired,
	inputLabel: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
};
