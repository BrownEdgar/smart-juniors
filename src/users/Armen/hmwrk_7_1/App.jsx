import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { FcTodoList } from 'react-icons/fc';

import { GET_TODOS, ALL_DONE, ADD_TODO, TODO_DONE, REMOVE_BY_ID, REMOVE_VISUALLY } from './actionTypes';
import reducer, { initialValue } from './reducer';
import InputWrapper from './components/InputWrapper/InputWrapper';
import TodoList from './components/TodoList/TodoList';
import ControlPanel from './components/ControlPanel/ControlPanel';

import './App.scss';

export default function App() {
	const [data, dispatch] = useReducer(reducer, initialValue);

	const handleSubmit = (values, action) => {
		dispatch({ type: ADD_TODO, payload: { newTodo: values.todoInput } });

		action.resetForm();
	};

	const handleCompleteAllClick = () => {
		dispatch({ type: ALL_DONE });
	};

	const handleCompleteClick = (id) => {
		dispatch({ type: TODO_DONE, payload: { todoId: id } });
	};

	const handleRemoveClick = (id) => {
		dispatch({ type: REMOVE_VISUALLY, payload: { todoId: id } });
		setTimeout(() => {
			dispatch({ type: REMOVE_BY_ID, payload: { todoId: id } });
		}, 1500);
	};

	useEffect(() => {
		axios
			.get('https://dummyjson.com/todos', {
				params: {
					limit: 10,
				},
			})
			.then((res) => {
				console.log(res.data);
				dispatch({ type: GET_TODOS, payload: { todos: res.data.todos } });
			})
			.catch((err) => console.log('error:', err));
	}, []);

	return (
		<div className="App">
			<h1 className="App-title">
				<FcTodoList />
				ToDos
			</h1>
			<InputWrapper handleSubmit={handleSubmit} />
			<ControlPanel data={data} handleCompleteAllClick={handleCompleteAllClick} />
			<TodoList data={data} handleCompleteClick={handleCompleteClick} handleRemoveClick={handleRemoveClick} />
		</div>
	);
}
