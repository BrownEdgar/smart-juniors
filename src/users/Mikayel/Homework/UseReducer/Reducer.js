import { ADD_DEVELOPER, DELETE_POST, FETCH_POSTS, REPLACE_POSTS, SHUFFLE_ARRAY } from './ActionTypes.js'

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};


export default function reducer(state, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return fetchPosts(state, action.payload)
      case ADD_DEVELOPER:
        return addDeveloper(state, action.payload);
      case SHUFFLE_ARRAY:
        return shuffleArray(state);
      case DELETE_POST:
        return deletePost(state, action.payload);
      case REPLACE_POSTS:
        return replacePosts(state);
      default:
        return state;
  }
}

const fetchPosts = (state, posts) => {
  return {
    ...state,
    actions: state.actions + 1,
    posts: posts
  };
};

const addDeveloper = (state, developer) => {
  return {
    ...state,
    actions: state.actions + 1,
    developers: [...state.developers, developer],
  };
};

const shuffleArray = (state) => {
  const shuffledArray = [...state.arr].sort(() => Math.random() - 0.5)
  return {
    ...state,
    actions: state.actions + 1,
    arr: shuffledArray,
  };
};

const deletePost = (state, index) => {
  const updatedPosts = state.posts.filter((_, i) => i !== index);
  return {
    ...state,
    actions: state.actions + 1,
    posts: updatedPosts,
  };
};

const replacePosts = (state) => {
  const replacedPosts = replacePostIdsWithNumbers(state);
  return {
    ...state,
    actions: state.actions + 1,
    posts: replacedPosts,
  }
};

const replacePostIdsWithNumbers = (state) => {
  const replacedPosts = state.posts.map((post, index) => {
    if (index < state.arr.length) {
      post.id = state.arr[index];
    }
    return post;
  });
  return replacedPosts;
};