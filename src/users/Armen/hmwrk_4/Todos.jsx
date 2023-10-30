import './Todos.scss';
import Add from './components/Add/Add';
import StatusBar from './components/StatusBar/StatusBar';
import TodoList from './components/TodoList/TodoLIst';
import { useState, useEffect } from 'react';

export default function Todos() {
	const [todos, setTodos] = useState([
		{ id: 1, value: 'eat()', finished: false },
		{ id: 2, value: 'sleep()', finished: false },
		{ id: 3, value: 'code()', finished: false },
		{ id: 4, value: 'repeat()', finished: false },
	]);

	const [finishedTodos, setFinishedTodos] = useState(0);

	useEffect(() => {
		setFinishedTodos(todos.filter((todo) => todo.finished).length);
	}, [todos]);

	const removeTodo = (index) => {
		setTodos(todos.toSpliced(index, 1));
	};

	const markTodo = (i) => {
		const currenTodo = todos[i];
		setTodos(todos.toSpliced(i, 1, { ...currenTodo, finished: !currenTodo.finished }));
	};

	const addTodo = (target) => {
		const todoIndex = todos.findIndex((todo) => todo.value.toLowerCase() === target.value.toLowerCase());

		if (target.value.length !== 0) {
			if (!~todoIndex) {
				setTodos([...todos, { id: Date.now(), value: target.value, finished: false }]);
			} else if (~todoIndex && todos[todoIndex].finished) {
				setTodos(
					todos.map((todo, index) => {
						return todoIndex === index ? { id: todo.id, value: todo.value, finished: false } : todo;
					})
				);
			}
		}
	};

	return (
		<div className="Todos">
			<h1 className="Todos-title">
				<span>T</span>
				<span>O</span>
				<span>D</span>
				<span>O</span>
				<span>S</span>
			</h1>
			<Add addTodo={addTodo} />
			<TodoList todos={todos} removeTodo={removeTodo} markTodo={markTodo} />
			<StatusBar count={todos.length} finishedTodos={finishedTodos} />
		</div>
	);
}
