import { useEffect, useState } from "react";
import axios from 'axios'
import Child from "./Child";
import classNames from 'classnames'


import './App.scss'

export default function App() {
     const handleClick=()=>{
        alert('001')
     }

    return(
      <div>
        <Child title='Change' variant={'danger'} onClick={handleClick}/>
      </div>
    )
}

{/* <div>
<h1 className={classNames('title',{
    active:isActive
})}>Lorem ipsum dolor sit.</h1>
<button onClick={()=>setIsActive(!isActive)}>Change</button>
<Child title='specific button' variant={'danger'} onClick={handleClick}
title2='spec buton' variant2={'success'} />
</div> */}

// const [isActive, setIsActive] = useState(false)
// const handleClick=()=>{
//     console.log('001');
// }


    // const [count, setCount] = useState(0)
    // const [data, setData] = useState([])
  

 
// useEffect(()=>{
//     axios('https://jsonplaceholder.typicode.com/users')
//     .then(res => setData(res.data))
//     .catch(err => console.log(err))
// },[])
// console.log(data);


//  useEffect(()=>{
//         axios('https://jsonplaceholder.typicode.com/comments')
//         .then(res => setData(res.data))
//         .catch(err=>console.log(err))
//         console.log(data);
//      },[])
    