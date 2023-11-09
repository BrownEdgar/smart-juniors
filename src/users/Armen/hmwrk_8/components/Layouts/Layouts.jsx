import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import AnimatedBlocks from '../AnimatedBlocks/AnimatedBlocks';
import './Layouts.scss';

export default function Layouts() {
	return (
		<div className="Layouts">
			<AnimatedBlocks />
			<Menu />
			<Outlet />
		</div>
	);
}
