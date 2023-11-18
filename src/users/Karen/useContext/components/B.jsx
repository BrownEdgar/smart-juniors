import React, { useContext } from 'react'
import { MyContext } from '../contexts/dataContext'

export default function B() {
    const value=useContext(MyContext)
  return (
    <div className='DataPrev'>
        <h1>Component B</h1>
         <>  { 
            value.data.map(elm=>{
                return(
                    <h2 key={elm.id} className='Data'>{elm.username} <span onClick={()=>value.deleteData(elm.id)} className='DataRemove'>&#10006;</span>
                    <p>{elm.name}</p>
                    </h2>
                )
            })
            }
            
        </>
        <div>
        <button onClick={value.getData} className='Add'>Add</button>
        {/* <button onClick={value.deleteData} className='Remove'>Remove</button> */}
        </div>
    </div>
  )
}
