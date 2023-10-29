import React from 'react'
import { useState} from 'react'
import "./App.scss"


export default function App() {

    const [tasklist, setTaskList] = useState([])
    const [count, setCount] = useState(0)
    
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {task}  = e.target;
        if (!tasklist.includes(task.value)) {
            setTaskList([...tasklist, task.value])
            setCount(count + 1 )
             e.target.reset()
        }else{
        
        }
    }
      const deleteTask  = (ind)  => {
        setTaskList([...tasklist.toSpliced(ind, 1)])
        setCount(count - 1)

      } 
      const deleteAll = ()  =>{
        setTaskList([...tasklist].toSpliced(0, tasklist.length))
        setCount(0)
      }

  return (
    <div>
         <form onSubmit={handleSubmit}>
             <label htmlFor="username">Todo</label>
             <input type="text" id='task' placeholder=' Task description' required/>
             <input type="submit" value="add task" />
        </form>
        <div className='tasks'> 
         <h1 className='tasks-text'>My tasks</h1>
           <p className={count > 0 ? "" : "transparent"}>You have {count} task{count > 1 ? 's' : ""}</p>
            <button className={count > 0 ? "clearall" : "transparent"} onClick={deleteAll}>Clear all</button>
           {tasklist.map((elm, ind) => 
                <li key={ind} className='tasks-list'>
                  {elm} <button className='button' onClick = {() => {deleteTask(ind)}} >x</button>
                </li>)
            }  
        </div>
    </div>
  )
}
