import { useEffect, useRef, useState } from 'react'
import Modal from './components/Modal/Modal'
import Form from './components/Form/Form'
import "./App.scss"
import Group from './components/Group/Group'
import TodoList from './components/TodoList/TodoList'
import classNames from 'classnames'

export default function App() {
  const [todos, setTodos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [mark, setMark] = useState(null)
  const titleInput = useRef(null)


  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const clearMark = () => setMark(null)

  const checkTitle = (e) => {
    if (!todos.length) {
      return 0
    }

    const hasTodo = todos.some((todo) => {
      return todo.title.trim() === e.target.value.trim()
    });

    const { value } = e.target;

    if (value.trim() !== "") {
      setMark(hasTodo)
      e.target.style.color = hasTodo ? "red" : "green";
    }
  }

  useEffect(() => {
    const delMark = setTimeout(() => {
      if (mark || mark === false) {
        clearMark()
        titleInput.current.style.color = "white"
      }
    }, 5000);
    return () => {
      clearTimeout(delMark)
    }
  }, [mark])



  const addTodo = (e) => {
    e.preventDefault();

    const { title, comment } = e.target;

    const hasTodo = todos.some((todo) => {
      return todo.title.trim() === title.value.trim()
    });

    if (!hasTodo && title.value.trim() !== '') {
      const date = new Date()
      const newTodo = {
        id: Date.now(),
        title: title.value.trim(),
        comment: comment.value.trim(),
        date: `${date.toDateString()} ${date.toLocaleTimeString()}`,
        complated: false
      }

      setTodos([...todos, newTodo])
      toggleModal()
    } else {
      setMark(true)
      titleInput.current.style.color = "red"
    }
  }

  return (
    <div className='App'>
      {
        isOpen
          ? <Modal clearMark={clearMark} toggleModal={toggleModal}>
            <Form onSubmit={addTodo}>
              <label htmlFor="title">Title:</label>
              <div id='titlebox'>
                <input type="text" id='title' placeholder='Enter your todo title' onBlur={checkTitle} autoComplete='off' ref={titleInput} required autoFocus />
                <i className={classNames("fa-solid", {
                  "fa-beat show": mark || mark === false,
                  "fa-circle-check ok": mark !== null && !mark,
                  "fa-circle-exclamation wrong": mark
                })}></i>
              </div>
              <label htmlFor="comment">Your comment:</label>
              <textarea name="" id="comment" cols="50" rows="10" placeholder='Enter your todo comment here...'></textarea>
              <Group>
                <input type="reset" value="clear" />
                <input type="submit" value="add" />
              </Group>
            </Form>
          </Modal>
          : null
      }
      <TodoList todos={todos} setMark={setMark} setTodos={setTodos} mark={mark} clearMark={clearMark} toggleModal={toggleModal} deleteTodo={deleteTodo} />
    </div>
  )
}
