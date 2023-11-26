import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import AdminForm from "../AdminForm/AdminForm"
import { toggleModal } from "../../features/modal/modalSlice"
import "./Modal.scss"

export default function Modal() {
  const type = useSelector(state => state.modal.type)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const closeModal = (e) => {
      if (e.target.classList.contains("Modal")) {
        dispatch(toggleModal(""))
      }
    }
    window.addEventListener("click", closeModal)

    return () => {
      window.removeEventListener("click", closeModal)
    }
  }, [dispatch])

  const modalElement = () => {
    switch (type) {
      case "AdminForm":
        return <AdminForm />
      default:
    }
    return null
  }

  return (
    <div className="Modal">
      {modalElement()}
    </div>
  )
}
