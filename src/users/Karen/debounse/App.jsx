import { useState } from 'react'
import './App.scss'

export default function App() {
  const [price, setPrice] = useState(1000)
  const [numbers, setNumbers] = useState (()=>{
    return  new Array(10000)
    .fill()
    .map(()=>Math.round(Math.random()*(100000-1000)+1000))
  })

  const [timeOutId, setTimeOutId] = useState(null)

  const handleChange=(e)=>{
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    const s = setTimeout(()=>{
      setPrice(e.target.value)
    },500)
    setTimeOutId(s)
  }

  const filteredArray=()=> numbers.filter(elm => elm>= price)
  return (
    <div>
      <h1>price:{price}</h1>
        <input type="range" min={100} max={100000} onChange={(handleChange)} step={1000} />
        <ul>
            {
               filteredArray().map((elm,index) => <li key={index}>{elm}</li>)
            }
        </ul>
    </div>
  )
}
