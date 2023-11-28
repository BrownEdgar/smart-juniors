import PropTypes from 'prop-types';
import CartProduct from '../CartProduct/CartProduct';
import './CartProducts.scss';

export default function CartProducts({ products }) {
	return (
		<div className="CartProducts">
			{products.map((product) => {
				return <CartProduct product={product} key={product.id} />;
			})}
		</div>
	);
}

CartProducts.propTypes = {
	products: PropTypes.array.isRequired,
};
