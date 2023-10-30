import './TodoList.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';

export default function TodoList({ todos, removeTodo, markTodo }) {
	const [hoverAnimation, setHoverAnimation] = useState({ status: false, index: 0 });

	const toggleAnimation = (index) => setHoverAnimation({ status: !hoverAnimation.status, index: index });

	return (
		<div className="TodoList">
			{todos.map((todo, index) => {
				return (
					<div className={classNames('TodoList-todoLine', { marked: todo.finished })} key={todo.id}>
						<label>
							<p onClick={() => markTodo(index)} className={classNames(null, { marked: todo.finished })}>
								{todo.value}
							</p>
							<input type="checkbox" id="todoInput" />
						</label>
						<div className="TodoList-control">
							<i
								className={classNames('fa-regular fa-trash-can', {
									'fa-shake': hoverAnimation.status && index === hoverAnimation.index,
								})}
								onClick={() => removeTodo(index)}
								onMouseEnter={() => toggleAnimation(index)}
								onMouseLeave={() => toggleAnimation(index)}
							></i>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				);
			})}
		</div>
	);
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			value: PropTypes.string.isRequired,
			finished: PropTypes.bool.isRequired,
		})
	),
	removeTodo: PropTypes.func.isRequired,
	markTodo: PropTypes.func.isRequired,
};
