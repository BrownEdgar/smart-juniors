import { Fragment, useEffect, useState } from 'react'
import axios from './axios'
import Modal from './Modal'
import classNames from 'classnames'

import './App.scss'



export default function App() {
    const [todos, setTodos] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)
    const [currentTitle,setCurrentTitle] = useState(null)

    const handleOpen=()=>{
        setIsOpen(!isOpen)
    } 
    const handleDeleteItem = (index) =>{
        setTodos(todos.toSpliced(index,1))
        handleOpen()
    }
    useEffect(()=>{
        axios('todos')
        .then(res => setTodos(res.data))
            
    },[])



  return (
    <div className='App'>
        { isOpen 
           ?(
               <Modal handleOpen={handleOpen}>
              <h2>If you want to delete userid No{currentTitle} please press enter</h2>
              <button onClick={()=> handleDeleteItem(currentIndex)}>Enter</button>
              <button onClick={handleOpen}>Cancel</button>
            </Modal>
           ):null
        }
           <div className='Todos'>
             {
                 todos.map((elm,index)=>{
                     return(
                         <Fragment key={elm.id}>
                            <div>
                            <button onClick={()=>{
                                handleOpen();
                                setCurrentIndex(index)
                                setCurrentTitle(elm.id)
                            }}>Click</button>   
                            <p>{elm.id}</p>
                            <p>{elm.title}</p>
                            </div>
                        </Fragment>
                    )
                })
            }
           </div>
    </div>
  )
}
