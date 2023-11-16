import { useState } from "react"
import "./App.scss"
import FetchButton from "./components/FetchButton/FetchButton"

export default function App() {
  const [char, setChar] = useState("A")

  const handleClick = (e) => {
    setChar(e.target.textContent)
    e.target.classList.add("active")
    let next = e.target?.nextElementSibling;
    let prev = e.target?.previousElementSibling;

    while("BUTTON" === next?.nodeName || prev?.nodeName) {
      if(next) {
        next.classList.remove("active")
        next = next?.nextElementSibling
      }
      if(prev) {
        prev.classList.remove("active")
        prev = prev?.previousElementSibling
      }
    } 
  }

  return (
    <div className='App'>
      <div className="App-header">
        <h1>{char}</h1>
        <button onClick={(e) => handleClick(e)}>A</button>
        <button onClick={(e) => handleClick(e)}>B</button>
        <button onClick={(e) => handleClick(e)}>C</button>
      </div>
      <FetchButton/>
    </div>
  )
}
