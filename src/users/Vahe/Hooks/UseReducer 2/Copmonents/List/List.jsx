import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import * as actions from "../reducer/actionTypes" 
import "./List.scss"

export default function List(props) {
  let li = document.querySelectorAll('li')

  function handleClick(e) {
    e.target.classList.toggle('checkd')
    console.log(this);
  }

  function completeAll() {
    li.forEach((elem)=>{
      elem.classList = 'checkd'
    })
  }

  function deleteAllCheckd() {
    li.forEach((elem)=>{
      if (elem.classList == 'checkd') {
        elem.classList.remove('checkd')
        let elemName = elem.innerText
        props.dispatch( {type: actions.DELETE_All_CHECKD, payload: { elemName } } )
      }
    })
  }

  return (
    <div className="List">
      <ul className="myUl">
        <button onClick={ completeAll } >Complete All</button>
        <button onClick={ deleteAllCheckd } >Delete Completed Todos</button>
        <button onClick={ () => props.dispatch( {type: actions.SHOW_JSON } )} >Show Todo json</button>
      {
        props.todo.map( (dev, index) => ( 
          <li onClick={handleClick} key={index}> {dev} 
            <span onClick={()=> { props.dispatch( {type: actions.DELETE_TODO, payload: { index } } ) } } ><ImBin/></span> 
            <span onClick={ () =>  { props.dispatch( {type: actions.EDIT_TODO, payload: { index } } ) } } ><FaEdit/></span> 
          </li>) )
      }
      </ul>
    </div>
  )
}
