import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function ErrorPage() {
  const navigate = useNavigate()
  const gohome = () => {
    navigate({ pathname: ROUTES.HOME, })
  }
  return (
    <div>
      <h2> 404 | page not found</h2>
      <Link to={ROUTES.HOME}> go home</Link>
      <button onClick={gohome}>go back</button>
    </div>
  )
}
