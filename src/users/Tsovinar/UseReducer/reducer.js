import {GET_POSTS, FILL_INPUTValue, ADD_ACTIONS, MIX_ARR, DELETE_ID} from './actionTypes';
import axios from "axios"
export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [155, 56, 665, 66, 2, 3, 7, 9, 869, 4]
}



export default function reducer(state = initialState, action){
switch (action.type) {
    case GET_POSTS: return getPostsJson(initialState)  
    case MIX_ARR: return sortArr(initialState) 
    case FILL_INPUTValue: return fillInput(initialState)
  
    default: return "error"
       
}
}
function getPostsJson(state) {
    axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => state.posts = res.data)
    state.actions  = state.actions+1 
    return {...state}
    
   
     
    
}
function sortArr(state){
    const newArr = state.arr.toSorted((a, b)  => a > b ? 1: -1)
   state.arr = newArr
   state.actions  = state.actions+1 
   console.log(initialState)
   return {...state}
   
}


function fillInput(state){
    state.developers = developer.value
    state.actions  = state.actions+1 
    return {...state}
}