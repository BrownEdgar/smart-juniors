
import { useSelector } from 'react-redux'

export default function Users() {
  const users = useSelector(state => state.users.data);
  console.log('users render')

  return (
    <div>
      <p>{users.join(', ')}</p>
    </div>
  )
}
