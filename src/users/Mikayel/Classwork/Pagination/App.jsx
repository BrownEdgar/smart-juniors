import { useState, useEffect } from 'react'
import axios from "axios";
import Posts from "./Posts";
import Pagination from './Pagination.jsx';

export default function App() {

  const [posts, setPosts] = useState([])
  const [options, setOptions] = useState({
    page: 1,
    perPage: 10
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
  }, [])
  
  const currentPostsSlice = posts.slice((options.page * options.perPage) - options.perPage, (options.page * options.perPage));

  return (
    <div>
      <Posts posts={currentPostsSlice}/>
      <Pagination postsTotal={posts.length} perPage={options.perPage} />
    </div>
  )
}
