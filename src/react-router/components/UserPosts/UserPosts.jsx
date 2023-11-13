import React, { Fragment, useEffect, useState } from 'react'
import "./UserPosts.scss"
import Comments from '../Comments/Comments'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function UserPosts() {
  const { id } = useParams()
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    if (!userPosts.length) {
      axios(`posts?userId=${id}`)
        .then(res => setUserPosts(res.data))
    }
  }, [])

  return (
    <>
      {
        !userPosts.length
          ? null
          : <div className='UserPosts'>
            {
              userPosts.length > 0
                ? userPosts.map(post => {
                  return (
                    <div key={post.id} className='UserPosts-item'>
                      <div className='UserPosts-item_user'>
                        <img src={`/${post.profile_image}`} alt={`/${post.profile_image}`} />
                        <Link to={`/users/${post.userId}`}>{`${post.firstName} ${post.lastName}`}</Link>
                      </div>
                      <h2>{post.title}</h2>
                      <p className='UserPosts-item_body'>{post.body}</p>
                      <div className='UserPosts-item_imgbox' style={{ "--img-count": post?.images?.length }}>
                        {
                          post.images.map((image, index) => {
                            return (
                              <Fragment key={index}>
                                <div className='UserPosts-item_imgbox_img' onClick={() => imageOpen(image)}>
                                  <img src={image} alt={`${image}`} />
                                </div>
                              </Fragment>
                            )
                          })
                        }
                      </div>
                      <Comments postId={post.id} />
                    </div>
                  )
                })
                : null
            }
          </div>
      }
    </>
  )
}
