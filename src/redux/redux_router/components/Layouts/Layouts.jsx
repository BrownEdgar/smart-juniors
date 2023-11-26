import { useSelector } from 'react-redux'
import Modal from '../Modal/Modal'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  const isOpen = useSelector(state => state.modal.status)
  return (
    <>
      {isOpen ? <Modal /> : null}
      <Navbar />
      <Outlet />
    </>
  )
}
