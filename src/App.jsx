import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import { Home, SliderPage } from './pages';
import ROUTES from './routes/routes';
import './App.scss';

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.HOME} element={<Layouts />}>
				<Route index element={<Home />} />
				<Route path={ROUTES.SLIDER} element={<SliderPage />} />
				<Route path="*" element={<Home />} />
			</Route>
		)
	);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
