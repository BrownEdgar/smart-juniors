import { useState } from "react"
import "./App.scss"
import FetchButton from "./components/FetchButton/FetchButton"
import classNames from 'classnames'

const arr = ["A", "B", "C"]

export default function App() {
  const [char, setChar] = useState(arr[0])

  const handleClick = (e) => {
    setChar(e)
  }

  return (
    <div className='App'>
      <div className="App-header">
        <h1>{char}</h1>
        {arr.map(elem => {
          return (
            <button
              key={elem}
              className={classNames({
                active: elem === char
              })}
              onClick={() => handleClick(elem)}>
              {elem}
            </button>
          )
        })}

      </div>
      <FetchButton />
    </div>
  )
}
