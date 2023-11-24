import { useDispatch, useSelector } from 'react-redux';
import { update, shuffle, sorter } from '../../features/randomizer/randomizerSlice';
import './Randomizer.scss';

export default function Randomizer() {
	const randomNumbers = useSelector((state) => state.randomizer.numbers);
	const dispatch = useDispatch();

	return (
		<section className="Randomizer">
			<h2 className="pageTitle">Randomizer</h2>
			<div className="Randomizer-container">
				<div className="Randomizer-numbers">
					{randomNumbers.length > 0 ? (
						randomNumbers.map((number, index) => {
							return (
								<p
									className="Randomizer-number"
									style={{
										color: `hsl(${Math.trunc(Math.random() * 360)}, 100%, 66%)`,
										animationDelay: `${index * 0.02}s`,
									}}
									key={`${index}-${number}`}
								>
									{number}
								</p>
							);
						})
					) : (
						<h3>NO NUMBERS</h3>
					)}
				</div>
				<div className="Randomizer-btnSection">
					<button onClick={() => dispatch(update())}>Update</button>
					<button onClick={() => dispatch(shuffle())}>Shuffle</button>
					<button onClick={() => dispatch(sorter())}>Sort</button>
				</div>
			</div>
		</section>
	);
}
