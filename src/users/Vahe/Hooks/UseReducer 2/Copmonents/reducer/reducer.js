import * as actions from "./actionTypes.js" 
import * as func from "./functions.js"

export const initialState = {
  todo: [],
  lastindex: null,
  isopen: false,
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.CLOSE_MODAL: return func.closeModal(state)
    case actions.OPEN_MODAL: return func.openModal(state)
    case actions.ADD_TODO: return func.addTodo(state, payload.name)
    case actions.DELETE_TODO: return func.deleteTodo(state, payload.index)
    case actions.EDIT_TODO: return func.editTodo(state, payload.index, payload.name)
    case actions.CHANGE_NAME: return func.changeThisName(state, payload.changeName)
    case actions.DELETE_All_CHECKD: return func.deleteAllCheckd(state, payload.elemName)
    case actions.SHOW_JSON: return func.showJson(state)

    default: return state
  }
}

