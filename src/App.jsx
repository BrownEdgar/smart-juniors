import { useDispatch } from 'react-redux'

import Books from './components/Books/Books'
import Select from './components/Select/Select'
import { addUser } from './features/users/usersSlice'
import Users from './components/Users/Users'
import Test from './components/test/Test'



export default function App() {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addUser("Agas"))
  }
  return (
    <div>
      <button onClick={handleClick}>add user</button>
      <Test id={2} />
    </div>
  )
}
