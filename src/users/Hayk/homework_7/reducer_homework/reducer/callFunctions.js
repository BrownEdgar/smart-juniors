export function allDone(state) {
  const todos = state.map(todo => {
    todo.completed = true
    return todo
  })
  return todos
}

export function removeById(state, id) {
  return [...state].filter(todo => todo.id !== id)
}

export function removeAllDone(state) {
  return [...state].filter(todo => !todo.completed)
}

export function addTodo(state, { title }) {
  const hasTitle = state.some(todo => todo.title === title.trim())

  if (title.trim() === '' || hasTitle) {
    return state
  }

  const todo = {
    id: uniqueID(state) + 1,
    title,
    userId: 1,
    completed: false
  }

  return [...state, todo]
}

export function toJson(state, { setTodosJson, toggleModal }) {
  if (!state.length) {
    setTodosJson(state)
    return state
  }
  const todosJson = JSON.stringify(state, null, 1)
  setTodosJson(todosJson)
  toggleModal()
  return state
}

export function doneById(state, id) {
  const todos = [...state].map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  return todos
}


/* 
this function generated a unique id 
this find max id value in todos and return it,
when todos array length equal to 0 then return 1 
*/
function uniqueID(state) {
  return (
    !state.length
      ? 1
      : Math.max(...state.reduce((acc, { id }) => {
        acc.push(id);
        return acc
      }, []))
  )
}  