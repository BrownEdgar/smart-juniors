import React, { useReducer, useState } from 'react'
import { ADD_DEVELOPER, DELETE_POST, FETCH_POSTS, REPLACE_POSTS, SHUFFLE_ARRAY } from './ActionTypes.js'
import axios from "axios";
import Posts from "./Components/Posts";
import Developers from "./Components/Developers";
import reducer, { initialState } from './Reducer.js'
import './App.scss'


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [developerName, setDeveloperName] = useState('');

  const fetchPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => {
      dispatch({ type: FETCH_POSTS, payload: response.data });
    });
  };

  const handleDeveloperNameChange = (e) => {
    setDeveloperName(e.target.value);
  };

  const addDeveloperHandler = () => {
    if (developerName.trim() !== '') {
      dispatch({ type: ADD_DEVELOPER, payload: developerName });
      setDeveloperName('');
    }
  };

  return (
    <div className='container'>
      <div className='actions'>
        <button className='button' onClick={fetchPosts}>Fetch Posts</button>
        <input
          className='input'
          type="text"
          placeholder="Enter developer name"
          value={developerName}
          onChange={handleDeveloperNameChange}
        />
        <button className='button' onClick={addDeveloperHandler}>Add Developer</button>
        <button className='button' onClick={() => dispatch({ type: SHUFFLE_ARRAY })}>
          Shuffle Array
        </button>
        <button className='button' onClick={() => dispatch({ type: REPLACE_POSTS })}>
          Replace Posts
        </button>
      </div>
      <div className='posts-container'>
        <Posts posts={state.posts} onDelete={(index) => dispatch({ type: DELETE_POST, payload: index })} />
      </div>
      <div className='developers-list'>
        <Developers developers={state.developers} />
      </div>
      <div className="actions">
        <h3>Shuffled Array:</h3>
        {state.arr.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>
      <div className="actions">
        <h3>Number of Actions: {state.actions}</h3>
      </div>
    </div>
  )
}
