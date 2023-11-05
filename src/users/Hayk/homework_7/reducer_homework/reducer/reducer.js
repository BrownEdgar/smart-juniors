import * as Type from "./actionTypes.js";
import * as Action from "./callFunctions.js";

export const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "alldone - որը todo զանգվածում բոլորի completed հատկությունը կսարգի true",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "removeById - որը կստանա id և կջնջի համապատասխան todo-ն",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "addTodo - որը todo զանգվածում կավելացնի նոր todo",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "tojson - որը todo զանգվածը կսարգի json և կվերադարձնի մեզ ինչպես նաև այդ todo-ը նկարել էջում",
    "completed": false
  }
]

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case Type.ALL_DONE: return Action.allDone(state)
    case Type.REMOVE_BY_ID: return Action.removeById(state, payload.id)
    case Type.ADD_TODO: return Action.addTodo(state, payload)
    case Type.TO_JSON: return Action.toJson(state, payload)
    case Type.DONE_BY_ID: return Action.doneById(state, payload.id)
    case Type.REMOVE_ALL_DONE: return Action.removeAllDone(state)

    default: return state
  }
}