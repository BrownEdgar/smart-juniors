import { ALL_DONE, ADD_TODO, REMOVE_BY_ID, FETCH_TODOS } from './ActionTypes.js'

export const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return fetchToDos(state, action.payload)
    case ALL_DONE:
      return markAllDone(state);
    case REMOVE_BY_ID:
      return removeTodoById(state, action.payload);
    case ADD_TODO:
      return addNewTodo(state, action.payload);
    default:
      return state;
  }
}

const fetchToDos = (todos, fetchedTodos) => {
  return [ ...fetchedTodos]

};

const markAllDone = todos => {
  return todos.map(todo => ({ ...todo, completed: true }));
};

const removeTodoById = (todos, idToRemove) => {
  console.log(idToRemove);
  return todos.filter(todo => todo.id !== idToRemove);
};

const addNewTodo = (todos, newTodo) => {
  return [...todos, newTodo];
};