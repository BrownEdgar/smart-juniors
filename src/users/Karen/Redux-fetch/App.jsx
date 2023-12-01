import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncPosts } from './feauters/postsSlice'

export default function App() {
   
  const posts = useSelector(state => state.posts)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAsyncPosts())
  },[])

  return (
    <div>
      {
      posts.status ==='pending'
       ? <h2>Panding...</h2>
       :( <pre>
            {JSON.stringify(posts,null,1)}
          </pre>)
      }
    </div>
  )
}
