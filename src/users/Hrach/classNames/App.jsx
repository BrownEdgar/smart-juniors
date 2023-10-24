import classNames from "classnames";
import { useState } from "react";
import Child from './Child';
export default function App () {
  const [isActive,setIsactive] = useState(false)
  return (
    <div className='classname'>
      <h1
      className={classNames("title",{
        active: isActive,
      })}>
        Lorem ipsum dolor sit.
      </h1>
      <button onClick={()=>setIsactive(!isActive)}>change class</button>
       <Child  title="Button" variant="success"/>
    </div>
  )
}