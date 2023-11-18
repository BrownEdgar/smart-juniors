import React, { createContext } from 'react'
import { useState } from 'react'
import About from './About'
import './App.scss'




export const  MyContext= createContext()

export default function App() {
    const [data, setData] = useState([])
    const [products, setProducts] = useState(['bread' , 'chesse', 'butter' , 'salt'])

    
    const setProductLocalStorage = () =>{
        localStorage.setItem('products', JSON.stringify(products))
    }

    const getProducts = () =>{
        setData(JSON.parse(localStorage.getItem('products') || '[]'))
    }
    
    
  return ( 
    <div className='App'>
        <h1>Product Shop</h1>
        <MyContext.Provider value={{data: data, products: products, setProductLocalStorage : setProductLocalStorage , getProducts: getProducts, setProducts:setProducts}}>
            <About />
        </MyContext.Provider>
    </div>
  )
}
