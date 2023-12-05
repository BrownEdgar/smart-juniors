export function closeModal(state) {
  return {
    ...state,
    isopen: false,
  };
}

export function openModal(state) {
  return {
    ...state,
    isopen: true,
  };
}

export function addTodo(state, name) {
  const todo = [...state.todo];
  if (!todo.includes(name)) {
    todo.push(name);
  } else {
    return state;
  }

  return {
    ...state,
    todo,
  };
}

export function deleteTodo(state, index) {
  const todo = [...state.todo].toSpliced(index, 1);
  return {
    ...state,
    todo,
  };
}

export function editTodo(state, index) {
  state.isopen = true
  state.lastindex = index
  return {
    ...state,
  };
}

export function changeName(state, name) {
  if (!state.todo.includes(name)) {
    state.todo[state.lastindex] = name
    state.isopen = false 
  } else {
    alert('This title already exists')
  }

  return {
    ...state,
  };
}

export function deleteAllCheckd(state,elemName) {
  
  let index = state.todo.indexOf(elemName)
  state.todo.splice(index,1)

  return {
    ...state,
  };
}

export function adfasd(state,name) {
  
}

export function changeThisName(state, name) {
  if (!state.todo.includes(name)) {
    state.todo[state.lastindex] = name
    state.isopen = false 
  } else {
    alert('This title already exists')
  }

  return {
    ...state,
  };
}

export function showJson(state) {
  alert(state.todo.join('\n'))
  return (
    state
  )
}

