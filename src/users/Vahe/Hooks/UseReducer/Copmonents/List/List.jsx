import { ImBin } from "react-icons/im";
import { DELETE_DEV } from "../reducer/actionTypes";
import "./List.scss"

export default function List(props ) {
  return (
    <div className="List">
      <ul className="myUl">
      {
        props.developers.map( (dev, index) => ( 
          <li key={index}> {dev} 
            <span onClick={() =>  props.dispatch( {type: DELETE_DEV, payload: { index } } )} ><ImBin/></span> 
          </li>) )
      }
      </ul>
    </div>
  )
}
