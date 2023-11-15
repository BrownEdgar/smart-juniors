import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import axios from 'axios'
import Child from './Child';

import './App.scss';

export default function App() {
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
  )
}





