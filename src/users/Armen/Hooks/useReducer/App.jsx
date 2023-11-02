import './App.scss';
import { useReducer, useEffect } from 'react';
import reducer, { initialValue } from './reducer';
import { FILL_ARRAY, SUM_OF_ARRAY } from './actionTypes';

export default function App() {
	const [count, dispatch] = useReducer(reducer, initialValue);

	useEffect(() => {
		dispatch({ type: FILL_ARRAY, payload: { quantity: 12 } });
	}, []);

	return (
		<div className="App">
			<h3>Count: {JSON.stringify(count)}</h3>
			<button onClick={() => dispatch({ type: SUM_OF_ARRAY })}>sum</button>
		</div>
	);
}
