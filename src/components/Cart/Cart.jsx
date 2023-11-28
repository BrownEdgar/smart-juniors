import PropTypes from 'prop-types';
import CartProducts from '../CartProducts/CartProducts';
import './Cart.scss';

export default function Cart({ cart }) {
	return (
		<div className="Cart">
			<CartProducts products={cart.products} />
			<div className="Cart-info">
				<p className="Cart-userId">User ID: {cart.userId}</p>
				<p className="Cart-totalPrice">Total: ${cart.total}</p>
				<p className="Cart-discountedTotalPrice">Discounted Total: ${cart.discountedTotal}</p>
				<p className="Cart-totalProducts">Total Products: {cart.totalProducts}</p>
				<p className="Cart-totalQuantity">Total Quantity: {cart.totalQuantity}</p>
			</div>
		</div>
	);
}

Cart.propTypes = {
	cart: PropTypes.object.isRequired,
};
