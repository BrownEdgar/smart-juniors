import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../routes/routes'
import axios from 'axios';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null)


  useEffect(() => {
    if (id <= 200) {
      axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
    }


  }, [id])

  if (isNaN(id) || id > 200) {
    return (
      <>
        <h1>Posts N {id} not found</h1>
        <Link to={`/${ROUTES.POSTS}`}>All posts</Link>
      </>
    )
  }

  return (
    <div>
      <Link to={`/${ROUTES.POSTS}`}>All posts</Link>
      <h1>Welcome to the post N {id} </h1>
      <h2>Title: {post?.title}</h2>
    </div>
  )
}
