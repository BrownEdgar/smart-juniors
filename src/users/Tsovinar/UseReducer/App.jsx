import React, { useReducer } from 'react'
import reducer, {initialState} from "./reducer"
import {GET_POSTS, FILL_INPUTValue, ADD_ACTIONS, MIX_ARR, DELETE_ID} from './actionTypes'


export default function App() {
    const [count, dispatch] = useReducer(reducer, initialState)

    const getPosts =() =>{
        dispatch({
            type: GET_POSTS
        })
    
    }
    const mixArr = () =>{
        dispatch({
            type: MIX_ARR
        })
    }

    const handleSubmit = (e) =>{
        const {developer} = e.target
        e.preventDefault()
        dispatch({
            type: FILL_INPUTValue
        })
        
    }

  return (
    <div>
        <h2>{JSON.stringify(initialState)}</h2>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={mixArr}>Mix array</button>
        <form onSubmit={handleSubmit}action="">
            <input type="text"  placeholder='enter name' id='developer'/>
            <input type="submit" placeholder='sumbit'/>
        </form>
</div>
  )
}
