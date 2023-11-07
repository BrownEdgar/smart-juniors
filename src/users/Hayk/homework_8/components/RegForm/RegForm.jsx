import React, { Fragment, useEffect, useState } from 'react'
import "./RegForm.scss";
import { Formik, Form, Field} from 'formik';
import { string, object } from "yup"

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

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: ''
  }

  useEffect(() => {
    setDate({ years: genYears(), days: genDays() })
  }, [])


  const genDays = () => {
    const days = []
    for (let i = 1; i < 32; i++) {
      days.push((
        <Fragment key={i}>
          <option value={i}>{i}</option>
        </Fragment>
      ))
    }
    return days
  }

  const genYears = () => {
    const date = []
    const curDate = new Date().getFullYear()
    const minDate = curDate - 118;
    for (let i = minDate; i <= curDate; i++) {
      date.push((
        <Fragment key={i}>
          <option value={i}>{i}</option>
        </Fragment>
      ))
    }
    return date
  }

  const formSubmit = (values, formik) => {
    setUsers([...users, values])
    formik.resetForm()
  }

  return (
    <div className='RegForm'>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className='_username'>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="New password"
            required
          />
          <label>Birtday:</label>
          <div className='_birtdayBox'>
            <Field as="select" name="month" required>
              <option value="January" defaultChecked>Jan</option>
              <option value="February">Feb</option>
              <option value="March">Mar</option>
              <option value="April">Apr</option>
              <option value="May">May</option>
              <option value="June">Jun</option>
              <option value="July">Jul</option>
              <option value="August">Aug</option>
              <option value="September">Sep</option>
              <option value="October">Oct</option>
              <option value="November">Nov</option>
              <option value="December">Dec</option>
            </Field>
            <Field as="select" name="day" required>{date.days}</Field>
            <Field as="select" name="year" required>{date.years}</Field>
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  )
}
