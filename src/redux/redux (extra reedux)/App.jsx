import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser } from "./features/users/usersSlice"

export default function App() {
  
  const users = useSelector((state) => state.users.data)
  const dispathch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target;
    dispathch(addUser(username.value))
  }
  
  const handleDelete = (index) => {
    dispathch(deleteUser(index))
  }

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" required />
        <input type="submit" value="save" />
      </form>
      <hr />
      {
        users.map((user,index) => <p key={index} >{user.username}<span onClick={()=> handleDelete(index)} > X</span></p>)
      }
    </div>
  )
}
