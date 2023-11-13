import axios from 'axios'
import { useState, useEffect, Fragment, useRef } from 'react'
import "./News.scss"
import { Link } from 'react-router-dom'
import Comments from '../../components/Comments/Comments'
import Modal from '../../components/Modal/Modal'

export default function News() {
  const [news, setNews] = useState([])
  const [imgModalOpen, setImgModalOpen] = useState({isOpen: false, imgUrl: "" })
  useEffect(() => {
    axios("posts").then(res => setNews(res.data))
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
          news.length > 0
            ? news.map(post => {
              return (
                <div key={post.id} className='News-item'>
                  <div className='News-item_user'>
                    <img src={post.profile_image} alt={post.profile_image} />
                    <Link to={`/users/${post.userId}`}>{`${post.firstName} ${post.lastName}`}</Link>
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
                  <Comments postId={post.id} />
                </div>
              )
            })
            : null
        }
      </div>
    </>
  )
}
