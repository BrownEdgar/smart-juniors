import PropTypes from 'prop-types';
import { useContext } from 'react';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { TodosContext } from '../../App';
import './Todo.scss';

export default function Todo({ todo, index }) {
	const { removeFromStorage, updateState } = useContext(TodosContext);

	const handleClick = (index) => {
		removeFromStorage(index);
		updateState();
	};

	return (
		<div key={todo.id} className="Todo">
			<p className="Todo-body">{todo.body}</p>
			<button className="Todo-deleteBtn" onClick={() => handleClick(index)}>
				<RiDeleteBin4Fill />
			</button>
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};
