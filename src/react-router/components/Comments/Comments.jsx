import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import "./Comments.scss"

export default function Comments({ postId, users }) {
  const [comments, setComments] = useState([])
  useEffect(() => {
    axios(`comments?postId=${postId}&_limit=2`).then(res => setComments(res.data))
  }, [])

  return (
    <>
      {
        comments.length > 0 && users.length > 0
          ? <div className='Comments'>
            {
              comments.length > 0
                ? comments.map(comment => {
                  const user = [...users].find((user) => user.id === comment.userId)
                  return (
                    <div className='Comments-item' key={comment.id}>
                      <div className='Comments-item_user'>
                        <img src={`/${user.profile_image}`} alt="" />
                        <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  )
                })
                : null
            }
          </div>
          : null
      }
    </>
  )
}
