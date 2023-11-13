import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import axios from 'axios'

import "./User.scss"
import ROUTES from '../../routes/routes'
import PostForm from '../../components/PostForm/PostForm'
import UserPosts from '../../components/UserPosts/UserPosts'

export default function User({ users }) {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [myPosts, setMyPosts] = useState(false)
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    if (users?.length === 0) {
      axios("users")
        .then(res => setData(res.data))
    }
  }, [])

  const user = (
    users?.length === 0
      ? data?.find((user) => user.id === id)
      : users?.find((user) => user.id === id)
  )

  const getUserPosts = (userId) => {
    if(!userPosts.length) {
      axios(`/posts?userId=${userId}`).then(res => setUserPosts(res.data))
    }
    setMyPosts(!myPosts)
  }

  return (
    <>
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
          <Link to={{pathname: `posts`}}>My Posts</Link>
          {/* <Link to={`about`}>About</Link> */}
          {/* <button onClick={() => getUserPosts(user.id)}></button> */}
          <button>Albums</button>
          <button>Audio</button>
          <button>Video</button>
          <button>Blog</button>
          <Link to={`/${ROUTES.USERS}`}>Back to Users</Link>
        </div>
        <div className='User-rightBar'>
          <PostForm user={user} />
          <Outlet/>
          {
            myPosts
              ? <UserPosts userPosts={userPosts}>
              </UserPosts>
              : null
          }
          <p className='User-rightBar_desc'>{user?.description}</p>
        </div>
      </div>
    </>
  )
}


