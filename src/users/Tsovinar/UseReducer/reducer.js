import {GET_POSTS, FILL_INPUTValue, ADD_ACTIONS, MIX_ARR, DELETE_ID} from './actionTypes';

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [155, 56, 665, 66, 2, 3, 7, 9, 869, 4]
}



export default function reducer(state = initialState, action){
switch (action.type) {
    case GET_POSTS: return getPost(state, action.payload.posts)  
    case MIX_ARR: return sortArr(state) 
    case FILL_INPUTValue: return fillInput(state)
  
    default: return "error"
       
}
}
function getPost(state, posts) {
    console.log(posts)
    return {
    ...state,
    posts,
    actions: state.actions +  1
}
        
    
}
function sortArr(state){
   state.arr  = state.arr.toSorted((a, b)  => Math.random() > .5 ? 1: -1)
   state.actions  = state.actions + 1 
   return {...state}
   
}

function fillInput(state){
   state.developers.push(developer.value)
    state.actions  = state.actions + 1 
    return {...state}
}