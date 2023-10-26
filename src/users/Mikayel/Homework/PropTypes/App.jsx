import { useState, useEffect } from 'react'
import UserList from './UserList/UserList'
import classNames from 'classnames'
import axios from 'axios'
import "./App.scss"

export default function App() {
  const [users, setUsers] = useState([])
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: 'users'
    })
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={classNames({ selected: selectedUserId === user.id })}
            onClick={() => setSelectedUserId(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUserId && <UserList users={users} selectedUserId={selectedUserId} />}
    </div>
  )
}