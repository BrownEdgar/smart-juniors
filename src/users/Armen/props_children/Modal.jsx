import './Modal.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Modal({ children, toggleModal, theme }) {
	const handleClick = (e) => {
		if (e.target.classList.contains('Modal')) {
			toggleModal();
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="Modal">
			<div
				className={classNames('Modal-content', {
					[`Modal-content_${theme}`]: theme.length > 0,
				})}
			>
				{children}
			</div>
		</div>
	);
}

Modal.defaultProps = {
	theme: 'light',
};

Modal.propTypes = {
	children: PropTypes.array.isRequired,
	toggleModal: PropTypes.func.isRequired,
	theme: PropTypes.string,
};
