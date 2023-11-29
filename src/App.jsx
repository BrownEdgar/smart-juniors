import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getCarts } from './features/cartsSlice'
import './App.scss'

export default function App() {

  const carts = useSelector((state) => state.carts.data)
  const dispatch = useDispatch()
  
  useEffect(() => {
  dispatch(getCarts())
}, [])


  return (
    <div className='App'>
      <h1> carts</h1>
      <button>Sort price </button>
      <button>Price higher 3000</button>
      
      {
        carts.map(cart => <ul key={cart.id}>
          {cart.products.map(elm => 
            <li key={elm.id}>
              <h2>Product name: {elm.title}</h2>
              <p>Product price: {elm.price}</p>
            </li>)}
          </ul>)
      }
    </div>
  )
}
