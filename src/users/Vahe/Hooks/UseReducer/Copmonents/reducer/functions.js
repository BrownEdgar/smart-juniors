export function deleteById(state, lastIndexForDel) {
  let post = state.posts.toSpliced(lastIndexForDel, 1);
  return {
    ...state,
    posts: post,
    isopen: false,
    actions: state.actions + 1,
  };
}

export function closeModal(state) {
  return {
    ...state,
    isopen: false,
    actions: state.actions + 1,
  };
}

export function openModal(state) {
  return {
    ...state,
    isopen: true,
    actions: state.actions + 1,
  };
}

export function fillPosts(state, posts) {
  return {
    ...state,
    posts: posts,
    actions: state.actions + 1,
  };
}

export function addDev(state, name) {
  const developers = [...state.developers];
  if (!developers.includes(name)) {
    developers.push(name);
  } else {
    return state;
  }

  return {
    ...state,
    developers,
    actions: state.actions + 1,
  };
}

export function deleteDev(state, index) {
  const developers = [...state.developers].toSpliced(index, 1);
  return {
    ...state,
    developers,
    actions: state.actions + 1,
  };
}

export function shuffleArr(state) {
  const arr = state.arr.sort(() => Math.random() - 0.5);

  return {
    ...state,
    arr,
    actions: state.actions + 1,
  };
}

export function replacePostId(state) {
  const posts = [...state.posts];
  posts.map((post, index) => {
    post.id = state.arr[index];
  });

  return {
    ...state,
    posts,
    actions: state.actions + 1,
  };
}
