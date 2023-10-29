/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import "./App.scss"
export default function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [hasError, setHasError] = useState({
    message:"",
    status: false
  })
  const [message, setMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    const { username,password } = e.target;
    const regexp = new RegExp(username.value,"i")
    const userExist = users.some(user => user.username.match(regexp))
    if (!userExist) {
      const user = {
        id: Date.now(),
        username: username.value,
        password: password.value,
      }
      setUsers([...users,user])
      setHasError({
        status: false,
        message:""
      })
    }else{
      setHasError({
        status: true,
        message:"username is exist"
      })
    }
  }
  console.log();

  const handleChange = (e) =>{
    setMessage(e.target.value)
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        {hasError.status && <p className="error">{hasError.message}</p>
        }
        <label htmlFor="username">username</label>
        <input type="text"  id='username' required/>
        <label htmlFor="password">password</label>
        <input type="password"  id="password"  required/>
        <input type="submit" value="add user" />
      </form>
      <hr />
      <h1>{message}</h1>
      <form>
        <input type="text" placeholder={message} onChange={handleChange}/>
        <ul>
          <li>{users}</li>
        </ul>
      </form>
    </div>
  )
}
