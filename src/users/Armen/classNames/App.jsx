import { useState } from 'react';
import classNames from 'classnames';
import Child from './Child';

export default function App() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="App">
			<h1 className={classNames({ active: isActive })}>Lorem ipsum dolor sit.</h1>
			<button className="App-toggle" onClick={() => setIsActive(!isActive)}>
				Activate
			</button>
			<Child title="specific button" variant="default" />
		</div>
	);
}
