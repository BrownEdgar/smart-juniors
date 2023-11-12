import React, { useState } from 'react'
import "./PostForm.scss"
import { Field, Form, Formik } from 'formik'
import CustomField from '../CustomField/CustomField'
import ImageBox from '../ImageBox/ImageBox'
import axios from 'axios'

export default function PostForm({ user }) {
  const [images, setImages] = useState([])
  const initialValues = {
    title: "",
    body: ""
  }

  const submitForm = (values, { resetForm }) => {
    const { firstName, lastName, profile_image } = user
    const newPost = {
      ...values,
      images: images,
      userId: user.id,
      firstName,
      lastName,
      profile_image
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
              <CustomField name="title" type="text" placeholder="Enter a post title..." required/>
              <div className='_textArea'>
                <label htmlFor="description">Write a few words about yourself</label>
                <Field as="textarea" name="body" placeholder="Enter your post description here..." required/>
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
