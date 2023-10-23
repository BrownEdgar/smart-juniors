import { useState } from 'react'
import Child from './Child'

import "./App.scss"

export default function App() {
  const [count, setCount] = useState([])
  return (
    <div>
      <h1>App component</h1>
      <Child count={count} gender='male' obj={{ id: 1, userId: "1", title: "lorem ipsum", body: "lorem", x: 1 }} />
    </div>
  )
}
