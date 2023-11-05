import React, { useReducer, useState } from "react";
import axios from "axios";
import { ALL_DONE, ADD_TODO, REMOVE_BY_ID, FETCH_TODOS } from './ActionTypes.js'
import todoReducer, { initialState } from './Reducer.js'
import ToDos from "./Components/ToDos.jsx";
import './App.scss'

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [jsonTodos, setJsonTodos] = useState(null);

  const fetchToDos = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: FETCH_TODOS, payload: response.data });
    });
  };

  const alldone = () => {
    dispatch({ type: ALL_DONE });
  };

  const addTodo = todo => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toJson = () => {
    const jsonTodos = JSON.stringify(todos, null, 2);
    setJsonTodos(jsonTodos);
  };

  return (
    <div className="App">
      <button className='button' onClick={fetchToDos}>Fetch ToDos</button>
      <ToDos todos={todos} onDelete={(id) => dispatch({ type: REMOVE_BY_ID, payload: id })} />
      <button className='button' onClick={alldone}>All Done</button>
      <button className='button' onClick={() => addTodo({ 
        userId: 1, 
        id: todos.length + 1, 
        title: "New Todo", 
        completed: false 
        })}>
        Add Todo
      </button>
      <button className='button' onClick={toJson}>Convert to JSON</button>
      {jsonTodos && <pre>{jsonTodos}</pre>}
    </div>
  )
}