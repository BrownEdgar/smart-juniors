import { useLayoutEffect, useRef } from "react"
import { useDispatch } from "react-redux"

import { checkLogin, getAdmin } from "../../features/admin/adminSlice"
import { toggleModal } from "../../features/modal/modalSlice"
import "./AdminForm.scss"

export default function AdminForm() {
  const login = useRef()
  const password = useRef()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if(localStorage.getItem("adminLogged") !== "true") {
      dispatch(getAdmin())
    }
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkLogin({
      login: login.current.value,
      password: password.current.value
    }))
    dispatch(toggleModal(""))
  }

  return (
    <div className="AdminForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login:</label>
        <input type="text" name="login" id="login" ref={login}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" ref={password}/>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
