import { useEffect } from 'react'
import './Modal.scss'

export default function Modal({children,handleOpen}) {
    
  useEffect(() => {
    const handleCancel = (e) => {
        if (e.target.classList.contains('Modal')) {
            handleOpen()
        }
    }
   window.addEventListener('click',handleCancel)
    return () => {
     window.removeEventListener('click', handleCancel)
    }
  }, [])
  


  return (
    <div className='Modal'>
        <div className="Modal-Content">
        {children}
        </div>
    </div>
  )
}
