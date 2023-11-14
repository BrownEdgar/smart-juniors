import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Field, Form, Formik } from 'formik'
import axios from 'axios'

import ImageBox from '../ImageBox/ImageBox'
import CustomField from '../CustomField/CustomField'

import "./PostForm.scss"

export default function PostForm() {
  const { id } = useParams()
  const [images, setImages] = useState([])

  const initialValues = {
    title: "",
    body: ""
  }

  const submitForm = (values, { resetForm }) => {
    const newPost = {
      ...values,
      images: images,
      userId: id,
    }

    axios.post("posts", newPost)
    resetForm()
    setImages([])
  }

  return (
    <div className='PostForm'>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        {
          (formik) => (
            <Form>
              <CustomField name="title" type="text" placeholder="Enter a post title..." required />
              <div className='_textArea'>
                <label htmlFor="description">Write a few words about yourself</label>
                <Field as="textarea" name="body" placeholder="Enter your post description here..." required />
              </div>
              <label htmlFor="url_image">Add your image here</label>
              <Field type="url" name="url_image" placeholder="Add your images here..." onChange={(e) => {
                if (images.length !== 5) {
                  setImages([...images, e.target.value])
                }
                e.target.value = ""
              }} />
              {
                images.length > 0
                  ? <ImageBox images={images} />
                  : null
              }
              <button type='submit'>Public Post</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
