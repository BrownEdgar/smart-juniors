import { useState } from "react"
import classNames from 'classnames'
import Child from "./Child"


export default function App() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = (e) => {
        console.log('handleClick')
    }

  return (
    <div>
        <h1
            className={classNames("title", {
                active: isActive
            })}
        >Lorem ipsum dolor sit.</h1>
        <button onClick={() => setIsActive(!isActive)}>Change class</button>
        <Child title={"specific button"} variant={'success'} onClick={handleClick} />
    </div>
  )
}