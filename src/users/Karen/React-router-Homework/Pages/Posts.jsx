import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'



export default function Posts() {
 

const posts = useLoaderData()


  return (
    <div className='Posts'>
        <h1>Posts Page</h1>
        {
          posts.map(post=>{
            return(
              <Link to={`${post.id}`} key={post.id}>
             <h2> {post.title}</h2>
             <p>{post.body}</p>
              </Link>
            )
          })
        }
    </div>
  )
}


const postsByLoader = async({request,params}) => {
  return axios('http://localhost:3000/posts/')
                  .then(res => res.data)
} 
export {postsByLoader}