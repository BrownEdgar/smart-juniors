import React, { useState } from 'react'
import "./Comments.scss"
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Comments({ postId }) {
  const [comments, setComments] = useState([])
  useEffect(() => {
    axios(`comments?postId=${postId}&_limit=2`).then(res => setComments(res.data))
  }, [])

  return (
    <div className='Comments'>
      {
        comments.length > 0
          ? comments.map(comment => {
            return (
              <div className='Comments-item' key={comment.id}>
                <div className='Comments-item_user'>
                  <img src={`/${comment.profile_image}`} alt="" />
                  <Link to={`/users/${comment.userId}`}>{`${comment.firstName} ${comment.lastName}`}</Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            )
          })
          : null
      }
    </div>
  )
}
