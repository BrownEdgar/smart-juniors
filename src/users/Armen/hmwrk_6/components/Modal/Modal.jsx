import './Modal.scss';
import PropTypes from 'prop-types';

export default function Modal({ children }) {
	return <div className="Modal">{children}</div>;
}

Modal.propTypes = {
	children: PropTypes.object.isRequired,
};
