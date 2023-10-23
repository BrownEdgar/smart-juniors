import { useState, useEffect } from 'react'
import Child from './Child'
import axios from 'axios'
import "./App.scss"

export default function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    useEffect(() => {
      axios({
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: 'albums',
        params: {
          _limit: 10,
          _start: 5
        }
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1>App component</h1>
        <Child count={count} albums={data} gender='male' obj={[{id: 1, userId: "1", title: "lorem ipsum", body: "lorem"}]} />
    </div>
  )
}