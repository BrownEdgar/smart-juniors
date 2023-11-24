import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './features/users/usersSlice';
import { addCount } from './features/counters/countersSlice';

export default function App() {
  // const users = useSelector((state) => state.users);

  const counters = useSelector(state => state.counters)
  const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { username } = e.target;
  //   dispatch(addUser(username.value))
  // }
  // const handleDelete = (userIndex) => {
  //   dispatch(deleteUser(userIndex))
  // }

  const saveRandomNumber = () => {
    const random = Math.ceil(Math.random() * 100);
    dispatch(addCount(random))
  }
  return (
    <div>
      <button onClick={saveRandomNumber}>add count</button>
      <ul>
        {counters.map(number => {
          return (
            <li key={number}>{number}</li>
          )
        })}
      </ul>

      {/* <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id='username' required />
        <input type="submit" value="save" />
      </form>
      <hr />
      {
        users.data.map((user, index) => {
          return (
            <p key={index}>{user.username} <span onClick={() => handleDelete(index)}>X</span></p>
          )
        })
      } */}


    </div>
  )
}
