import { useContext } from 'react';
import { HiEmojiSad } from 'react-icons/hi';
import { TodosContext } from '../../App';
import Todo from '../Todo/Todo';
import './Todos.scss';

export default function Todos() {
	const { todoList } = useContext(TodosContext);

	return (
		<div className="Todos">
			{todoList.length > 0 ? (
				todoList.map((todo, index) => {
					return <Todo todo={todo} index={index} key={todo.id} />;
				})
			) : (
				<div className="Todos-noData">
					<h2>nothing to do</h2>
					<h2>
						<HiEmojiSad />
					</h2>
				</div>
			)}
		</div>
	);
}
