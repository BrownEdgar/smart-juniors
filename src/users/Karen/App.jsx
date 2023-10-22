import { useState,useEffect } from 'react'

import './App.css'
export default function App() {
  const [isActive, setisActive] = useState(false)
  const [people, setPeople] = useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Irv', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 }
  ])

  const handleDellete=()=>{
    setPeople(people.toSpliced(people,1))
  }
  const handleSort=()=>{
    setPeople([...people].toSorted((a,b)=>a.year-b.year))
  }
const handleActive=()=>{
  setisActive(true)
}
 
  
  return (
    <div className='People'>
      <h1 className='People-h1'>Git homework</h1>
      <h2 >
        {
          people.map((elm,index)=>{
            return(
              <li className={`${isActive?'People-h2-isActive':'People-h2'}`} key={index}>Name:{elm.name}  Year:{elm.year} <span onClick={handleDellete}>&#10006;</span></li>
              )
            })
          }
      </h2>
      <button className='People-btn' onClick={handleSort}>Sort</button>
      <br/>
      <button onClick={handleActive} className='People-btn'>Activate</button>
    </div>
  )
}

