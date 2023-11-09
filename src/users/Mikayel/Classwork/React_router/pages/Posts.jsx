import { Link, useLoaderData } from 'react-router-dom'
import axios from 'axios'

export default function Posts() {

  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className='Posts'>
      {
        posts.map(post => {
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

const postLoader = async({ request, params }) => {
  console.log({ request, params });
  return axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => res.data)
    .catch(err => console.log(err))
}
export { postLoader }