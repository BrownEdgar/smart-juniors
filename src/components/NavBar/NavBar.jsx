import { NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { TfiLayoutSlider } from 'react-icons/tfi';
import { FaPage4 } from 'react-icons/fa';
import { FcTodoList } from 'react-icons/fc';
import ROUTES from '../../routes/routes';
import './NavBar.scss';

export default function NavBar() {
	return (
		<div className="NavBar">
			<ul className="NavBar-list">
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
				<li className="NavBar-sliderLink">
					<NavLink to={ROUTES.PAGINATION} title="pagination">
						<FaPage4 />
					</NavLink>
				</li>
				<li className="NavBar-sliderLink">
					<NavLink to={ROUTES.TODOS} title="todo list">
						<FcTodoList />
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
