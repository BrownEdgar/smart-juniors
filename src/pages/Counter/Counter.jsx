import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../features/counter/counterSlice';
import './Counter.scss';

export default function Counter() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<section className="Counter">
			<h2 className="pageTitle">Counter</h2>
			<div className="Counter-container">
				<div className="Counter-countWrapper">
					<p className="Counter-label">Count :</p>
					<p className="Counter-count">{count}</p>
				</div>
				<div className="Counter-btnSection">
					<button className="Counter-decrementBtn" onClick={() => dispatch(decrement())}>
						Decrease
					</button>
					<button className="Counter-incrementBtn" onClick={() => dispatch(increment())}>
						Increase
					</button>
					<button className="Counter-resetBtn" onClick={() => dispatch(reset())}>
						Reset
					</button>
				</div>
			</div>
		</section>
	);
}
