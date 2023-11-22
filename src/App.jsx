import { useDispatch, useSelector } from 'react-redux';
import { addCount } from './features/count/countSlice';

export default function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(addCount());
	};

	return (
		<div>
			<h1>Hello react in git {state.count}</h1>
			<button onClick={handleClick}>Add count</button>
		</div>
	);
}
