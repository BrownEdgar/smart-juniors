import './StatusBar.scss';
import PropTypes from 'prop-types';

export default function StatusBar({ count, finishedTodos }) {
	return (
		<div className="StatusBar">
			{finishedTodos}/{count} completed
		</div>
	);
}

StatusBar.propTypes = {
	count: PropTypes.number.isRequired,
	finishedTodos: PropTypes.number.isRequired,
};
