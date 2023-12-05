import * as actions from "./actionTypes.js" 
import * as func from "./functions.js"

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
  lastIndexForDel: null,
  isopen: false
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.FILL_POSTS: return func.fillPosts(state, payload.posts);
    case actions.DELETE_BY_ID: return func.deleteById(state, payload.lastIndexForDel)
    case actions.CLOSE_MODAL: return func.closeModal(state)
    case actions.OPEN_MODAL: return func.openModal(state)
    case actions.ADD_DEV: return func.addDev(state, payload.name)
    case actions.DELETE_DEV: return func.deleteDev(state, payload.index)
    case actions.SHUFFLE_ARR: return func.shuffleArr(state)
    case actions.REPLACE_POST_ID: return func.replacePostId(state)

    default: return state
  }
}

