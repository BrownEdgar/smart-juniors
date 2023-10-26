import React, { useEffect, useRef } from 'react'
import "./Modal.scss";
import classNames from 'classnames';

export default function Modal({ children, toggleModal, theme, title }) {
  console.log(children)

  // {current: div}
  const devRef = useRef(null)
  useEffect(() => {

    const handleClick = (e) => {
      if (e.target === devRef?.current) {
        toggleModal()
      }
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])


  return (
    <div className='Modal' ref={devRef}>
      <div className={classNames("Modal-content", {
        [`Modal-content_${theme}`]: true
      })}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}


Modal.defaultProps = {
  theme: 'light'
}