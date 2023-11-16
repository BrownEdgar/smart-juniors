import React, { useLayoutEffect, useRef, useState } from 'react'

import { Formik, Form, Field } from 'formik';
import { string, object } from "yup"

import CustomField from '../CustomField/CustomField';
import { genDays, genYears, genMonths } from '../../helper/helper';

import "./RegForm.scss";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import axios from 'axios';

const validationSchema = object({
  firstName: string()
    .matches(/^[A-Z]/, "The first letter must be a upper case")
    .min(3)
    .required(),
  lastName: string()
    .matches(/^[A-Z]/, "The first letter must be a upper case")
    .min(3)
    .required(),
  email: string()
    .email()
    .required(),
  password: string()
    .min(8)
    .required()
})

export default function RegForm({ users, setUsers }) {
  const [date, setDate] = useState({})
  const profileImg = useRef(null)
  const navigate = useNavigate()

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    profile_image: 'profile-image-default.jpg',
    description: ''
  }

  useLayoutEffect(() => {
    profileImg.current.src = initialValues.profile_image
    setDate({
      years: genYears(),
      days: genDays(),
      months: genMonths()
    })
  }, [])

  const fileChange = (e, formik) => {
    const imgName = e.target?.files?.[0]?.name || "profile-image-default.jpg"
    profileImg.current.src = `/${imgName}`
    formik.setFieldValue("profile_image", imgName)
  }

  const formSubmit = (values, actions) => {
    console.log(values)
    profileImg.current.src = `/${values.profile_image}`
    const hasUser = users.some(user => values.email === user.email)

    if (!hasUser) {
      setUsers([
        ...users,
        {
          ...values,
          id: `${Date.now().toString(16)}_${values.firstName}`
        }
      ])
      axios.post("users", {
        // id: `${Date.now().toString(16)}_${values.firstName}`,
        ...values
      })
      actions.resetForm()
      navigate({ pathname: `/${ROUTES.USERS}` })
    }
  }

  return (
    <div className='RegForm'>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        {
          (formik) =>
          ( // #return form
            <Form>
              <CustomField label="First Name:" type="text" name="firstName" id="firstName" placeholder="First Name" required />
              <CustomField label="Last Name:" type="text" name="lastName" id="lastName" placeholder="Last Name" required />
              <CustomField label="Email:" type="email" name="email" id="email" placeholder="email" required />
              <CustomField label="Password:" type="password" name="password" id="password" placeholder="New password" required />
              <div className='_textArea'>
                <label htmlFor="description">Write a few words about yourself</label>
                <Field as="textarea" name="description" />
              </div>
              <label>Birtday:</label>
              <div className='_birtdayBox'>
                <Field as="select" name="month" required>{date.months}</Field>
                <Field as="select" name="day" required>{date.days}</Field>
                <Field as="select" name="year" required>{date.years}</Field>
              </div>
              <div className='_profileImage'>
                <h2>Add your picture</h2>
                <div className='_image'>
                  <img src="profile-image-default.jpg" alt="" ref={profileImg} />
                  <span className='_fileInputBox'>
                    <i className="fa-regular fa-image">
                      <Field type="file" name="profileImage" id="profileImage"
                        onChange={(e) => fileChange(e, formik)} />
                    </i>
                  </span>
                </div>
              </div>
              <button type="submit">Sign Up</button>
            </Form>
          ) // #end
        }
      </Formik>
    </div>
  )
}
