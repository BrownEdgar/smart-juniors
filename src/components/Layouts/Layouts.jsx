import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Layouts.scss';

export default function Layouts() {
	return (
		<div className="Layouts">
			<NavBar />
			<Outlet />
		</div>
	);
}
