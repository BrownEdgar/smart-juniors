import React from 'react'
import "./Modal.scss"
import { useEffect } from 'react'
import classNames from 'classnames'

export default function Modal({ children, toggleModal, theme }) {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains("Modal")) {
        toggleModal()
      }
    }
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick)
    }s
  }, [])
  const myFunction = () => { }
  return (
    <div className='Modal'>
      <div className={classNames('Modal-content', {
        [`Modal-content_${theme}`]: true
      })}>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  theme: "light"
}