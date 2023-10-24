import {useEffect , useState} from 'react'
import PropTypes from 'prop-types'
import axios from "axios"


export default function Child() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
   axios
   .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
   .then(res=>setPosts(res.data))
   .catch(err=>console.log(err))
  }, [])
  return (
    <div className='container'>
      {posts.map((post)=>(
        <div key={post.id}>
          <ol className='container-box box-item'>
            Post Id
            <h1 className='container-box_item box-id'>{post.id}</h1>
            Post Title
            <h3 className='container-box_item box-title'>{post.title}</h3>
            Post Body
            <p className='container-box_item box-body'>{post.body}</p>
          </ol>
        </div>
      ))}
      </div>
  )
}

Child.propTypes = {
   posts: PropTypes.arrayOf(
    PropTypes.exact({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }),
   )
  

  // count: PropTypes.number.isRequired,
  // name:  PropTypes.string,
  // gender: PropTypes.oneOf(["male","female"]).isRequired,
  // age: PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.string,
  // ]),
  // obj: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     id: PropTypes.number.isRequired,
  //     userId: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     body: PropTypes.string.isRequired
  // }),
  // )
  // obj: PropTypes.shape({
  //     count: PropTypes.number.isRequired,
  //     id: PropTypes.number.isRequired,
  //     userId: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     body: PropTypes.string.isRequired
  // })
}