import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'



export default function Users() {
 

const users = useLoaderData()


  return (
    <div className='Users'>
        <h1>Users Page</h1>
        {
          users.map(user=>{
            return(
             <Link to={`${user.id}`} key={user.id}>
             <h2> {user.name}</h2>
             <p>{user.username}</p>
              </Link>
            )
          })
        }
    </div>
  )
}


const usersByLoader = async({request,params}) => {
  return axios.get('http://localhost:3000/users')
              .then(res => res.data)
} 
export {usersByLoader}