import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { string, object } from "yup"
import { addUser } from '../../features/users/usersSlice'

import "./UsersForm.scss"

const validationSchema = object({
  name: string().matches(/[A-Z]/).min(3).required(),
  email: string().email().required(),
  password: string().min(4).required()
})

const initialValues = {
  name: "",
  email: "",
  password: ""
}

export default function UsersForm() {
  const dispatch = useDispatch();

  const submitForm = (values, { resetForm }) => {
    dispatch(addUser(values))
    resetForm()
  }

  return (
    <div className='UsersForm'>
      <Formik
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" placeholder="Enter your name..." required />
          <ErrorMessage name='name' component={"p"} />
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Enter email..." required />
          <ErrorMessage name='email' component={"p"} />
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" placeholder="Enter your password..." required />
          <ErrorMessage name='password' component={"p"} />
          <button type='submit'>Add User</button>
        </Form>
      </Formik>
    </div>
  )
}
