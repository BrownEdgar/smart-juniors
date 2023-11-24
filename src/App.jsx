import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layouts } from './components';
import { Home, Counter, Randomizer, Groups, AddGroup } from './pages';
import ROUTES from './routes/routes';
import './App.scss';

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.HOME} element={<Layouts />}>
				<Route index element={<Home />} />
				<Route path={ROUTES.COUNTER} element={<Counter />} />
				<Route path={ROUTES.RANDOMIZER} element={<Randomizer />} />
				<Route path={ROUTES.GROUPS} element={<Groups />} />
				<Route path={ROUTES.ADD_GROUP} element={<AddGroup />} />
				<Route path="*" element={<Home />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
