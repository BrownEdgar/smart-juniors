import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'

import ROUTES from '../../routes/routes'

import "./User.scss"

const focusLink = (e) => {
  e.target.classList.add("active")
  let linkPrev = e.target?.previousElementSibling
  let linkNext = e.target?.nextElementSibling

  while ("A" === linkPrev?.nodeName || linkNext?.nodeName) {
    if (linkPrev) {
      linkPrev?.classList?.remove("active")
      linkPrev = linkPrev?.previousElementSibling
    }
    if (linkNext) {
      linkNext?.classList?.remove("active")
      linkNext = linkNext?.nextElementSibling
    }
  }
}

export default function User({ users }) {
  const { id } = useParams()
  const [data, setData] = useState([])

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

  return (
    <>
      {
        user?.firstName
          ? <div className='User'>
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
              <Link to={ROUTES.USER_HOME} onFocus={(e) => focusLink(e)}>
                <span>Home</span>
                <i className="fa-solid fa-house-user"></i>
              </Link>
              <Link to={ROUTES.SETTINGS} onFocus={(e) => focusLink(e)}>
                <span>Settings</span>
                <i className="fa-solid fa-gear"></i>
              </Link>
              <Link to={ROUTES.POSTS} onFocus={(e) => focusLink(e)}>
                <span>My Posts</span>
                <i className="fa-solid fa-signs-post"></i>
              </Link>
              <Link to={ROUTES.PHOTOS} onFocus={(e) => focusLink(e)}>
                <span>Photos</span>
                <i className="fa-regular fa-images"></i>
              </Link>
              <Link to={`/${ROUTES.USERS}`} onFocus={(e) => focusLink(e)}>
                <span>Users</span>
                <i className="fa-solid fa-users"></i>
              </Link>
            </div>
            <div className='User-rightBar'>
              <Outlet />
            </div>
          </div>
          : null
      }
    </>
  )
}


