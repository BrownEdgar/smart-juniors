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

	const updateState = () => {
		setTodoList(JSON.parse(localStorage.getItem(TODO_LIST) || '[]'));
	};

	const updateStorage = (updatedList) => {
		localStorage.setItem(TODO_LIST, JSON.stringify(updatedList));
	};

	const getFromStorage = () => {
		return JSON.parse(localStorage.getItem(TODO_LIST) || '[]');
	};

	const addinStorage = (body) => {
		const currentData = getFromStorage();
		updateStorage([...currentData, { id: Date.now(), body }]);
	};

	const removeFromStorage = (index) => {
		const currentData = getFromStorage();
		updateStorage(currentData.toSpliced(index, 1));
	};

	return (
		<div className="App">
			<TodosContext.Provider value={{ todoList, updateState, addinStorage, removeFromStorage }}>
				<Container />
			</TodosContext.Provider>
		</div>
	);
}
