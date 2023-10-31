
import { useEffect, useState } from 'react'
import './App.scss'

export default function App() {
const [cities, setCities] = useState([])
const [haseError,setHaseError]=useState({
  message:'',
  status:false
})



const handleSubmit =(e)=>{
  e.preventDefault()
  const { city } = e.target
 if (!cities.includes(city.value)) {
  setCities([...cities,city.value])
  setHaseError({
    status:false,
    message:'',
   })
  e.target.reset()
 } else {
 setHaseError({
   status:true,
   message:'This city is alredy added in your wish list',
 })
 }
}

const handleDelete=(index)=>{
  setCities(cities.toSpliced(index,1))
}



  return (
    <div className='App'>
     <form onSubmit = {handleSubmit}>
      <label htmlFor="text">My travel wish list 2024</label>
      <hr />
      <label htmlFor="text">In your Todos list is {cities.length} items</label>
      <hr />
      <input type="text" id = 'city' required/>
      <input type="submit" value='add city' className='add'/>
      {haseError.status &&  <p className='error'> {haseError.message} </p>}
      {
        cities.map((elm,index)=>{
          return(
            <li key={index}>{elm}<span onClick={() => handleDelete(index)}>&#10006;</span></li>
            )
          })
        }
      </form>      
    </div>
  )
}





























// import { useState,useEffect,Fragment } from 'react'

// import './App.scss'







// function App() {
//   const [users, setUsers] = useState([])
//   const [haseError, setHaseError] = useState({
//     message:'',
//     status:false
//   })

//   const [message, setMessage] = useState('')
    
//    const handleChange=(e)=>{
//     setMessage(e.target.value)
//    }

// const handleSubmit= (e)=>{
//   e.preventDefault()
//   const {username,password}=e.target
//   const regexp=new RegExp(username.value,'i')
//    const userExsist = users.some(user=>user.username.match(regexp)) 
//    if (!userExsist) {
//     const user={
//       id:Date.now(),
//       username:username.value,
//       password:password.value
//     }
//     setUsers([...users,user])
//     setHaseError({
//       status:false,
//       message:''
//     })
//    }else{
//     setHaseError({
//       status:true,
//       message:`${username.value} is exsist`
//     })
//    }
// }
// console.log(users);
//   return (
//     <div className='App'>
//      <form onSubmit={handleSubmit}>
//       <input type="text" />
//       <label htmlFor="username">username</label>
//       <input type="text"  id='username' required/>
//       {haseError.status && <p className='error'>{haseError.message}</p>}      
//       <label htmlFor="password">password</label>
//       <input type="password" id='password' required />
//       <input type="submit" value='add user'/>
//      </form>
//      <hr />
//      <form>
//       <h1>{message}</h1>
//       <input type="text" placeholder='message' onChange={handleChange} />
//      </form>
//     </div>
//   )
// }

// export default App
// if (!users.includes(username.value)) {
//   setUsers([...users,username.value])
//   e.target.reset()
// }else{
//   alert('user is alredy exsist')
// }

// user=>user.username.toLowerCase() === username.value.toLowerCase()