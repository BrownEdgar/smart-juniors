import { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { filterPrice, getCarts, sortPrice } from './features/cartsSlice'
import './App.scss'
import { addtodo } from './features/todosSlice'
import { adduser } from './features/usersSlice'
import MainSlider from './MainSlider/MainSlider'

export default function App() {

  // const carts = useSelector((state) => state.carts.data)
  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos)
  const users = useSelector((state) => state.users)

  useEffect(() => {
  dispatch(getCarts())
}, [])

  const handleTodos=(e) => {
    e.preventDefault()
    const { todo } = e.target
    dispatch(addtodo(todo.value))
    
  }
  

  const handleUsers=(e) => {
    e.preventDefault()
    const { user } = e.target
    dispatch(adduser(user.value))
  }

  return (
    // <div className='App'>
    //   <h1> carts</h1>
    //   <button onClick={()=>dispatch(sortPrice())}>Sort price </button>
    //   <button onClick={()=>dispatch(filterPrice())}>Price higher 3000</button>
      
    //   {
    //     carts.map(cart => <ul key={cart.id}>
          
    //       {cart.products.map(elm => 
    //         <li key = {elm.id}>
    //           <h2>Product name: {elm.title}</h2>
    //           <p>Product price: {elm.price}</p>
    //           <img src = {elm.thumbnail} alt="" />
    //         </li>)}
    //       </ul>)
    //   }
      <div className='list'>
        <div className='todos'>
          <h1>Todos</h1>
            <form onSubmit={handleTodos}>
              <input type="text" placeholder='todos' id='todo' required/>

              <input type="submit" value='addtodo' />
            </form>
            {
             todos.map((todo, index) => <li key={index}>{todo}</li>)
            }
          </div>
        
        <div className='users'>
          <h1>Users</h1>
          <form onSubmit={handleUsers}>
            <input type="text" placeholder='users' id='user' required/>
            <input type="submit" value='adduser' />
          </form>
          {
            users.map((user, index)=> <li key={index}>{user}</li>)
          }
        </div>
        
      </div>
    // </div>
    
    )
  
}
