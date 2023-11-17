import { useState } from 'react'
import classNames from 'classnames'
import './App.scss'




export default function App() {

const [timeOutId, setTimeOutId] = useState(null)
const [data, setData] = useState('')
const [isActive, setisActive] = useState(false)

// const handleClick=(e)=>{
// setData(e.target.value)
// }

const handleClick=(e)=>{
  if (timeOutId) {
    clearTimeout(timeOutId)
  }
  const s = setTimeout(()=>{
    setData(e.target.value)
    setisActive(!isActive)
  },100)
  setTimeOutId(s)
}


  return (
    <div className='App'>
        <form  >
            <h1>{data}</h1>
            <input type="button"  value={'A'}  onClick={handleClick} className={classNames('',{activeA:isActive})}/>
            <input type="button"  value={'B'}  onClick={handleClick} className={classNames('',{activeB:isActive})}/>
            <input type="button"  value={'C'}  onClick={handleClick} className={classNames('',{activeC:isActive})}/>
        </form>
    </div>
  )
}
