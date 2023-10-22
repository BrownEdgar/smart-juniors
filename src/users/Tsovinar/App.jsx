import React, { useEffect } from 'react'
import  { useState} from 'react'
import "./App.css"

export default function App() {
  
const [data, setData] = useState([
  {id: 1, name: "Wes", year: 1988},
  {id: 2, name: "Kait", year: 1986},
  {id: 3, name: "Irv", year: 1970},
  {id: 4, name: "Lux", year: 2015}])

 
   const deleteItem = (ind) =>{
    setData([...data].toSpliced(ind, 1))
   } 

    
    const sortItems = () => {
    const newdata = [...data].toSorted((a, b) => a.year > b.year ? 1 : -1) 
    setData(newdata)
   }

   const addItem = () => {
    const addData = data.map(elm => ({...elm, isActive: "true"} )) 
    console.log(addData)
    setData(addData)
    console.log(data)
   }
  
    return(
    <div className='hw'>
      <h1>Homework</h1>
      <button className='sort' onClick = {sortItems}>Sort by year</button>
      <button className='add' onClick = {addItem}>add</button>

      {
        data.map((elm,ind) => <li className='list' key = {ind}>id:{elm.id}, name:{elm.name}, year:{elm.year},  {elm.isactive ? 'isactive: true' : false}<span className="delbtn"onClick = {() => deleteItem(ind)} >x</span></li> )
      }
      
    </div>
  )
    
    }