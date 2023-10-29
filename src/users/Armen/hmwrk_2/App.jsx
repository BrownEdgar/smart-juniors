import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import UsersContent from './Components/UsersContent/UsersContent';
import Stand from './Components/Stand/Stand';

export default function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				console.log(res);
				return setUsers(res.data);
			})
			.catch((err) => console.log('error:', err));
	}, []);

	return (
		<div className="App">
			<Stand />
			<UsersContent users={users} />
		</div>
	);
}
