import './Modal.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Modal({ children, toggleModal }) {
	const handleClick = (e) => {
		if (e.target.classList.contains('Modal')) toggleModal();
	};

	useEffect(() => {
		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="Modal">
			<div className="Modal-content">{children}</div>
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.array.isRequired,
	toggleModal: PropTypes.func.isRequired,
};
