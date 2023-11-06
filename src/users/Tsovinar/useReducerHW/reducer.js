import React from 'react'
import { ALL_DONE, REMOVE_ID , ADD_TODO, TO_JSON} from './actions'

export const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      }
]


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_DONE: return allDone(state);
    case REMOVE_ID: return removeId(state, action.payload.ind);
    case ADD_TODO: return addTodo(state, action.payload);
    case TO_JSON: return toJson(state) 
  
    default: return state
       
  }
}

function allDone(state) {
    state.map(elm => elm.completed = true)
    return[...state]
}

function removeId(state, ind) {
    state.splice(ind, 1)
    return [...state]
}

function addTodo(state, payload) {
    return[
        ...state,
        payload
    ]
}

