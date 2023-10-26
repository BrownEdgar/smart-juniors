import { useState, useEffect, Fragment } from 'react';
import axios from 'axios'

import './App.scss'
import Modal from './Modal';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setisOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'todos',
      params: {
        _limit: 10
      }
    }).then(res => setTodos(res.data))
  }, [])

  const toggleModal = () => setisOpen(!isOpen)
  const deletPostByIndex = (index) => {
    setTodos(todos.toSpliced(index, 1));
    toggleModal()
  }
  return (
    <div className='App'>
      {isOpen
        ? (
          <Modal toggleModal={toggleModal} title={'Are you sure?'}>
            <button onClick={() => deletPostByIndex(currentIndex)}>delete</button>
            <button onClick={toggleModal}>cancel</button>
          </Modal>
        ) : null
      }
      <div className="todos">
        {
          todos.map((todo, index) => {
            return (
              <Fragment key={todo.id}>
                <div>
                  <button onClick={() => {
                    toggleModal();
                    setCurrentIndex(index)
                  }}>X</button>
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
