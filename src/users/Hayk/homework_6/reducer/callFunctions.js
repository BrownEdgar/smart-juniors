export function getPosts(state, posts) {
  return {
    ...state,
    posts,
    actions: state.actions + 1
  }
}

export function shuffleArray(state, count = 10) {
  const arr = [...state.arr]

  const randIndex = () => {
    const set = new Set()
    while(set.size < 2) {
      set.add(Math.floor(Math.random() * arr.length))
    }
    return [...set]
  }

  for(let i = 0; i  < count; i++) {
    const [first, second] = randIndex();
    [arr[first], arr[second]] = [arr[second], arr[first]]
  }

  // const shuffle = state.arr.sort(() =>  Math.random() - 0.5)
  return {
    ...state,
    arr,
    actions: state.actions + 1
  }
}

export function addDeveloper(state, name) {
  const developers = [...state.developers]
  if(!developers.includes(name)) {
    developers.push(name)
  } else {
    return state
  }
  
  return {
    ...state,
    developers,
    actions: state.actions + 1
  }
}

export function replacePostId(state) {
  const posts = [...state.posts]
  posts.map((post, index) => {
    post.id = state.arr[index]
  })

  return {
    ...state,
    posts,
    actions: state.actions + 1
  }
}

export function openPostModal(state, id) {
  return {
    ...state,
    postModal: true,
    postId: id,
    actions: state.actions + 1
  }
}

export function closePostModal(state) {
  return {
    ...state,
    postModal: false,
    postId: null,
    actions: state.actions + 1
  }
}

export function deletePost(state) {
  const posts = [...state.posts].filter(post => {
    return state.postId !== post.id
  })
  return {
    ...state,
    posts,
    postModal: false,
    postId: null,
    actions: state.actions + 1
  }
}

export function deleteDeveloper(state, index) {
  const developers = [...state.developers].toSpliced(index, 1)
  return {
    ...state,
    developers,
    actions: state.actions + 1
  }
}