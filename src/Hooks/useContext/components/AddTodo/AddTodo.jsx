import { useContext } from 'react';
import { TodosContext } from '../../App';
import { MdAddTask } from 'react-icons/md';
import './AddTodo.scss';

export default function AddTodo() {
	const { addinStorage, updateState } = useContext(TodosContext);

	const handleSubmit = ({ preventDefault, target }) => {
		preventDefault();
		addinStorage(target.addField.value);
		target.addField.value = '';
		target.addField.focus();
		updateState();
	};

	return (
		<div className="AddTodo">
			<form className="AddTodo-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					id="addField"
					placeholder="Write something you want to do"
					autoComplete="off"
					required
				/>
				<button name="submit" id="submit" title="add task">
					<MdAddTask />
				</button>
			</form>
		</div>
	);
}
