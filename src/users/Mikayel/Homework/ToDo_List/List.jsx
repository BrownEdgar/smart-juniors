import React from 'react'
import './List.scss'

export default function List({ todos, toggleTodo, openEditModal, deleteTodo }) {
    return (
        <div className='List'>
            <ul className='List-ul'>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={todo.checked ? 'checked' : ''}
                        onClick={() => toggleTodo(index)}
                    >
                        {todo.text}
                        <span className="edit" onClick={(e) => openEditModal(e, index)}>
                            <i className="fa fa-pencil"></i>
                        </span>
                        <span className="close" onClick={(e) => deleteTodo(e, index)}>
                            <i className="fa fa-close"></i>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
