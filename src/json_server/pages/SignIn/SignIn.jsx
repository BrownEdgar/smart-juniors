import { useEffect, useState } from 'react';
import './SignIn.scss';
import axios from 'axios';

export default function SignIn() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('http://localhost:3000/users')
			.then((res) => setUsers(res.data))
			.catch((err) => console.log('Error:', err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const { username, password } = e.target;

		const userExists = users.find((user) => user.username === username && user.password === password);
		console.log(userExists);

		axios(`http://localhost:3000/users/${userExists.id}`)
			.then(() => console.log('welcome'))
			.catch((err) => console.log('Try again!', err));
	};

	return (
		<div className="SignIn">
			<h2>Sign in</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="username" id="username" placeholder="username" autoComplete="off" required />
				<input type="password" name="password" id="password" placeholder="password" autoComplete="off" required />
				<input type="submit" id="submit" value="Sign in" />
			</form>
		</div>
	);
}
