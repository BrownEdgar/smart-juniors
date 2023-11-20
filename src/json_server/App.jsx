import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ROUTES from './routes/routes';
import { Layouts } from './components';
import { HomePage, SignIn, SignUp, User, Users } from './pages';
import './App.scss';

export default function App() {
	const [users, setUsers] = useState([]);
	const [removedUserId, setRemovedUserId] = useState(null);
	const [editablePostId, setEditablePostId] = useState(null);

	useEffect(() => {
		axios('http://localhost:3000/users')
			.then((res) => setUsers(res.data))
			.catch((err) => console.log('Error:', err));

		console.log('ok');
	}, [removedUserId, users.length]);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.HOMEPAGE} element={<Layouts />}>
				<Route index element={<HomePage />} />
				<Route path={ROUTES.SIGNIN} element={<SignIn users={users} />} />
				<Route path={ROUTES.SIGNUP} element={<SignUp users={users} />} />
				<Route
					path={ROUTES.USERS}
					element={
						<Users
							users={users}
							setUsers={setUsers}
							setRemovedUserId={setRemovedUserId}
							editablePostId={editablePostId}
							setEditablePostId={setEditablePostId}
						/>
					}
				/>
				<Route path={ROUTES.USER} element={<User users={users} />} />
			</Route>
		)
	);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
