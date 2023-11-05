import TodoWrapper from '../TodoWrapper/TodoWrapper';
import './TodoList.scss';
import PropTypes from 'prop-types';

export default function TodoList({ data, handleCompleteClick, handleRemoveClick }) {
	return (
		<div className="TodoList">
			{data.map((todo) => {
				return (
					<TodoWrapper
						todo={todo}
						handleCompleteClick={handleCompleteClick}
						handleRemoveClick={handleRemoveClick}
						key={todo.id}
					/>
				);
			})}
		</div>
	);
}

TodoList.propTypes = {
	data: PropTypes.array.isRequired,
	handleCompleteClick: PropTypes.func.isRequired,
	handleRemoveClick: PropTypes.func.isRequired,
};
