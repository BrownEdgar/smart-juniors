import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ROUTES from '../routes/routes';
import axios from 'axios'

export default function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (id <= 200) {
      axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err)) 
    }
  }, [id])

  if (isNaN(id) || id > 200) {
    return(
      <>
        <Link to={`/${ROUTES.POSTS}`}>All posts</Link>
        <h1>Posts N {id} is not found</h1>
        <h2>Tite: {post?.title}</h2>
      </>
    )
  }

  console.log(id);
  return (
    <div>
      <Link to={`/${ROUTES.POSTS}`}>All posts</Link>
      <h1>Welcome to the post N {id}</h1>
    </div>
  )
}
