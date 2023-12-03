import { useDispatch, useSelector } from "react-redux"
import { plus } from "./features/count/countSlice";

export default function App() {
  
  const state = useSelector((state) => state)
  const dispathch = useDispatch()

  const handleClick = () => { 
    dispathch(plus())
  }
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={handleClick} >Plus</button>
    </div>
  )
}
