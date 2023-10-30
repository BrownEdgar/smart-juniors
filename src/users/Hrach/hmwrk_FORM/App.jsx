/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react'
import Modal from './Modal';
import "./App.scss"
export default function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target
    if (!users.includes(username.value)) {
      setUsers([...users, username.value]);
      e.target.reset()
    } else {
      alert("pleze check the list")
    }
  }
  const toggleModal = () => setisOpen(!isOpen)
  const deletUserByIndex = (index) => {
    setUsers(users.toSpliced(index, 1));
    toggleModal()
  }

  return (
    <div className='App'>
      {isOpen
        ? (
          <Modal toggleModal={toggleModal}>
            <h2>{users.length} - 1 ?</h2>
            <button onClick={() => deletUserByIndex(currentIndex)}>Yes</button>
            <button onClick={toggleModal}>No</button>
          </Modal>
        ) : null
      }
      <form onSubmit={handleSubmit} >
        <label htmlFor="username">Users <span className='length'>{users.length}</span></label>
        <input type="text" id="username" required />
        <input type="submit" value="Add user" />
      </form>
      <div className='App-child'>
        {users.map((elem, index) => {
          return (
            <Fragment key={index}>
              <div className='App-items class'>
                <ul>
                  <li>{elem}</li>
                  <button onClick={() => {
                    toggleModal();
                    setcurrentIndex(index)
                  }}><i className="fa-solid fa-trash-can"></i></button>
                </ul>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
