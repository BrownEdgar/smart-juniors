import React from 'react'
import { useEffect, useState } from 'react'
import './About.css'

export default function ProductList() {

    const products = [
        {
          name: "Iphone 15",
          price: 1099
        },
        {
          name: "Iphone 14",
          price: 999
        },
        {
          name: "Iphone 13",
          price: 899
        },
        {
          name: "Iphone 12",
          price: 799
        },
        {
          name: "Iphone 11",
          price: 699
        },
        {
          name: "Iphone X",
          price: 599
        },
        {
          name: "Iphone SE",
          price: 649
        }
      ];


    const [index,setIndex] = React.useState(0)
    const [count,setCount] = React.useState(0)
    const [multi,setMulti] = React.useState(0)

    useEffect(() => {
        setCount(
          multi * products[index].price
        )
    }, [multi])

    return(
        <div>
        <div className="productList">
            <p className="productText">Product List</p>
            <hr/>
            
            <div className="card">
                <span className="productName">{products[index].name}</span>
                <span className='productPrice' >Price: {products[index].price}</span>
                <div className="multi">
                    <button onClick={ () => { if( !multi <= 0 ) { setMulti( multi - 1 ) } } } className="multiBtn">−</button>
                    <button onClick={() => { setMulti ( multi + 1 ) } } className="multiBtn">+</button>
                </div>
    
            </div>

            <button onClick={ () => { if( index <= 0 ) { setIndex( products.length - 1 ) } else { setIndex( index - 1 ) } } } className="arrow">⇦</button>

            <button onClick={() => {if ( index >= products.length - 1 ) { setIndex( 0 ) } else { setIndex( index + 1 ) } } } className="arrow">⇨</button>

        </div>
    
        <div className="totalPrice">
            <div className="totalSelectedProduct">
                <span className="Price">Total Price: {count} $</span>
            </div>
        </div>
    
        </div>
    )
}