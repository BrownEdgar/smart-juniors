import './ControlPanel.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function ControlPanel({ data, handleCompleteAllClick }) {
	const [completedTodoCount, setCompletedTodoCount] = useState(0);

	useEffect(() => {
		setCompletedTodoCount(data.filter((todo) => todo.completed).length);
	}, [data]);

	return (
		<div className="ControlPanel">
			<button className="ControlPanel-completeAll" onClick={handleCompleteAllClick}>
				Complete all
			</button>
			<div
				className="ControlPanel-progressBar"
				style={{
					backgroundPositionX: `${(completedTodoCount / data.length) * 300 - 300}px`,
					filter: `hue-rotate(${(completedTodoCount / data.length) * 100}deg) brightness(${
						(completedTodoCount / data.length) * 140 + 100
					}%)`,
				}}
			>
				<p className="ControlPanel-progressInfo">
					{completedTodoCount}/{data.length} completed
				</p>
			</div>
		</div>
	);
}

ControlPanel.propTypes = {
	data: PropTypes.array.isRequired,
	handleCompleteAllClick: PropTypes.func.isRequired,
};
