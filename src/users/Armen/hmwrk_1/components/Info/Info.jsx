import './Info.scss';

export default function Info({ people, setPeople, shake }) {
	const handleMouseEnter = (e) => e.target.classList.add('fa-beat-fade');
	const handleMouseLeave = (e) => e.target.classList.remove('fa-beat-fade');
	const handleClick = (currentId) => {
		setPeople((prevPeople) => {
			return prevPeople.map((person) => {
				return person.id === currentId ? { ...person, removed: true } : person;
			});
		});
		setTimeout(() => {
			setPeople((prevPeople) => prevPeople.filter((person) => person.id !== currentId));
		}, 700);
	};

	return (
		<div className="Info">
			{people.map((person, index) => {
				return (
					<div
						style={{ '--index': index }}
						key={person.id}
						className={`Info-person ${shake ? 'Info-person_shake' : ''} ${person.removed ? 'Info-person_removed' : ''}`}
					>
						<h2 className="Info-id">{person.id}</h2>
						<i
							className={`Info-remove fa-solid fa-trash-can`}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={() => {
								handleClick(person.id);
							}}
						></i>
						<div className="Info-nameWrapper">
							<h1 className="Info-name">{person.name}</h1>
						</div>
						<div className={`Info-status ${person.isActive ? 'Info-status_active' : ''}`}></div>
						<h3 className="Info-year">{person.year}</h3>
					</div>
				);
			})}
		</div>
	);
}
