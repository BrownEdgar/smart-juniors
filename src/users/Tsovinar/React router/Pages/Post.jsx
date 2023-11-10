import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../routes/routes'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post() {
    const {id} = useParams()
    const [Post, setPost] = useState({})


    useEffect(() => {
        if (parseInt(id) <=200) {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data)) 
        }
      
    }, [id])

    if (isNaN(id) || parseInt(id) >=200) {
       return (
        <>
       <h2>Post N {id} not found</h2>
       
        <Link to= {`/${ROUTES.POSTS}`}>Go to posts</Link>
        </>
        )
    }
    
  return (
    <div>

        <Link to = {`/${ROUTES.POSTS}`}>Go to posts</Link>
        <h1>Welcome to the post N {id}</h1>
        <h2>Title : {Post.title}</h2>
    </div>
  )
}
