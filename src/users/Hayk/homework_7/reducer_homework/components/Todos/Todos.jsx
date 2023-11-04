import { FaTrash } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import classNames from 'classnames'

import * as Type from "../../reducer/actionTypes";

import "./Todos.scss"


export default function Todos({ todos, dispatch, changeHeight }) {

  return (
    <ul className='Todos' style={{ "--rest-height": `${changeHeight}px` }}>
      {
        todos.length > 0
          ? todos.map(todo => {
            return (
              <li className={classNames("Todos-item", {
                "Todos-item_complated": todo.completed
              })} key={todo.id}>
                <h2>{todo.title}</h2>
                <div className='Todos-item_btns'>
                  {/* Status button */}
                  <GrStatusGood className={classNames({
                    "_completed": todo.completed
                  })} onClick={() => dispatch({
                    type: Type.DONE_BY_ID,
                    payload: {
                      id: todo.id
                    }
                  })} />
                  {/* Trash button */}
                  <FaTrash
                    onClick={() => {
                      dispatch({
                        type: Type.REMOVE_BY_ID,
                        payload: {
                          id: todo.id
                        }
                      })
                    }} />
                </div>
              </li>
            )
          })
          : null
      }
    </ul>
  )
}
