import PropTypes from 'prop-types';
import './CartProduct.scss';

export default function CartProduct({ product }) {
	return (
		<div className="CartProduct">
			<div className="CartProduct-mainInfo">
				<div className="CartProduct-img">
					<img src={product.thumbnail} alt={product.title} />
				</div>
				<h4 className="CartProduct-title">{product.title}</h4>
			</div>
			<div className="CartProduct-additionalInfo">
				<p className="CartProduct-price">Price: ${product.price}</p>
				<p className="CartProduct-quantity">Stock: {product.quantity}</p>
				<p className="CartProduct-totalPrice">Total: ${product.total}</p>
				<p className="CartProduct-discountPercentage">Discount: {product.discountPercentage}%</p>
				<p className="CartProduct-discountedPrice">Discounted Price: ${product.discountedPrice}</p>
			</div>
		</div>
	);
}

CartProduct.propTypes = {
	product: PropTypes.object.isRequired,
};
