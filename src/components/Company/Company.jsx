import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toggleOpen } from '../../features/groups/groupsSlice';
import './Company.scss';

export default function Company({ group, index }) {
	const dispatch = useDispatch();

	const handleClick = () => {
		// let target = e.target;
		// if (e.target.className === 'Company-name') {
		// 	target = e.target.parentElement;
		// }
		dispatch(toggleOpen(index));
	};

	return (
		<div className="Company">
			<div className="Company-backContent content">
				<div className="Company-address Company-contact">
					<p className="label">Address:</p>
					<p className="value">{group.contact.address}</p>
				</div>
				<div className="Company-phone Company-contact">
					<p className="label">Phone:</p>
					<p className="value">{group.contact.phone}</p>
				</div>
				<div className="Company-email Company-contact">
					<p className="label">Email:</p>
					<p className="value">{group.contact.email}</p>
				</div>
			</div>
			<div
				className={classNames('Company-content content', {
					'Company-content_opened': group.opened,
				})}
				onClick={handleClick}
			>
				<h2 className="Company-name">{group.name}</h2>
			</div>
		</div>
	);
}

Company.propTypes = {
	group: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};
