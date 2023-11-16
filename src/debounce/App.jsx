import React, { useState } from 'react'

export default function App() {
    const [numbers, setNumbers] = useState(()=>{
        return new Array(10000)
        .fill()
        .map(() => Math.round(Math.random() * (1000000 -1000) + 1000))
    })
    const[price, setPrice] =  useState(1000)
    const [timeoutId, settiemoutId]=  useState(null) 

    const handleChange = (e) =>{
        setPrice(e.target.value)
        if(timeoutId){
        clearTimeout(timeoutId)
    }
    const s = setTimeout(()  => {
        setPrice(e.target.value)
    },200)
    settiemoutId(s)
    }
    

    const filteredArray = () =>  numbers.filter(elem => elem >= price)
    

  return (
    <div>
        <h1>{price}</h1>
        <input type="range" min={1000}  max ={10000} step={1000} onChange={handleChange} />
        <ul>
            { 
                filteredArray().map((elem, ind) => <li key={ind}>{elem}</li>)
            }
        </ul>
    </div>
  )
}
