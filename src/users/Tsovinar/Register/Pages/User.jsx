import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../Routes/routes'

export default function User({users}) {
    const {firstName} = useParams()
    const [User, setUser] = useState({})
console.log(firstName)

    useEffect(() => {
       setUser(users.find(user => user.firstName ==`${firstName}`)) 
    }, [firstName])

      console.log(User)
  return (
    <div>
        <Link to = {`/${ROUTES.USERS}`}>Go to users list</Link>
        <div>
            <h1>FirstName:  {firstName}</h1>
             <h2>LastName: {User.LastName}</h2>
             <h2>Age: {User.age}</h2>
             <img src="" alt="" />
        </div>
        
    </div>
  )
 
}
