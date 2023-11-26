import React, { useState } from 'react'
import './App.scss'

function App() {
  const [users, setUsers] = useState([])
  const [hasError, setHasError] = useState({
    message: "",
    status: false,
  })

  const handleSubmit = (e) => { 
    e.preventDefault()
    const { username } = e.target;

    const regexpUser = new RegExp(username.value, 'i')
    const userExist = users.some(user => user.username.match(regexpUser))
    const regexpEmail = new RegExp(email.value, 'i')
    const emailExist = users.some(user => user.email.match(regexpEmail))
    const regexpTel = new RegExp(tel.value, 'i')
    const telExist = users.some(user => user.tel.match(regexpTel))
    const regexpPass = new RegExp(password.value, 'i')
    const passExist = users.some(user => user.password.match(regexpPass))

    if (!userExist && !emailExist && !telExist && !passExist) {
      const user = {
        id: Date.now(),
        username: username.value,
        email: email.value,
        tel: tel.value,
        password: password.value
      }
      setUsers([...users,user])
      setHasError({
        status: false,
        message: ''
      })
    }else{
      setHasError({
        status: true,
        message: 'User with this data is already registered'
      })
    }
  }
  console.log(users);
  return (
    <div className="forum">
      <h1 className="forumtext">Registration</h1>
      <form onSubmit={handleSubmit}>
        {hasError.status && <p className="err">{hasError.message}</p>}
        
          <label htmlFor="username"></label>
          <input id="username" type="text" placeholder="Name"  />
          <label htmlFor="email"></label>
          <input id="email" type="text" placeholder="Email"   />
          <label htmlFor="tel"></label>
          <input id="tel" type="text" placeholder="Phone number"   />
          <label htmlFor="password"></label>
          <input id="password" type="password" placeholder='Password'   />
          <label htmlFor="message"></label>
          <input type="text" id="message" placeholder='Write your message' />
          <input id='sub' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
