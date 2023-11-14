import { useState, Fragment, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import Comments from '../../components/Comments/Comments'
import Modal from '../../components/Modal/Modal'

import "./News.scss"

export default function News() {
  const [news, setNews] = useState([])
  const [users, setUsers] = useState([])
  const [imgModalOpen, setImgModalOpen] = useState({isOpen: false, imgUrl: "" })

  useLayoutEffect(() => {
    axios("posts").then(res => setNews(res.data))
    axios("users").then(res => setUsers(res.data))
  }, [])

  const toggleImgModal = (img) => {
    setImgModalOpen({
      isOpen: !imgModalOpen.isOpen,
      imgUrl: img
    })
  }

  const imageOpen = (image) => {
    toggleImgModal(image)
  }

  return (
    <>
      {
        imgModalOpen.isOpen
          ? <Modal toggleModal={toggleImgModal}>
            <img src={imgModalOpen.imgUrl} alt=""/>
          </Modal>
          : null
      }
      <div className='News'>
        {
          news.length > 0 && users.length > 0
            ? news.map(post => {
              const user = [...users].find((user) => user.id === post.userId)
              return (
                <div key={post.id} className='News-item'>
                  <div className='News-item_user'>
                    <img src={user.profile_image} alt="" />
                    <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                  </div>
                  <h2>{post.title}</h2>
                  <p className='News-item_body'>{post.body}</p>
                  <div className='News-item_imgbox' style={{ "--img-count": post?.images?.length }}>
                    {
                      post.images.map((image, index) => {
                        return (
                          <Fragment key={index}>
                            <div className='News-item_imgbox_img' onClick={() => imageOpen(image)}>
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
    </>
  )
}
