import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import "./UserHome.scss"

export default function UserHome() {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios(`users/${id}`)
      .then(res => setUser(res.data))
  }, [])

  return (
    <div className='UserHome'>
      <div className='UserHome-content'>
        <p className='UserHome-content_desc'>{user?.description}</p>
      </div>
    </div>
  )
}
