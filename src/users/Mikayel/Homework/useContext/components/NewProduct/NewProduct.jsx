import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import ProductList from '../ProductList/ProductList';
import './NewProduct.scss';

export default function NewProduct() {
  const { addProduct } = useContext(AppContext);
  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    addProduct(productName);
    setProductName('');
  };

  return (
    <div className="NewProduct">
      <h3>Products Page</h3>
      <input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ProductList />
    </div>
  )
}