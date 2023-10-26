import React from 'react'
import "./User.scss"

export default function User({user}) {
  return (
    <div className='User'>
          <h1>{`${user.name} (${user.username})`}</h1>
          <p>{`Phone: ${user.phone}`}</p>
          <p>{`Email: ${user.email}`}</p>
    </div>
  )
}
