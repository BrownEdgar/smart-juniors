import { DELETE_POST, GET_POSTS, MIX_ARRAY, REPLACE_ID, SAVE_USER } from './actionTypes';


// `state` ունենալ  այս տեսքով
export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]

}


export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_POSTS: return getPostAction(state, action.payload.posts)
    case SAVE_USER: return saveUser(state, action.payload)
    case MIX_ARRAY: return mixedArr(state)
    case REPLACE_ID: return replaceId(state)
    case DELETE_POST: return deletePost(state, action.payload.postId)
    default: return state
  }
}
function saveUser(state, payload) {
  state.developers.push(payload.name)
  state.actions += 1
  return { ...state }
}

function mixedArr(state) {
  state.actions += 1
  state.arr = state.arr.toSorted(() => Math.random() > .5 ? 1 : -1)
  return { ...state }
}

function replaceId(state) {
  state.posts.map((post, index) => {
    post.id = state.arr[index]
  })
  state.actions += 1
  return { ...state }
}

function getPostAction(state, posts) {
  return {
    ...state,
    posts,
    actions: state.actions + 1
  }
}

function deletePost(state, postIdToDelete) {
  const updatedPosts = state.posts.filter(post => post.id !== postIdToDelete);

  return {
    ...state,
    posts: updatedPosts,
    actions: state.actions + 1
  };
}