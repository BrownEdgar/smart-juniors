import { useContext } from 'react';
import { AppContext } from '../../App';
import './ProductList.scss';

export default function ProductList() {
  const { products, deleteProduct } = useContext(AppContext);

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="ProductList">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.productName}{' '}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}