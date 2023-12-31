import { useState } from 'react';
import { Home, About, Blog, ErrorPage, Posts, Post } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// import ErrorPage from './pages/ErrorPage';
import ROUTES from './routes/routes';
import Layouts from './components/Layouts/Layouts';
import './App.scss';
import { postLoader } from './pages/Posts';

export default function App() {
	const [value, setValue] = useState('random text');
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.HOME} element={<Layouts />}>
				<Route index element={<Home />} />
				<Route path={ROUTES.ABOUT} element={<About />} />
				<Route path={ROUTES.BLOG} element={<Blog value={value} />} />
				<Route path={ROUTES.POSTS} element={<Posts />} loader={postLoader} />
				<Route path={ROUTES.POST} element={<Post />} />
				<Route path="*" element={<ErrorPage />} />
				{/* <Route path="*" element={<Navigate to={ROUTES.HOME} />} /> */}
			</Route>
		)
	);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
