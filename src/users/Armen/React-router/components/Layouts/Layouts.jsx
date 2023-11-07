import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layouts() {
	return (
		<div className="Layouts">
			<Navbar />
			<Outlet />
			<footer>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro sed asperiores sint! Architecto, illo
					unde tenetur quas assumenda alias!
				</p>
			</footer>
		</div>
	);
}
