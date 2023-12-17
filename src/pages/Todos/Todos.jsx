import { TodoInput, TodoList } from '../../components';
import './Todos.scss';

export default function Todos() {
	return (
		<section className="Todos">
			<TodoInput />
			<TodoList />
		</section>
	);
}
