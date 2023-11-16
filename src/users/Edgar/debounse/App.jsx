import { useState } from 'react'


export default function App() {
  const [price, setprice] = useState(1000)
  const [numbers] = useState(() => {
    return new Array(10000)
      .fill()
      .map(() => Math.round(Math.random() * (1000000 - 1000) + 1000))
  })

  const [timeOutId, setTimeOutId] = useState(null)

  const handlechange = (e) => {

    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    const s = setTimeout(() => {
      setprice(e.target.value)
    }, 200)
    setTimeOutId(s)
  }

  const filteredArray = () => numbers.filter(elem => elem >= price)

  return (
    <div>
      <h1>price: {price}</h1>
      <input type="range" min={1000} max={1000000} onChange={handlechange} step={1000} />
      <ul>
        {
          filteredArray().map((elem, index) => <li key={index}>{elem}</li>)
        }
      </ul>
    </div>
  )
}
