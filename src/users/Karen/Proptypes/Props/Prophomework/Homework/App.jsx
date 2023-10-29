import axios from "axios"
import { useState,useEffect } from "react"
import Childprop from "./Childprop"
import Childbtn from "./Childbtn"

import './App.scss'

export default function App() {
  const [data, setData] = useState([])


  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err=>console.log(err))
    console.log(data);
  },[])

  return (
    <div className="App">
        <h1>KK</h1>
        <Childprop data={data}/>
        <Childbtn data={data} setData={setData} title='Open' variant={'Open'} title2={'Delete'} variant2={'Delet'}/>
    </div>
  )
}
