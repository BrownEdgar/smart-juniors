
import  {useReducer, useRef} from 'react'
import reducer, { initialState } from './reducer'
import axios from "axios"
import { DELETE_POST, GET_POSTS, MIX_ARRAY, REPLACE_ID, SAVE_USER } from './actionTypes'
import "./App.scss"


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputref = useRef(null)
    const getPosts = () =>{
     axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
     ).then(res=> dispatch({type : GET_POSTS, payload:{posts : res.data}}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type:SAVE_USER , payload : {name: inputref?.current.value}})
        e.target.reset()
    }

  return (
    <div className='App'>
      <div>
        
     <button onClick={getPosts}>Get post</button>
     <button onClick={()=>dispatch({type: MIX_ARRAY})}>Shuflle</button>
     <button onClick={()=>dispatch({type:REPLACE_ID})}>Replace post ID</button>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder='Enter Name' ref={inputref} />
      </form>
      <ul>
          {state.posts.map(post => (
            <li key={post.id}>
              id:{post.id},
              <hr />
              title:{post.title}
              <br />
              body:{post.body}
              <button onClick={()=>dispatch({
                type: DELETE_POST,payload:{postId:post.id}
              })}>x</button>
            </li>
          ))}
        </ul>
    </div>
  )
}
