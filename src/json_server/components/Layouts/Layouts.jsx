import { Outlet } from 'react-router';
import { NavBar } from '../../components';
import './Layouts.scss';

export default function Layouts() {
	return (
		<div className="Layouts">
			<NavBar />
			<Outlet />
		</div>
	);
}
