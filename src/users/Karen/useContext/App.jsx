import { useEffect, useState} from   'react'
import A from             './components/A'
import axios from         'axios'
import { MyContext } from './contexts/dataContext'
import                    './App.scss'



export default function App() {

const [data, setData] = useState([])
// const [data1, setData1] = useState([])


// useEffect(()=>{
//   axios('http://localhost:3000/users')
//   .then(res=>setData(res.data))
// },[])

// useEffect(()=>{
//   axios('http://localhost:3000/users')
//   .then(res=>setData(res.data))
// },[])



localStorage.setItem('data',JSON.stringify(data))
console.log(data);

const getData=()=>{ 
  axios('http://localhost:3000/users')
  .then(res=>setData(res.data))
  JSON.parse(localStorage.getItem('data1')||'[]')
}


const deleteData=()=>{
  setData(data.toSpliced(data,1))
     }

  return (
    <div>
         <MyContext.Provider value={{
            data,
            // data1,
            getData,
            deleteData
            }}>
           <A/>
        </MyContext.Provider> 
    </div>
  )
}
