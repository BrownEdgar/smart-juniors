import React, { useEffect, useRef } from 'react'
import "./Modal.scss"

export default function Modal({ children, clearMark, toggleModal }) {
  const modal = useRef(null)

useEffect(() => {
  document.body.classList.add("scrollHide")
  const close = (e) => {
    if(e.target === modal.current || e.target.classList.contains("fa-circle-xmark")) {
       toggleModal()
       clearMark()
    }
  }

  window.addEventListener("click", close)
  return () => {
    clearMark()
    removeEventListener("click", close)
    document.body.classList.remove("scrollHide")
  }
}, [])

  return (
    <div className='Modal' ref={modal}>
      {children}
    </div>
  )
}
