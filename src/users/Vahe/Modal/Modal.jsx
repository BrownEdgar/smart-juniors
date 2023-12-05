import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export default function Modal({children, toggleModal}) {

    useEffect(() => {
      const handleClick = (e) => {
        if (e.target.classList.contains('Modal')) {
            toggleModal()
        }
      }
        
      window.addEventListener('click', handleClick)
    
      return () => {
        window.removeEventListener('click', handleClick)
      }
    }, [])
    

  return (
    <div className='Modal' >
        <div className="Modal-content">
            {children}
        </div>
    </div>
  )
}