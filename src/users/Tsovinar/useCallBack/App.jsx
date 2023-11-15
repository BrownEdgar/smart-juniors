import React, {useState, useMemo} from 'react'
import Child from './Child'

export default function App() {
   const [count, setcount] = useState(0)
   const child = useMemo(() => <Child />, [])
   const addCount = () =>{
    setcount(count + 1)
   }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addCount}>Add count</button>
        {child}
    </div>
  )
}
