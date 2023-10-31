/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import "./Modal.scss"

export default function Modal({ children, toggleModal }) {
  useEffect(() => {
    const handleClick = (e) => {
      console.log(e.target)
      if (e.target.classList.contains("Modal") || e.target.classList.contains("Modal-content")) {
        toggleModal()
      }
    }
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick)
    };
  }, [])
  return (
    <div className='Modal'>
      <div className="Modal-content">
        {children}
      </div>
    </div>
  )
}
