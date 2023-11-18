import { useContext } from "react"
import { MyContext } from "../contexts/dataContext"




export default function C() {
   const value1 = useContext(MyContext)
   

  return (
    <div>
        <h1>Component C</h1>
          {

          }    
    </div>
  )
}
