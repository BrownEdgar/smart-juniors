import "./Lists.scss";
import { FaDeleteLeft } from "react-icons/fa6";
import * as Actions from "../../reducer/ActionTypes.js";

export default function Lists({ list, dispatch }) {
  return (
    <div className='Lists'>
      <ul>
        {
          list.length > 0
            ? list.map((item, index) => {
              return (
                <li key={index} className='Lists-item'>
                  <h2>{item}</h2>
                  <span onClick={() => dispatch({ type: Actions.DELETE_DEVELOPER, payload: { index } })}><FaDeleteLeft /></span>
                </li>
              )
            })
            : null
        }
      </ul>
    </div>
  )
}