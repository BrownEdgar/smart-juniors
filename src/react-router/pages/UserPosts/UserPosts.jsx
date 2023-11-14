import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'

import Comments from '../../components/Comments/Comments'
import PostForm from '../../components/PostForm/PostForm'

import "./UserPosts.scss"

export default function UserPosts() {
  const { id } = useParams()
  const [userPosts, setUserPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!userPosts.length) {
      axios(`posts?userId=${id}`)
        .then(res => setUserPosts(res.data))
      axios("users").then(res => setUsers(res.data))
    }
  }, [])

  return (
    <>
    <PostForm/>
      {
        (!userPosts.length && !users.length)
          ? null
          : <div className='UserPosts'>
            {
              userPosts.length > 0
                ? userPosts.map(post => {
                  const user = [...users].find((user) => user.id === post.userId)
                  return (
                    <div key={post.id} className='UserPosts-item'>
                      <div className='UserPosts-item_user'>
                        <img src={`/${user?.profile_image}`} alt="" />
                        <Link to={`/users/${post.userId}`}>{`${user?.firstName} ${user?.lastName}`}</Link>
                      </div>
                      <h2>{post.title}</h2>
                      <p className='UserPosts-item_body'>{post.body}</p>
                      <div className='UserPosts-item_imgbox' style={{ "--img-count": post?.images?.length }}>
                        {
                          post.images.map((image, index) => {
                            return (
                              <Fragment key={index}>
                                <div className='UserPosts-item_imgbox_img'>
                                  <img src={image} alt={`${image}`} />
                                </div>
                              </Fragment>
                            )
                          })
                        }
                      </div>
                      <Comments postId={post.id} users={users}/>
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
