import React, { useState, useEffect } from 'react'
import List from './Components/List';
import "./App.scss"

const people = [
  { id: 1, name: 'Wes', year: 1988, },
  { id: 2, name: 'Kait', year: 1986, },
  { id: 3, name: 'Irv', year: 1970, },
  { id: 4, name: 'Lux', year: 2015, }
];


function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [data, setData] = useState(people)
  
  const sortedByYear = () => {
    setToggle(!toggle)
    if (toggle) {
      setData(data.toSorted( (a, b) => a.year - b.year) )
    }else{
      setData(data.toSorted( (a, b) => b.year - a.year) )
    }
  }

  const Activeetid = () => {
    setToggle2(!toggle2)
    data.map( (elem) => {
      if (toggle2) {
        elem.isActive = true
      }else{
        elem.isActive = false
      }
    }) 
  }

  return (
    <div>
      <h1>List</h1>
      <List data={data} setData={setData} />
      <button onClick={ () => { sortedByYear() } } >Sort by year</button>
      <button onClick={ Activeetid } >Select All</button>
    </div>
  )
}

export default App