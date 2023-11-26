import { CLOSE_MODAL} from '../reducer/actionTypes';
import { useEffect } from 'react'
import './Modal.scss'

export default function Modal({children, dispatch}) {

    useEffect(() => {
      const handleClick = (e) => {
        if (e.target.classList.contains('Modal')) {
          dispatch({ type: CLOSE_MODAL })
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