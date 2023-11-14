import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ROUTES from "../routes/routes"


export default function User() {
    const [user, setUser] = useState(null)

    const {id} =useParams()


    useEffect(()=>{
        if (id<=23) {
            axios.get(`http://localhost:3000/users/${id}`)
                  .then(res => setUser(res.data))
            
        }
    },[id])

    if (isNaN(id) || id > 20) {
        return(
          <>
          <h1>Post No {id} not found</h1>
          <Link to={`/${ROUTES.USERS}`}>Go back to the users</Link>
          </>
        )
      }
      


  return (
    <div>
    
    <h1>user id N {id}</h1>
    <h2>Name:{user?.name}</h2>
    <h3>Username:{user?.username}</h3>
    <h3>Users Email:{user?.email}</h3>
    <h3>Street:{user?.street}</h3>
    <h3>Suite:{user?.suite}</h3>
    <h3>City:{user?.city}</h3>
    <h3>Phone:{user?.phone}</h3>
    <h3>Website:{user?.website}</h3>
   <Link to={`/${ROUTES.USERS}`}>Go back to the users</Link>
</div>
  )
}

