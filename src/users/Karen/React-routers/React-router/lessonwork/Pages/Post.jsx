import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import ROUTES from '../routes/routes';
import axios from 'axios';


export default function Post() {
const [post, setPost] = useState([])
    const {id} = useParams()

    
    useEffect(()=>{
       if (id<=200) {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>setPost(res.data)) 
       } 
        
    },[id])  
    
         if (isNaN(id) || id > 200) {
            return(
                <>
                <Link  to={`/${ROUTES.POSTS}`} >All Posts</Link>
                <h1>Post N {id} is not found </h1>
                </>
            )
         }
    return (
        <div>
            <Link  to={`/${ROUTES.POSTS}`} >All Posts</Link>
            <h1>Welcome to the post No {id}</h1>
           <h2>Title: {post.title}</h2>
        </div>
    )
}
