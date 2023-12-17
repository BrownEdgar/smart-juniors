import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { check } from '../../features/todos/todosSlice';
import './TodoList.scss';

export default function TodoList() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const checkTodo = (id) => {
		dispatch(check(id));
	};

	console.log('in todoList:', todos);

	return (
		<ul className="TodoList">
			{todos.map((todo) => (
				<li key={todo.id} onDoubleClick={() => checkTodo(todo.id)}>
					<p>{todo.body}</p>
				</li>
			))}
		</ul>
	);
}
