import { useEffect, useState } from "react"
import axios from 'axios'
import Posts from "./Posts"
import Pagination from "./Pagination"
import './App.scss'
 

export default function App() {
  const [posts, setPosts] = useState([])
  const [options, setOptions] = useState({
    page:1,
    perPage:10
  })

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
  },[])

  const changePage = (pageNum) =>{
    setOptions(prevOptions =>(
        {
            ...prevOptions,
             page:pageNum
        }
        ))
   }
  const currentPostsSlice = posts.slice((options.page * options.perPage)-options.perPage,(options.page*options.perPage))
  
   const SelectChange = (e) =>{
    e.preventDefault
    setOptions(perPageOptions =>(
        {
            ...perPageOptions,
             perPage:e.target.value
        }
        ))
    
}   
console.log(options.perPage);


  return (
    <div>
      <select name="Posts" id="Posts" onChange={SelectChange}>
            <option value="All">All</option>
            <option value={'10'}>10</option>
            <option value={'15'}>15</option>
            <option value={'25'}>25</option>
            <option value={'35'}>35</option>
            <option value={'45'}>45</option>
      </select>
     <Posts posts = {currentPostsSlice} />
     <Pagination PostsTotal={posts.length} perpage={options.perPage} changePage={changePage}/>
    </div>
  )
}
