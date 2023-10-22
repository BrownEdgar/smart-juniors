import { useState } from 'react';
import './Control.scss';

export default function Control({ setPeople, setShake }) {
	const [activeBtnText, setActiveBtnText] = useState('Activate');
	const [sortBtnText, setSortBtnText] = useState('Sort by year');

	const animate = () => {
		setShake(true);
		setTimeout(() => {
			setShake(false);
		}, 100);
	};

	const handleSortClick = () => {
		if (sortBtnText === 'Sort by year') {
			setSortBtnText('Sort by ID');
			setPeople((prevPeople) => prevPeople.toSorted((a, b) => a.year - b.year));
		} else {
			setSortBtnText('Sort by year');
			setPeople((prevPeople) => prevPeople.toSorted((a, b) => a.id - b.id));
		}
		animate();
	};

	const handleActivateClick = () => {
		setActiveBtnText((prevActiveBtnText) => {
			return prevActiveBtnText === 'Activate' ? 'Deactivate' : 'Activate';
		});
		setPeople((prevPeople) => {
			return prevPeople.map((person) => {
				return { ...person, isActive: !person.isActive };
			});
		});
	};

	return (
		<div className="Control">
			<button className="Control-btn Control-sortBtn" onClick={handleSortClick}>
				{sortBtnText}
			</button>
			<button className="Control-btn Control-activeBtn" onClick={handleActivateClick}>
				{activeBtnText}
			</button>
		</div>
	);
}
