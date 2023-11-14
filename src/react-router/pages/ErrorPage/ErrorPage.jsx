import React from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from '../../routes/routes'

import "./ErrorPage.scss"

export default function ErrorPage() {

  const navigate = useNavigate()
  const gohome = () => {
    navigate({ pathname: ROUTES.HOME})
  }

  return (
    <div className='ErrorPage'>
      <div className='ErrorPage-content'>
        <h1 className='ErrorPage-content_error'>404</h1>
        <h2>Page not Found</h2>
        <button onClick={gohome}>go back</button>
      </div>
    </div>
  )
}
