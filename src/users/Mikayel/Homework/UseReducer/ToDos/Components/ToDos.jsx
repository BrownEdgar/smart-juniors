import React from "react";

export default function ToDos({ todos, onDelete }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button className="button_delete" onClick={() => onDelete(todo.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}