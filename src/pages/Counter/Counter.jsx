import { useSelector, useDispatch } from 'react-redux';
import {
	decrement,
	increment,
	reset,
	divide,
	multiply,
	random,
	trunc,
	floor,
	ceil,
	round,
	square,
	cube,
} from '../../features/counter/counterSlice';
import './Counter.scss';

export default function Counter() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		switch (e.target.className) {
			case 'decrementBtn':
				dispatch(decrement());
				break;
			case 'incrementBtn':
				dispatch(increment());
				break;
			case 'resetBtn':
				dispatch(reset());
				break;
			case 'divideBtn':
				dispatch(divide());
				break;
			case 'multiplyBtn':
				dispatch(multiply());
				break;
			case 'randomBtn':
				dispatch(random());
				break;
			case 'truncBtn':
				dispatch(trunc());
				break;
			case 'floorBtn':
				dispatch(floor());
				break;
			case 'ceilBtn':
				dispatch(ceil());
				break;
			case 'roundBtn':
				dispatch(round());
				break;
			case 'squareBtn':
				dispatch(square());
				break;
			case 'cubeBtn':
				dispatch(cube());
				break;
			default:
				break;
		}
	};

	return (
		<section className="Counter">
			<h2 className="pageTitle">Counter</h2>
			<div className="Counter-container">
				<div className="Counter-countWrapper">
					<p className="Counter-label">Count :</p>
					<p className="Counter-count">{count}</p>
				</div>
				<div className="Counter-btnSection">
					<button className="decrementBtn" onClick={handleClick} title="minus 1">
						Decrease
					</button>
					<button className="incrementBtn" onClick={handleClick} title="plus 1">
						Increase
					</button>
					<button className="resetBtn" onClick={handleClick} title="reset to 0">
						Reset
					</button>
					<button className="divideBtn" onClick={handleClick} title="divide by 2">
						Divide
					</button>
					<button className="multiplyBtn" onClick={handleClick} title="multiply by 2">
						Multiply
					</button>
					<button className="randomBtn" onClick={handleClick} title="random integer from 1 to 1000">
						Random
					</button>
					<button className="truncBtn" onClick={handleClick} title="round down towards 0">
						Trunc
					</button>
					<button className="floorBtn" onClick={handleClick} title="round down towards -infitnity">
						Floor
					</button>
					<button className="ceilBtn" onClick={handleClick} title="round up">
						Ceil
					</button>
					<button className="roundBtn" onClick={handleClick} title="round to the closest integer">
						Round
					</button>
					<button className="squareBtn" onClick={handleClick} title="square of a number">
						Square
					</button>
					<button className="cubeBtn" onClick={handleClick} title="cube of a number">
						Cube
					</button>
				</div>
			</div>
		</section>
	);
}
