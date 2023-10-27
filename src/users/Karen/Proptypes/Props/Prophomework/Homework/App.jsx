import axios from "axios"
import { useState,useEffect } from "react"

import './App.scss'
import Childprop from "./Childprop"
import Childbtn from "./Childbtn"


export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err=>console.log(err))
    console.log(data);
  },[])
  return (
    <div>
        <h1>KK</h1>
        <Childprop data={data}/>
        <Childbtn title='Click Me' variant={'Send'}/>
    </div>
  )
}
