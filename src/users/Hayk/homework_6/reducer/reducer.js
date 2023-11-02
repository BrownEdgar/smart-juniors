import * as Actions from "./ActionTypes.js" 
import * as Call from "./callFunctions.js";

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
  postModal: false,
  postId: null
}

export default function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case Actions.GET_POSTS: return Call.getPosts(state, payload.posts)
    case Actions.SHUFFLE_ARRAY: return Call.shuffleArray(state, payload.count)
    case Actions.ADD_DEVELOPER: return Call.addDeveloper(state, payload.name)
    case Actions.REPLACE_POST_ID: return Call.replacePostId(state)
    case Actions.OPEN_POST_MODAL: return Call.openPostModal(state, payload.id)
    case Actions.CLOSE_POST_MODAL: return Call.closePostModal(state)
    case Actions.DELETE_POST: return Call.deletePost(state)
    case Actions.DELETE_DEVELOPER: return Call.deleteDeveloper(state, payload.index)
  }
}

