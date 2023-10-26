import React from 'react'
import { useEffect, useState, Fragment} from 'react'
import axios from "axios"
import "./App.scss"
import Modal from './Modal'


export default function App() {
    const [todos, setTodos] = useState([])
    const[isOpen, setIsopen] = useState(false)
    const toggleModal = () => setIsopen(!isOpen)
    const[currentIndex, setCurrentIndex] = useState(null)
    const deleteItem = (ind) => {
        setTodos(todos.toSpliced(currentIndex, 1)),
        toggleModal()}

    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/",
            url:"todos",
            params: {
                _limit: 10
            }  
        })
        .then(res => setTodos(res.data))

    }, [])

  return (
    <div className='App'>
         {
        isOpen ? (
            <Modal toggleModal = {toggleModal} theme >
                <h2>Are you sure?</h2>
                <button onClick={deleteItem}>yes</button>
                <button onClick={toggleModal}>cancel</button>
            </Modal>
                ) : null
       }
       <div className="todos">
       {
            todos.map((todo,ind) => {
                return (
                <Fragment key={todo.id}>
                    <div >
                        <button onClick= {() => {
                            toggleModal(),
                            setCurrentIndex(ind)
                            }}>x</button>
                         <p>{todo.id}</p>
                         <p>{todo.title}</p>
                    </div>
               
                </Fragment>
                )
            })
        }
       </div>
      
    </div>
    
  )
}
