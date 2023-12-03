import { NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { TfiLayoutSlider } from 'react-icons/tfi';
import ROUTES from '../../routes/routes';
import './NavBar.scss';

export default function NavBar() {
	return (
		<div className="NavBar">
			<ul>
				<li className="NavBar-homeLink">
					<NavLink to={ROUTES.HOME}>
						<FcHome />
					</NavLink>
				</li>
				<li className="NavBar-sliderLink">
					<NavLink to={ROUTES.SLIDER} title="slider">
						<TfiLayoutSlider />
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
