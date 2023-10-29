import { useState } from 'react'
import './App.scss'

export default function App() {
    const [users, setUsers] = useState([])
    const [hasError, setHasError] = useState({
        message: "",
        status: false,
    })
    const [message, setMessage] = useState("Sebastian")

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = e.target;
        const regExp = new RegExp(username.value, 'i')
        const userExist = users.some(user => user.username.match(regExp))
        if (!userExist) {
            const user = {
                id: Date.now(), 
                username: username.value,
                password: password.value
            }
            setUsers([...users, user])
            setHasError({
                status: false,
                message: ''
            })
        } else {
            setHasError({
                status: true,
                message: 'Username is exist'
            })
        }

    }

    const handleChage = (e) => {
        setMessage(e.target.value)
    }

    console.log(users);
    
    // if (!users.includes(username.value)) {
    //     setUsers([...users, username.value])
    //     e.target.reset()
    // } else {
    //     alert("this user is already exist")
    // }

  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            {hasError.status && <p className='error'>{hasError.message}</p>}
            <label htmlFor="username">Username</label>
            <input type="text" id='username' required />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' required />
            <input type="submit" value='add user' />
        </form>
        <hr />
        <form>
            <h1>{message}</h1>
            <input type="text" placeholder='message' value={message} onChange={handleChage}/>
        </form>
    </div>
  )
}
