import { useState } from "react";
import "./App.scss"
import Home from './components/Home/Home'
import { ProductsContext } from './contexts/contexts'
import { setStorage, getProducts, cars, randomText } from "./storage/storage";
import classNames from "classnames";

export default function App() {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState(getProducts())

  const updateProducts = () => setProducts(getProducts())

  const addProduct = () => {
    const random_num = Math.floor(Math.random() * 6 + 1)
    const random_car = cars[Math.floor(Math.random() * 5)]
    const random_text = randomText[Math.floor(Math.random() * 10)]

    const product = {
      id: Date.now(),
      title: random_car,
      body: random_text,
      image_url: `/images/cars/${random_car}_${random_num}.png`,
      price: Math.floor(Math.random().toFixed(1) * 8000 + 7000)
    }
    setStorage({ ...product })
    updateProducts()
  }

  const removeProduct = (id) => {
    const products = getProducts().filter(product => product.id !== id)
    setStorage(products, true)
    updateProducts()
  }

  return (
    <div className="App">
      <header>
        <div>
          <button onClick={() => setPage(0)} className={classNames({
            active: page === 0
          })}>Add Products</button>
          <button onClick={() => setPage(1)} className={classNames({
            active: page === 1
          })}>Products</button>
        </div>
      </header>
      <ProductsContext.Provider value={{ addProduct, products, page, removeProduct }}>
        <Home />
      </ProductsContext.Provider>
    </div>
  )
}
