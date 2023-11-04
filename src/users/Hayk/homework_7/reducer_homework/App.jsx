import { useEffect, useReducer, useRef, useState } from 'react'

import reducer, { initialState } from './reducer/reducer'
import * as Type from "./reducer/actionTypes";
import Modal from './components/Modal/Modal';
import Todos from './components/Todos/Todos';

import "./App.scss"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [changeHeight, setChangeHeight] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [todosJson, setTodosJson] = useState([])

  const inputRef = useRef(null)
  const appHead = useRef(null)
  const appSubHead = useRef(null)

  const toggleModal = () => setIsOpen(!isOpen)

  useEffect(() => {
    const { clientHeight: cl1 } = appHead.current;
    const { clientHeight: cl2 } = appSubHead.current;
    setChangeHeight(cl1 + cl2)
  }, [])

  return (
    <div className='App'>
      {
        isOpen
          ? <Modal toggleModal={toggleModal}>
            <div>
              <pre>{todosJson}</pre>
            </div>
          </Modal>
          : null
      }
      <div className='App-header' ref={appHead}>
        <h1>My To do list</h1>
        <form
          onSubmit={(event) => {
            dispatch({
              type: Type.ADD_TODO,
              payload: {
                title: inputRef.current.value,
                event 
              }
            })
          }}>
          <input type="text" ref={inputRef} id='titleinput' placeholder='Enter todo title...' />
          <button>add Todo</button>
        </form>
      </div>
      <div className='App-subheader' ref={appSubHead}>
        <div className='App-subheader_panel'>
          {/* All todos gets complated true */}
          <button onClick={() => dispatch({ type: Type.ALL_DONE })}>Complate All</button>
          {/* Remove all complated todos */}
          <button onClick={() => {
            dispatch({
              type: Type.REMOVE_ALL_DONE
            })
          }}>Delete Complated todos</button>
          {/* Show Todo as json */}
          <button onClick={() => {
            dispatch({
              type: Type.TO_JSON,
              payload: {
                setTodosJson,
                toggleModal // this added for` when todos length equal to 0 modal is not open
              }
            })
          }}>Show todo json</button>
          {/* --------------------- */}
        </div>
      </div>
      <Todos
        todos={state}
        dispatch={dispatch}
        changeHeight={changeHeight} />
    </div>
  )
}
