import { useState } from 'react';
import Control from '../Control/Control';
import Info from '../Info/Info';
import './Content.scss';

export default function Content({ people, setPeople }) {
	const [shake, setShake] = useState(false);

	return (
		<div className="Content">
			<Info people={people} setPeople={setPeople} shake={shake} />
			<Control setPeople={setPeople} setShake={setShake} />
		</div>
	);
}
