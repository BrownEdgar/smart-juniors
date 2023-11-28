import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../HW redux/features/usersSlice'
import getAsyncPosts from './features/postsSlice'
import { useEffect } from 'react'


export default function App() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const posts =  useSelector((state) => state.posts)

   const saveUser = (e) =>{
    e.preventDefault()
  
    const newUser = {
        id: e.target.id.value,
        name: e.target.name.value,
        contact: {
            address: e.target.address.value,
            phone: e.target.phone.value,
            email: e.target.email.value
        }
        
    }
    dispatch(addUser(newUser))
    console.log(newUser)
   }

   useEffect(() => {
   dispatch(getAsyncPosts)
   }, [])

  return (
    <div>
        <form onSubmit={saveUser}>
            <input type="text" id='id' placeholder='id' />
            <input type="text" id='name' placeholder='name' />
            <input type="text" id='address' placeholder='address' />
            <input type="text" id='phone' placeholder='phone' />
            <input type="text" id='email' placeholder='email' />
            <input type="submit" value='Add new user' />
        </form>
        {
            users.map(user => 
            <li key={user.id}>
                <h2 >{user.name}</h2>
                <p key={user.id}>Contact: address:{user.contact.address} email:{user.contact.email}</p>
            </li>)
        }
        <pre>
            <h1>Lorem ipsum dolor sit.</h1>
            {JSON.stringify(posts, null, 1)}
        </pre>

    </div>
  )
}
