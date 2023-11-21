import { createContext, useEffect, useState } from 'react';
import Container from './components/Container/Container';
import { TODO_LIST } from './storage';
import './App.scss';

export const TodosContext = createContext('');

export default function App() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		const storageData = JSON.parse(localStorage.getItem(TODO_LIST));
		setTodoList(storageData || []);
	}, []);

	const update = () => {
		setTodoList(JSON.parse(localStorage.getItem(TODO_LIST) || '[]'));
	};

	const addinStorage = (body) => {
		const currentData = JSON.parse(localStorage.getItem(TODO_LIST) || '[]');
		const updatedList = [...currentData, { id: Date.now(), body }];
		localStorage.setItem(TODO_LIST, JSON.stringify(updatedList));
	};

	const removeFromStorage = (index) => {
		const currentData = JSON.parse(localStorage.getItem(TODO_LIST));
		const updatedList = currentData.toSpliced(index, 1);
		localStorage.setItem(TODO_LIST, JSON.stringify(updatedList));
	};

	return (
		<div className="App">
			<TodosContext.Provider value={{ todoList, update, addinStorage, removeFromStorage }}>
				<Container />
			</TodosContext.Provider>
		</div>
	);
}
