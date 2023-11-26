import React, { useState,useEffect,Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './App.scss'
import Modal from './Modal'

function App() {
  const [posts, setPosts] = useState([])
  const [isopen, setIsOpen] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(null)
  const toggleModal = () => setIsOpen(!isopen)
  const deletePostByIndex = (index) => {
    setPosts(posts.toSpliced(index, 1))
    toggleModal();
  }
  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts',{params:{_limit:20}})
         .then(res => setPosts(res.data))
         .catch(err => console.log(err))
  }, [])
  
  return(
    <div className='App' >
      {isopen 
        ?(
          <Modal toggleModal={toggleModal} >
            <h1>&#9888; Warning</h1>
            <hr />
            <br />
            <h2>Are you sure?</h2>
            <button onClick={() => deletePostByIndex(currentIndex)} >Yes</button>
            <button onClick={toggleModal} >No</button>
          </Modal> 
        ): null 
      }
      <div className="todos">
      {
        posts.map((todo,index) => {
          return (
            <Fragment key={todo.id}>
              <div>
                <button onClick={() => {
                  toggleModal();
                  setcurrentIndex(index);
                }} >&#215;</button>
                <p>{todo.title}</p>
                <br />
                <p>{todo.body}.</p>
              </div>
            </Fragment>
          )
        })
      }
      </div>
    </div>
  )
}




export default App
