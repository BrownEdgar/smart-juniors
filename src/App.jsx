import { useDispatch, useSelector } from "react-redux"
import { addCount } from "./features/count/countersSlice"
import { addUser, deleteUser } from "./features/users/usersSlice"

export default function App() {
  const users = useSelector((state) => state.users)
  // const dispatch = useDispatch()

  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch()

  const saveRandomNumber = () =>{
    const random = Math.ceil(Math.random() * 10)
    dispatch(addCount(random))
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
     const {username} = e.target
    dispatch(addUser(username.value))
    
  }

  const handleDelete = (userind) => {
    dispatch(deleteUser(userind))
  }
  return (
    <div> 
      <button onClick={saveRandomNumber}>Save random num</button>
      <ul>
        {counters.map(num => <li key={num}>{num}</li>)}
      </ul>
     
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" required/>
        <input type="submit"  value='save'/>
      </form>
      {
        users.data.map((elm, ind)=> <p key={ind}>{elm.username} <span onClick={() => handleDelete(ind)}>x</span></p> )
      } 


    </div>
  )
}
