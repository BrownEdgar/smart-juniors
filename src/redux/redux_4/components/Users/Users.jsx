import { useSelector } from 'react-redux'
import { getAllUsers } from '../../features/users/usersSlice'

import "./Users.scss"

export default function Users() {
  const users = useSelector(getAllUsers)

  return (
    <div className='Users'>
      {
        users.map((user, index) => {
          return (
            <div key={index} className='_item'>
              <h2 className='_userName'>{user.name}</h2>
              <p className='_userEmail'>Email: {user.email}</p>
            </div>
          )
        })
      }
    </div>
  )
}
