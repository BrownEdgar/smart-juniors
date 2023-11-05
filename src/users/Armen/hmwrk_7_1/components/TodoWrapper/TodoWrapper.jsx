import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';
import './TodoWrapper.scss';

export default function TodoWrapper({ todo, handleCompleteClick, handleRemoveClick }) {
	return (
		<div
			className={classNames('TodoWrapper', {
				TodoWrapper_removed: todo.removed,
			})}
		>
			<div
				className={classNames('TodoWrapper-todoBox', {
					'TodoWrapper-todoBox_removed': todo.removed,
				})}
			>
				<button className="TodoWrapper-completeTodo" onClick={() => handleCompleteClick(todo.id)}>
					<BiSolidRightArrow />
				</button>
				<p className="TodoWrapper-todoUserId">{todo.userId}</p>
				<p className="TodoWrapper-content">{todo.todo}</p>
				{todo.completed ? (
					<div className="TodoWrapper-completed" style={{ width: `${todo.todo.length * 11}px` }}></div>
				) : (
					''
				)}
				<button className="TodoWrapper-removeTodo" onClick={() => handleRemoveClick(todo.id)}>
					<FaDeleteLeft />
				</button>
			</div>
		</div>
	);
}

TodoWrapper.propTypes = {
	todo: PropTypes.exact({
		id: PropTypes.number.isRequired,
		todo: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		userId: PropTypes.number.isRequired,
		removed: PropTypes.bool,
	}),
	handleCompleteClick: PropTypes.func.isRequired,
	handleRemoveClick: PropTypes.func.isRequired,
};
