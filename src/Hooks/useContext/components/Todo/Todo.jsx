import PropTypes from 'prop-types';
import { useContext } from 'react';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { TodosContext } from '../../App';
import './Todo.scss';

export default function Todo({ todo, index }) {
	const { removeFromStorage, update } = useContext(TodosContext);

	const handleSubmit = (index) => {
		removeFromStorage(index);
		update();
	};

	return (
		<div key={todo.id} className="Todo">
			<p className="Todo-body">{todo.body}</p>
			<button className="Todo-deleteBtn" onClick={() => handleSubmit(index)}>
				<RiDeleteBin4Fill />
			</button>
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};
