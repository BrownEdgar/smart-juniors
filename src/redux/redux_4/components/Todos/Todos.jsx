import { useSelector } from "react-redux"
import { getAllTodos } from "../../features/todos/todosSlice"

import "./Todos.scss"

export default function Todos() {
  const todos = useSelector(getAllTodos)
  return (
    <div className='Todos'>
      {
        todos.map(todo => {
          return (
            <div key={todo.id} className="_item">
              <h2 className="_title">{todo.title}</h2>
              <p className="_description">{todo.description}</p>
              <p className="_author">Author: {todo.author}</p>
            </div>
          )
        })
      }
    </div>
  )
}
