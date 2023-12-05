import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Posts from './posts'
import './App.scss'
import Pegination from './pegination'

const totalPosts = 100
export default function App() {
    const [posts, setPosts] = useState([])
    const [options, setOptions] = useState({
        page:1 ,
        perPage:5,
    })
    
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: options.perPage,
                _start: (options.page * options.perPage) - options.perPage
            }
        })
        .then(res => setPosts(res.data))
    }, [options])

 
    const handleClick = (num)=>{
        setOptions({...options, page:num})
    }
   
    const changePerPage = (e) =>(
       e.preventDefault(),
       console.log(e.target.select.value),
        setOptions({...options, perPage: e.target.select.value})  
    )
  return (
    <div className='App'>
        <h1>Posts</h1>
        <h2>Show posts</h2>
        <form action="" onSubmit={changePerPage}>
            {/* <input type="number" id='input' />
            <input type="submit" /> */}
            <select name="" id="select">
                <option type='number' >5</option>
                <option type='number'>10</option>
                <option type='number'>15</option>
                <option type='number'>20</option>
                <option type='number'>50</option>
                <option type='number'>100</option>    
            </select>
            <input type="submit" /> 
        </form>
        
      
        <Posts allPosts={posts}/>
        <Pegination totalPosts={totalPosts} perPage = {options.perPage} handleClick= {handleClick}/>
    </div>
  )
}
