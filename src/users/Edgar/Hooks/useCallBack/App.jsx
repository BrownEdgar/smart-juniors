<<<<<<< HEAD
import axios from 'axios'
import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'

import './App.scss';
import Child from './Child';




export default function App() {
  console.log("app.render")
  const [photos, setPhotos] = useState([]);
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 5000
      }
    })
      .then(res => setPhotos(res.data))
  }, [])

  const photosFilter = useCallback(
    (data, search) => data.filter(elem => elem.title.includes(search)),
    [value])

  const child = useMemo(() => <Child photos={photosFilter(photos, value)} />, [photos, value, photosFilter])

  const handlesubmit = (e) => {
    e.preventDefault()
    startTransition(() => setValue(e.target[0].value))
  }

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <form onSubmit={handlesubmit}>
        <input type="text" />
        <input type="submit" value='save' />
      </form>

      <div className='flex'>
        {isPending && <h1>Loading...</h1>}
        {child}
      </div>
    </>
=======
import React, { useMemo, useState } from 'react'
import Child from './Child'

export default function App() {
  const [caount, setCaount] = useState(0)


  const child = useMemo(() => <Child />, [caount])

  return (
    <div>
      <h1>Count: {caount}</h1>
      <button onClick={() => setCaount(caount + 1)}>add count</button>

      {child}

    </div>
>>>>>>> 01dbccb (fix)
  )
}
