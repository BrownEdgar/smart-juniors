import React from 'react'
import "./App.scss"
import { Field, Form, Formik } from 'formik'
import CustomField from './components/CustomField/CustomField'
import { object, string } from "yup";

const validationSchema = object({
  firstName: string()
    .matches(/^[A-Z]/, "first name must be a start with in upper case")
    .min(2)
    .required(),
  lastName: string()
    .matches(/^[A-Z]/, "last name must be a start with in upper case")
    .min(3)
    .required(),
  email: string().email().required(),
  website: string()
    .matches(/[http|https]:\/{2}\w{3,}\.\w+/, "url must start with http or https example https://github.com")
    .url() // optionally
    .notRequired(),
  message: string().notRequired()
})


export default function App() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  }

  const handleSubmit = (formik) => {
  }
  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {
          (formik) => {
            return (
              <Form>
                <h1>Responsive Contact us Form</h1>
                <div>
                  <CustomField
                    label="First Name:"
                    type='text'
                    name="firstName"
                    id="firstName"
                    placeholder='First Name'
                  />
                  <CustomField
                    label="Last Name:"
                    type='text'
                    name="lastName"
                    id="lastName"
                    placeholder='Last Name'
                  />
                  <CustomField
                    label="Email Address:"
                    type='email'
                    name="email"
                    id="email"
                    placeholder='Email Address'
                  />
                  <CustomField
                    label="Website Name"
                    type='text'
                    name="website"
                    id="website"
                    placeholder='Website Name'
                  />
                  <CustomField
                    label="Write your message"
                    type='text'
                    name="message"
                    id="message"
                    placeholder='Write your message'
                  />
                </div>
                <input type="submit" value="SUBMIT" />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
