import React from 'react'
import { useEffect, useState, Fragment } from 'react'
import axios from "axios"
import "./App.scss"
import Modal from './Modal'


export default function App() {
  const [todos, setTodos] = useState([])
  const [isOpen, setIsopen] = useState(false)
  const toggleModal = () => setIsopen(!isOpen)
  const [currentIndex, setCurrentIndex] = useState(null)
  const deleteItem = () => {
    setTodos(todos.toSpliced(currentIndex, 1)),
      toggleModal()
  }

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "posts",
      params: {
        _limit: 6
      }
    })
      .then(res => setTodos(res.data))

  }, [])

  return (
    <div className='App'>
      {
        isOpen ? (
          <Modal toggleModal={toggleModal} theme="dark" >
            <h2>Are you sure to delete the selected item?</h2>
            <button onClick={deleteItem}>delete</button>
            <button onClick={toggleModal}>cancel</button>
          </Modal>
        ) : null
      }
      <div className="todos">
        {
          todos.map((post, ind) => {
            return (
              <Fragment key={post.id}>
                <div >
                  <button onClick={() => {
                    toggleModal(),
                      setCurrentIndex(ind)
                  }}>
                    <span className='delete'>x</span>
                  </button>
                  <h2>id: {post.id}</h2>
                  <p><span className='title'>Title:</span> {post.title.toUpperCase()}</p>
                  <p><span className='title'>Content:</span> {post.body.replace(post.body[0], post.body[0].toUpperCase())}</p>
                </div>
              </Fragment>
            )
          })
        }
      </div>

    </div>

  )
}
