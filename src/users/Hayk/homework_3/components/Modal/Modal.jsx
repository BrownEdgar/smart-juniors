import React, { useEffect } from 'react'
import "./Modal.scss"
import classNames from 'classnames'

export default function Modal({ children, bgColor, loading, toggleModal, message }) {

  useEffect(() => {
    document.body.classList.add("scrollHide")

    const closeModal = (e) => {
      e.target.classList.contains("Modal")
        && toggleModal()
    }

    window.addEventListener("click", closeModal)

    return () => {
      window.removeEventListener("click", closeModal)
      document.body.classList.remove("scrollHide")
    }
  }, [])

  return (
    <div className='Modal'>
      <div className={classNames('Modal-box', {
        [`Modal-box_${loading}`]: loading
      })} style={{ backgroundColor: bgColor }}>
        <div className='Modal-box_btnGroup'>
          <i className="Modal-box_btnGroup_close fa-solid fa-circle-xmark" onClick={toggleModal}></i>
        </div>
        <div className='Modal-box_content'>
          {
            message
              ? <h2>{message}</h2>
              : null
          }
          <div className='Modal-box_content_btns'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


Modal.defaultProps = {
  bgColor: "white"
}

