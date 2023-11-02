import { useEffect } from 'react'
import "./Modal.scss";
import * as Actions from "../../reducer/ActionTypes.js";


export default function Modal({ children, dispatch }) {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.target.classList.contains("Modal")) {
        dispatch({ type: Actions.CLOSE_POST_MODAL })
      }
    }

    window.addEventListener("click", closeModal)

    return () => {
      window.removeEventListener("click", closeModal)
    }
  }, [])

  return (
    <div className='Modal'>
      {children}
    </div>
  )
}
