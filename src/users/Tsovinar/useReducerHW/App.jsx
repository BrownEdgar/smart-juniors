import React, {useReducer, useState} from 'react'
import reducer,  { initialState} from './reducer'
import { ALL_DONE, REMOVE_ID, ADD_TODO, TO_JSON } from './actions'
import "./App.scss"

export default function App() {
 const [state, dispatch] = useReducer(reducer, initialState)
 const [stringify, setStringify] = useState(false)

 const AllDone = () =>{
    dispatch({type: ALL_DONE})
 }

 const deleteID = (ind) => {
    dispatch({type: REMOVE_ID, payload: {ind: ind} })
 }

const AddTodo = () => {
    dispatch({type: ADD_TODO , payload: {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      }} )
 }

 const ToJson = () =>{
    setStringify(true)
 }

  return (
    <div className='list'>
       <h1>Todo</h1>
       <div className="list-todos">
        {
        state.map((elm, ind) => 
             <li className="list-todos_item" key={ind}>
                id:{elm.id}, title: {elm.title}, completed: {JSON.stringify(elm.completed)} 
                <button className='button' onClick={() => deleteID(ind)} >x</button>
            </li>)
        }
        </div>
        <button onClick={AllDone}>all done</button>
        <button onClick={AddTodo}>add todo</button>
        <button onClick={ToJson}>to Json</button>
        {stringify?
        <h2>{ JSON.stringify(state)}</h2>
        :null
        }
        

    </div>
  )
}
