import { useMemo, useState } from 'react';
import Child from './Child';

export default function App() {
	const [count, setCount] = useState(0);

	const child = useMemo(() => <Child />, []);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Add count</button>
			{child}
		</div>
	);
}
