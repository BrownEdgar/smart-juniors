import { useEffect, useRef, useState } from 'react'
import "./TodoList.scss"
import classNames from 'classnames'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import Group from '../Group/Group'

export default function TodoList({ todos, setTodos, toggleModal, mark, setMark, clearMark, deleteTodo }) {
  const [openEdit, setOpenEdit] = useState(false)
  const [editTodo, setEditTodo] = useState(null)
  const editTitle = useRef(null)
  const editComment = useRef(null)

  useEffect(() => {
    if (openEdit) {
      editTitle.current.value = editTodo?.title
      editComment.current.value = `${editTodo?.comment}\n${editTodo?.date} changed!`
    }
  }, [openEdit])

  const editModal = () => {
    setOpenEdit(!openEdit)
  }

  const editTodoSub = (e) => {
    e.preventDefault()
    const hasTodo = todos.filter(todo => editTodo.id !== todo.id).some((todo) => {
      return todo.title.trim() === editTitle.current.value.trim()
    });

    if (!hasTodo && editTitle.current.value.trim() !== '') {
      setTodos(todos.map(todo => {
        if (todo.id !== editTodo.id) {
          return todo
        } else {
          return editTodo
        }
      }))
      editModal()
    } else {
      setMark(true)
      editTitle.current.style.color = "red"
    }
  }

  const changeTodo = (e) => {
    e.preventDefault();

    if (e.target === editTitle.current) {
      const hasTodo = todos.filter(todo => editTodo.id !== todo.id).some((todo) => {
        return todo.title.trim() === editTitle.current.value.trim()
      });
      if (editTitle.current.value.trim() !== "") {
        setMark(hasTodo)
        e.target.style.color = hasTodo ? "red" : "green";
      }
    }

    const date = new Date()
    setEditTodo({
      ...editTodo,
      title: editTitle.current.value,
      comment: editComment.current.value,
      date: `${date.toDateString()} ${date.toLocaleTimeString()}`
    })
  }

  const trashMouseOver = (e) => {
    e.target.classList.add("fa-beat")
    e.target.classList.add("_color")
  }
  const trashMouseLeave = (e) => {
    e.target.classList.remove("fa-beat")
    e.target.classList.remove("_color")
  }

  return (
    <>
      {
        openEdit
          ? <Modal clearMark={clearMark} toggleModal={editModal}>
            <Form onSubmit={editTodoSub} setOpenEdit={setOpenEdit}>
              <label htmlFor="edittitle">Edit title:</label>
              <div id='titlebox'>
                <input type="text" id='edittitle' ref={editTitle} placeholder='Edit your todo title' onChange={(e) => changeTodo(e)} autoComplete='off' required autoFocus />
                <i className={classNames("fa-solid", {
                  "fa-beat show": mark || mark === false,
                  "fa-circle-check ok": mark !== null && !mark,
                  "fa-circle-exclamation wrong": mark
                })}></i>
              </div>
              <label htmlFor="editcomment">Edit comment:</label>
              <textarea name="" id="editcomment" ref={editComment} cols="50" rows="10" placeholder='Edit your todo comment ' onChange={(e) => changeTodo(e)}></textarea>
              <Group>
                <input type="reset" value="clear" />
                <input type="submit" value="save" />
              </Group>
            </Form>
          </Modal>
          : null
      }
      <div className='TodoList'>
        <div className='TodoList-bar'>
          <h1>My To Do List</h1>
          <span className='TodoList-bar_count'>Count: {todos.length}</span>
          <button className='TodoList-bar_btn' onClick={toggleModal}>Add new todo</button>
        </div>
        <div className='TodoList-body'>
          <ul>
            {
              todos?.map(todo => {
                return (
                  <li key={todo.id}>
                    <div className='_title'>
                      <h2>{todo.title}</h2>
                      <span>{todo.date}</span>
                    </div>
                    <div className='_buttons'>
                      <i className="fa-solid fa-pen" onMouseOver={(e) => trashMouseOver(e)} onMouseLeave={(e) => trashMouseLeave(e)} onClick={() => {
                        editModal()
                        setEditTodo(todo)
                      }}></i>
                      <i className="fa-solid fa-trash" onMouseOver={(e) => trashMouseOver(e)} onMouseLeave={(e) => trashMouseLeave(e)} onClick={() => deleteTodo(todo.id)}></i>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
