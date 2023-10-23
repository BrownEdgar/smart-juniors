import {useState} from 'react'
import Child from './Child'
import "./App.scss"

export default function App() {
  const [posts,setPosts] = useState([])
  
  return (
    <div>
      <h1>Json placeholder Posts</h1>
      <Child posts={posts}/>
    </div>
  )
}
