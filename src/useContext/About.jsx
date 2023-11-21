import React, { useContext } from 'react'
import { MyContext } from './App'
import Product from './product'

export default function About() {
    const value = useContext(MyContext)
    const deleteProduct = (ind) =>{
        value.setProducts(value.products.toSpliced(ind, 1))
        
        value.getProducts(value.setProductLocalStorage())  
    }
  return (
    <div>
        <h1>Product list</h1>
        <button onClick={value.getProducts}>Get Products</button>
        {
            value.data.map((elm, ind)=>  <li key={ind} className='list'>{elm} <span onClick={() => deleteProduct(ind) }>X</span></li>)
        }
        <Product />
    </div>
  )
}
