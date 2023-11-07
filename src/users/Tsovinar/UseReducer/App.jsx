import React, { useReducer } from 'react'
import reducer, {initialState} from "./reducer"
import {GET_POSTS, FILL_INPUTValue, ADD_ACTIONS, MIX_ARR, DELETE_ID} from './actionTypes'
import axios from "axios"


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPosts = () =>{
        axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => dispatch({type: GET_POSTS, payload:{posts: res.data}}))
    
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
        // e.target.reset()
    }

  return (
    <div>
        <pre>
            {
                state.posts.map((elm, ind) => <li key={ind}>{elm.title}<span >x</span></li>)
            }
        </pre>
        <h2>{JSON.stringify(state.arr)}</h2>
        <h2>{JSON.stringify(state.developers)}</h2>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={mixArr}>Mix array</button>
        <form onSubmit={handleSubmit}action="">
            <input type="text"  placeholder='enter name' id='developer'/>
            <input type="submit" placeholder='sumbit'/>
        </form>
</div>
  )
}
