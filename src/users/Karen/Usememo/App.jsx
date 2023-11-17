import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import axios from 'axios'
import './App.scss'
import Child from './Child'



export default function App() {
    const [photos, setPhotos] = useState([])
    const [value, setValue] = useState('')
    const [isPanding,startTransition] = useTransition()
    const [count, setCount] = useState(0)

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/photos',{
            params:{
                _limit:20,
                setTimeout:4000
            }
        })
        .then(res => setPhotos(res.data))
    },[])

      const handleSubmit=(e)=>{
        e.preventDefault()
          startTransition(()=>setValue(e.target[0].value))
        }  
      
    const photosFilter = useCallback(
        (data,search)=> data.filter(elm=>elm.title.includes(search)),
        [value],
      )
    
   const handleClick=()=>{
    setCount(count+1)
   }


  const child=  useMemo(() => <Child photos={photosFilter(photos,value)}/>, [photos,value,photosFilter])

  return (
    <>  
    <h1>{count}</h1>
    <button onClick={handleClick}>Add count</button>
       <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit"  value='save'/>
       </form>
        <div className='Flex'>
       {isPanding && <h1>Loading...</h1>}
        {child}
    </div>
    </>
  )
}
