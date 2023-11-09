import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'

export default function Posts() {
const posts = useLoaderData()
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //   axios('https://jsonplaceholder.typicode.com/posts?_limit=8')
    //   .then(res => setPosts(res.data))
      
    // }, [])
    
  return (
    <div className='Posts'>
        {
            posts.map(post =>{
                return (
                <Link key={post.id} to={`${post.id}`}>
                    {post.title}
                </Link>
                )
            })
        }
    </div>
  )

  
}
const postLoader = async ({request, params})=>{
    return axios('https://jsonplaceholder.typicode.com/posts?_limit=8')
      .then(res => res.data)
  }
export {postLoader}