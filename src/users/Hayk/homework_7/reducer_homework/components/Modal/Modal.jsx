import { useEffect } from 'react'

import "./Modal.scss"

export default function Modal({children, toggleModal}) {
  useEffect(() => {
    const closeModal = (e) => {
      if(e.target.classList.contains("Modal")) {
        toggleModal()
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
