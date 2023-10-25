import { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.scss"
import Users from './components/Users/Users';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';



export default function App() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  axios.defaults.timeout = 2000;

  const [users, setUsers] = useState([])
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    axios("users")
      .then(users => {
        setUsers(users.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Users profile <i className="fa-solid fa-users"></i></h1>
      </div>
      <div className='App-info'>
        <h1>Profile Info</h1>
      </div>
      <div className='App-leftSide'>
        {
          users?.length > 0
            ? <Users users={users} setProfile={setProfile} />
            : null
        }
      </div>
      <div className='App-rightSide'>
        {
          profile
            ? <ProfileInfo profile={profile} />
            : null
        }
      </div>
    </div>
  )
}
