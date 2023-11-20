import React, { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import NewProduct from './components/NewProduct/NewProduct';
import About from './components/About/About';
import './App.scss'

export const AppContext = React.createContext();

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (productName) => {
    const newProduct = {
      id: new Date().getTime(),
      productName,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);

    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'newProduct':
        return <NewProduct />;
      default:
        return null;
    }
  };

  return (
    <div className='App'>
      <AppContext.Provider value={{ currentPage, setCurrentPage, products, addProduct, deleteProduct }}>
        <nav>
          <button className={currentPage === 'home' ? 'active' : ''}
            onClick={() => setCurrentPage('home')}>
            Home
          </button>
          <button className={currentPage === 'about' ? 'active' : ''}
            onClick={() => setCurrentPage('about')}>
            About
          </button>
          <button className={currentPage === 'newProduct' ? 'active' : ''}
            onClick={() => setCurrentPage('newProduct')}>
            New Product
          </button>
        </nav>
        {renderPage()}
      </AppContext.Provider>
    </div>
  )
}