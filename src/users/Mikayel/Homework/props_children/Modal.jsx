import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import './Modal.scss'

export default function Modal({ children, toggleModal, theme, title }) {

    const divRef = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target === divRef?.current) {
                toggleModal()
            }
        }
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className="Modal" ref={divRef}>
            <div className={classNames("Modal-content", {
                [`Modal-content_${theme}`]: true
            })}>
                <i class="fa-regular fa-circle-xmark fa-beat"></i>
                <h2>{title}</h2>
                <hr />
                <p>Do you really want to delete this post?</p>
                {children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    theme: "light"
}