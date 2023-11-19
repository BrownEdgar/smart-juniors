import React from 'react'
import { MyContext } from './App'
import { useContext } from 'react'

export default function Product() {
    const value = useContext(MyContext)
    
  return (
    <div>
        <h1>Add products in local storage</h1>
        <button onClick={value.setProductLocalStorage}>Add products</button>
    </div>
  )
}
