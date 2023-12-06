import axios from 'axios';
import { useEffect, useState } from 'react'
import Posts from './Posts';
import Pagination from './Pagination';


const poststotal = 100
export default function App() {
  const [posts, setPosts] = useState([]);
  const [options, setOptions] = useState({
    page: 3,
    pegPage: 10
  })


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: options.pegPage,
        _start: (options.pegPage * options.page) - options.pegPage
      }
    })
      .then(res => setPosts(res.data))
  }, [options])


  const changePage = (page) => {
    setOptions(prevOptions => (
      {
        ...prevOptions,
        page
      }
    ))
  }

  return (
    <div>
      <Posts posts={posts} />
      <Pagination poststotal={poststotal} perpage={options.pegPage} changePage={changePage} />
    </div>
  )
}
