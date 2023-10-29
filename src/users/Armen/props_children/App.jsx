import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import './App.scss';
import Modal from './Modal';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [randomColor, setRandomColor] = useState('#00ff00');
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	useEffect(() => {
		axios({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			url: 'todos',
			params: {
				_limit: 10,
			},
		})
			.then((res) => setTodos(res.data))
			.catch((err) => console.log('error: ', err));
	}, []);

	useEffect(() => {
		setRandomColor(`#${Math.random().toString(16).slice(2, 8)}`);
	}, []);

	const toggleModal = () => setIsOpen(!isOpen);

	return (
		<div className="App">
			{isOpen ? (
				<Modal toggleModal={toggleModal}>
					<h2>Are you sure?</h2>
					<div className="Modal-control">
						<button
							onClick={() => {
								setTodos(todos.toSpliced(currentIndex, 1));
								toggleModal();
							}}
						>
							Delete
						</button>
						<button onClick={() => toggleModal()}>Cancel</button>
					</div>
				</Modal>
			) : null}
			<div className="App-todos">
				{todos.map((todo, index) => {
					return (
						<Fragment key={todo.id}>
							<div style={{ backgroundColor: randomColor }}>
								<button
									onClick={() => {
										toggleModal();
										setCurrentIndex(index);
									}}
								>
									X
								</button>
								<p className="App-id">{todo.id}</p>
								<p className="App-title">{todo.title}</p>
							</div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
