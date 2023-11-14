import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Field, Form, Formik } from 'formik'
import axios from 'axios'

import Modal from '../../components/Modal/Modal'

import "./UserPhotos.scss"

export default function UserPhotos() {
  const { id } = useParams()
  const [imgModalOpen, setImgModalOpen] = useState({ isOpen: false, imgUrl: "" })
  const [userPhotos, setUserPhotos] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    axios(`photos?userId=${id}`)
      .then(res => setUserPhotos(res.data))
  }, [update])

  const submitForm = (values, { resetForm }) => {
    axios.post("photos", { ...values, userId: `${id ? id : user.id}` })
    resetForm()
    setUpdate(!update)
  }

  const toggleImgModal = (img) => {
    setImgModalOpen({
      isOpen: !imgModalOpen.isOpen,
      imgUrl: img
    })
  }

  const imageOpen = (image) => {
    toggleImgModal(image)
  }

  const deleteUserPhoto = (e, id) => {
    e.stopPropagation()
    axios.delete(`photos/${id}`)
    setUpdate(!update)
  }

  return (
    <>
      {
        imgModalOpen.isOpen
          ? <Modal toggleModal={toggleImgModal}>
            <img src={imgModalOpen.imgUrl} alt="" />
          </Modal>
          : null
      }
      <div className='UserPhotos'>
        <div className='UserPhotos-header'>
          <Formik
            initialValues={{ image_url: "" }}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={submitForm}
          >
            <Form>
              <Field type="url" name="image_url" required />
              <button type='submit' className='UserPhotos-header_addBtn'>Add photo</button>
            </Form>
          </Formik>
        </div>
        <div className='UserPhotos-content'>
          {
            userPhotos.length > 0
              ? userPhotos.map(photo => {
                return (
                  <div className='UserPhotos-content_imgBox' key={photo.id} onClick={() => imageOpen(photo.image_url)}>
                    <img src={photo.image_url} alt="" />
                    <i className="fa-solid fa-circle-minus" onClick={(e) => deleteUserPhoto(e, photo.id)}></i>
                  </div>
                )
              })
              : <h2>You don't have any photo</h2>
          }
        </div>
      </div>
    </>
  )
}
