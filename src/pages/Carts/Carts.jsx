import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCartsSelector, getAsyncCarts, greaterThreeThousand, sortByPrice } from '../../features/carts/cartsSlice';
import { Cart } from '../../components';
import './Carts.scss';

export default function Carts() {
	const carts = useSelector(getAllCartsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAsyncCarts());
	}, []);

	return (
		<section className="Carts">
			<h1 className="pageTitle">Carts</h1>
			{carts.status === 'pending' ? (
				<h2 className="pending">
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</h2>
			) : (
				<div className="Carts-content">
					<div className="Carts-btnSection">
						<button onClick={() => dispatch(sortByPrice())}>Sort by Price</button>
						<button onClick={() => dispatch(greaterThreeThousand())}>Greater Than $3000</button>
					</div>
					{carts.data.map((cart) => {
						return <Cart cart={cart} key={cart.id} />;
					})}
				</div>
			)}
		</section>
	);
}
