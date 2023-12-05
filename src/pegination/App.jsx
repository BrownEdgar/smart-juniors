import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Posts from './Posts.jsx/Posts'

export default function App() {
    const [posts, setPosts] = useState([])
    const [options, setOptions] = useState({
        page:1 ,
        perPage:7,
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

  return (
    <div>App
        <Posts allPosts={posts}/>
    </div>
  )
}
