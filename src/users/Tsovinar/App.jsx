import React, { useState } from 'react'

import "./App.css"

export default function App() {

  const [data, setData] = useState([
    { id: 1, name: "Wes", year: 1988 },
    { id: 2, name: "Kait", year: 1986 },
    { id: 3, name: "Irv", year: 1970 },
    { id: 4, name: "Lux", year: 2015 }])


  const deleteItem = (ind) => {
    setData(data.toSpliced(ind, 1))
  }


  const sortItems = () => {
    setData(data.toSorted((a, b) => a.year > b.year ? 1 : -1))
  }

  const addItem = () => {
    const copy = data.slice().forEach(elem => elem.isActive = true);
    setData(copy)

  }

  return (
    <div className='hw'>
      <h1>Homework</h1>
      <button className='sort' onClick={sortItems}>Sort by year</button>
      <button className='add' onClick={addItem}>Add info</button>

      {
        data.map((elm, ind) => {
          return (
            <li className='list' key={elm.id}>
              id:{elm.id}, name:{elm.name}, year:{elm.year},  {elm.isActive ? 'isActive: true' : null}
              <span className="delbtn" onClick={() => deleteItem(ind)}>x</span>
            </li>
          )
        })
      }

    </div>
  )

}