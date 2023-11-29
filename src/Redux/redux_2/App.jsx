import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "./features/carts/cartSlice";
import './App.scss'

export default function App() {
  const dispatch = useDispatch();
  const { carts, status, error } = useSelector((state) => state.cart)
  const [sortedCarts, setSortedCarts] = useState([...carts]);
  const [filteredCarts, setFilteredCarts] = useState([...carts]);

  useEffect(() => {
    dispatch(fetchCarts());
    console.log("fetch");
  }, [dispatch]);

  useEffect(() => {
    setSortedCarts([...carts]);
    setFilteredCarts([...carts]);
    console.log("carts", sortedCarts, filteredCarts);
  }, [carts]);
  

  const handleSortByPrice = () => {
    const sortedByPrice = [...filteredCarts].map((cart) => ({
      ...cart,
      products: [...cart.products].sort((a, b) => a.price - b.price),
    }));
    setSortedCarts(sortedByPrice);
    setFilteredCarts(sortedCarts);
  };

  const handleFilterByPrice = () => {
    const priceThreshold = 3000;
    const filteredByPrice = [...sortedCarts].filter((cart) => {
      const total = cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      return total > priceThreshold;
    });
    setFilteredCarts(filteredByPrice);
  };

  if (status === 'loading') {
    console.log("loading");
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    console.log("failed");
    return <div>Error: {error}</div>;
  }
  console.log("carts", sortedCarts, filteredCarts);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Carts</h1>
      </header>
      <div className="App-content">
        <button className="button button--primary" onClick={handleSortByPrice}>
          Sort by Price
        </button>
        <button className="button button--danger" onClick={handleFilterByPrice}>
          Filter by Price
        </button>
        <ul>
          {filteredCarts.map((cart) => (
            <li key={cart.id}>
              <strong>Cart ID: {cart.id}</strong>
              <ul>
                {cart.products.map((product) => (
                  <li key={product.id}>
                    {product.title} - ${product.price} (Qty: {product.quantity})
                  </li>
                ))}
              </ul>
              <p>Total: ${cart.total}</p>
              <p>Discounted Total: ${cart.discountedTotal}</p>
              <p>Total Products: {cart.totalProducts}</p>
              <p>Total Quantity: {cart.totalQuantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
