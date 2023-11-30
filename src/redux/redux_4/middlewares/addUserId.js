const addUserId = (store) => (next) => (action) => {

  if (action.type === "users/addUser") {
    const user = {
      id: store.getState().users.uniqueID,
      ...action.payload
    }
    action.payload = user
  }

  if (action.type === "todos/addTodo") {
    const users = store.getState().users.data;
    const [{ name }] = users.filter(user => user.id === action.payload.userId)
    const id = store.getState().todos.uniqueID;

    const todo = {
      id,
      ...action.payload,
      author: name
    }

    action.payload = todo
  }

  next(action)
}

export default addUserId