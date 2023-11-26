import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo/UserInfo'
import classNames from 'classnames'
import axios from 'axios'
import "./App.scss"

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [chooseedId, setChooseedId] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(users => setUsers(users.data))
         .catch(err => console.log(err))
         .finally(()=>{setIsLoading(false)})
  }, [])

  return (
    isLoading ? <h1>Loading...</h1> :
    <div className='List'>
      <div className="UsersList">
       <h1>Users List</h1>
       <ul>
        {users.map(user => (
          <li key={user.id} className={classNames({ selected: chooseedId === user.id })}
                            onClick={() => setChooseedId(user.id)}
          >
            {user.name}
          </li>
          ))}
        </ul>
      </div>
      {chooseedId && <UserInfo users={users} chooseedId={chooseedId} />}
    </div>
    
  )
}

export default App