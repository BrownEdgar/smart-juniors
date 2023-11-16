import React, { useCallback, useEffect, useMemo } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.scss'
import { useTransition } from 'react'
import { startTransition } from 'react'
import Child from './Child'

export default function App() {
    console.log("app.render")
    const [photos, setPhotos] = useState([])
    const [value, setValue] = useState(null) 
    const [count, setCount] = useState(0) 

    const[isPending, startTransition] = useTransition()

    useEffect(() => {
     axios('https://jsonplaceholder.typicode.com/photos?_limit=5000')
     .then(res => setPhotos(res.data))
    
    }, [])
// memoization of function
   const photosFilter =  useCallback(
        (data, search)=>{ 
            return data.filter(elem => elem.title.includes(search))
        },
      [value],
    )
    
    // մեմոիզացնում ենք կոմպոնենտը
    const child = useMemo(() => <Child photos = {photosFilter(photos, value)}/>,[photos, value, photosFilter])
    //  վալյուի փոփոխությանը տրվում է առաչնահերթություն
    const handleSubmit =(e)=>{  
        e.preventDeafault() 
       startTransition(()=> setValue(e.target.value)) 
       
    }
  return (
   <>
   <h1>{count}</h1>
   <button onClick={() => setCount(count + 1)}>add count</button>
   <form  onSubmit={handleSubmit}>
    <input type="text" />
    <input type="submit"  value='save'/>
   </form>
    <div className='flex'>

        {isPending && <h1>Loading...</h1> }
        {child}
        
    </div>
   </>
  )
}
