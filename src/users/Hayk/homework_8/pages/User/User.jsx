import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import "./User.scss"

export default function User({ users }) {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    if (users?.length === 0) {
      axios("https://raw.githubusercontent.com/API-Reference/src/main/users.json")
        .then(res => setData(res.data))
      console.log(1);
    }
  }, [])

  const user = (
    users?.length === 0
      ? data?.find((user) => user.id === id)
      : users?.find((user) => user.id === id)
  )

  return (
    <div className='User'>
      <div className='User-leftBar'>
        <div className='User-leftBar_profileImage'>
          <img src={`/${user?.profile_image}`} alt="" />
        </div>
        <h1 className='User-leftBar_username'>{`${user?.firstName} ${user?.lastName}`}</h1>
        {
          user?.year 
          ? <p className='User-leftBar_age'>{`Age: ${new Date().getFullYear() - user?.year}`}</p>
          : null
        }
        <button>Account Settings</button>
        <button>News</button>
        <button>Albums</button>
        <button>Audio</button>
        <button>Video</button>
        <button>Blog</button>
      </div>
      <div className='User-rightBar'>
        <p className='User-rightBar_desc'>{user?.description}</p>
      </div>
    </div>
  )
}


