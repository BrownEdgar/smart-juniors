import React, { useState, useEffect } from 'react'
import Child from "./Child"
import axios from "axios"
import "./App.scss"

export default function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => setData(res.data))
  }, [])

  return (
    <div>
      <h1 className='red-redo'>app component</h1>
      <Child data={data} />
    </div>
  )
}
