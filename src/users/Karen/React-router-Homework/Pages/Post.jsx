import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import ROUTES from "../routes/routes"
import { useState,useEffect } from "react"
import axios from "axios"




export default function Post() {
const [post, setPost] = useState(null)
const {id} = useParams()


useEffect(()=>{
  if (id<=20) {
    axios(`http://localhost:3000/posts/${id}`)
             .then(res=>setPost(res.data))
  }
},[id])

if (isNaN(id) || id > 20) {
  return(
    <>
    <h1>Post No {id} not found</h1>
    <Link to={`/${ROUTES.POSTS}`}>Go back to the Posts</Link>
    </>
  )
}
  return (
    <div>
        <h1> Post No {id}</h1>
        <h2>{post?.title}</h2>
        <h3>{post?.body}</h3>
        <Link to={`/${ROUTES.POSTS}`}>Go back to the Posts</Link>
    </div>
  )
}
