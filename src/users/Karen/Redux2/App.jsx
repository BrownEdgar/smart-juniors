import {useDispatch, useSelector} from 'react-redux'
import { addUser, deleteUser, getAsyncPosts } from './feuters/users/usersSlice'
import { useEffect} from 'react'



export default function App() {

  const users = useSelector((state => state.users))
  const dispatch = useDispatch()




    const handleSubmit=(e)=>{
      e.preventDefault()
      const {username}=e.target
      dispatch(addUser(username.value))
      }
    const handleDelete=(userIndex)=>{
        dispatch(deleteUser(userIndex))
      }
      
      useEffect(()=>{
        dispatch(getAsyncPosts())
      },[])
      console.log(users);
      
      return (
        <div>
      <h1>MidleWare</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" id='username' required/>
      <input type="submit"  value='save'/>  
      </form>  
      <hr />
    {
      users.data.map(elm=>{
        return(
          <div key={elm.id} className='Users'>
              <div className='Users-Render'>
              <h2>{elm.name}</h2>
            <p>{elm.username}</p>
            <p>{elm.phone}</p>
            <p>{elm.email}</p>
            <span onClick={handleDelete}>&#10006;</span>
              </div>
          </div>
        )
      })
    }     
    </div>
  )
}
