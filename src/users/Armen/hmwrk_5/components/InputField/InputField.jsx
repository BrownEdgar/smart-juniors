import './InputField.scss';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';

export default function InputField({ inputType, inputName, inputText }) {
	const [fieldFocused, setFieldFocused] = useState({ status: false, id: '', val: '' });

	const toggleFieldFocus = (e) => {
		setFieldFocused({ status: !fieldFocused.status, id: inputName, val: e.target.value });
		console.log(e.target.value.length);
	};

	return (
		<div className="InputField">
			<p
				className={classNames('field-label', {
					[`field-label${'_moveUp'}`]:
						fieldFocused.val.length > 0 || (fieldFocused.status && fieldFocused.id === inputName),
				})}
			>
				{inputText}
			</p>
			<Field type={inputType} name={inputName} id={inputName} onFocus={toggleFieldFocus} onBlur={toggleFieldFocus} />
			<div className="errorOutput">
				<ErrorMessage name={inputName} component={'p'} />
			</div>
		</div>
	);
}

InputField.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputText: PropTypes.string.isRequired,
};
