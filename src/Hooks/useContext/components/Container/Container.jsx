import AddTodo from '../AddTodo/AddTodo';
import Todos from '../Todos/Todos';
import './Container.scss';

export default function Container() {
	return (
		<div className="Container">
			<h1>
				<p>T</p>
				<p>O</p>
				<p>D</p>
				<p>O</p>
				<p>S</p>
			</h1>
			<AddTodo />
			<Todos />
		</div>
	);
}
