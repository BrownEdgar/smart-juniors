import { useState } from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ROUTES from './routes/routes';
import Layouts from './components/Layouts/Layouts';
import { Register, Users } from './pages';
import './App.scss';

export default function App() {
	const [users, setUsers] = useState([]);

	const removeUser = (index) => {
		setUsers(users.toSpliced(index, 1));
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.REGISTER} element={<Layouts />}>
				<Route index element={<Register setUsers={setUsers} />} />
				<Route path={ROUTES.USERS} element={<Users users={users} removeUser={removeUser} />} />
				<Route path="*" element={<Navigate to={ROUTES.REGISTER} />} />
			</Route>
		)
	);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
