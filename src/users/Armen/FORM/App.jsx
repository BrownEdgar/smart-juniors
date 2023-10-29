import './App.scss';
import { useState } from 'react';

export default function App() {
	const [users, setUsers] = useState([]);
	const [hasError, setHasError] = useState({
		message: '',
		status: false,
	});

	const [message, setMessage] = useState('Sebastian');

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = e.target;
		const regexp = new RegExp(username.value, 'i');
		const userExist = users.some((user) => user.username.match(regexp));
		if (!userExist) {
			const user = {
				id: Date.now(),
				username: username.value,
				password: password.value,
			};
			setUsers([...users, user]);
			setHasError({
				status: false,
				message: '',
			});
		} else {
			setHasError({
				status: true,
				message: `'${username.value}' username exists!`,
			});
		}
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				{hasError.status && <p className="error">{hasError.message}</p>}
				<label htmlFor="username"></label>
				<input type="text" id="username" required />
				<input type="password" id="password" required />
				<input type="submit" value="add user" />
			</form>

			<h1>{message}</h1>
			<form>
				<input type="text" placeholder="message" value={message} onChange={handleChange} />
			</form>
		</div>
	);
}
