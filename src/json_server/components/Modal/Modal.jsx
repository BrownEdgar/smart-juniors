import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

export default function Modal({ children, toggleModal, title }) {
	const devRef = useRef(null);
	useEffect(() => {
		const handleClick = (e) => {
			if (e.target === devRef?.current) {
				toggleModal();
			}
		};
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="Modal" ref={devRef}>
			<div className="Modal-content">
				<h2>Edit {title}</h2>
				{children}
			</div>
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.object,
	toggleModal: PropTypes.func.isRequired,
	title: PropTypes.string,
};
