import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { add } from '../../features/todos/todosSlice';
import './TodoInput.scss';

export default function TodoInput() {
	const dispatch = useDispatch();

	const addTodo = (e) => {
		e.preventDefault();
		console.log(e.target.newTodo.value);

		if (e.target.newTodo.value === '') return;
		dispatch(add(e.target.newTodo.value));
	};

	return (
		<form className="TodoInput" onSubmit={addTodo}>
			<input className="newTodo" id="newTodo" type="text" placeholder="What needs to be done?" />
			<MdAdd role="button" type="submit" />
		</form>
	);
}
