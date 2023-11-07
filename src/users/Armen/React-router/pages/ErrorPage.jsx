import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routes';

export default function ErrorPage() {
	const navigate = useNavigate();
	const gohome = () => {
		// navigate(ROUTES.HOME)
		navigate({ pathname: ROUTES.HOME });
	};

	return (
		<div className="ErrorPage">
			<h2>404 | page not found</h2>
			<Link to={ROUTES.HOME}>go home</Link>
			<button onClick={gohome}>go back</button>
		</div>
	);
}
