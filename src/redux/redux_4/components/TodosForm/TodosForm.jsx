import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersIdSelector } from '../../features/users/usersSlice'

import { string, object } from "yup";
import { addTodo } from '../../features/todos/todosSlice';

import "./TodosForm.scss"

const validationSchema = object({
  title: string().min(3).required(),
  description: string().min(10).required()
})

const initialValues = {
  title: "",
  description: "",
  userId: ""
}

export default function TodosForm() {
  const usersId = useSelector(getAllUsersIdSelector)
  const dispatch = useDispatch()

  const submitForm = (values, { resetForm }) => {
    const { userId } = values
    dispatch(addTodo({
      ...values,
      userId: +userId
    }))
    resetForm()
  }
  return (
    <div className='TodosForm'>
      <Formik
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        <Form>
          <label htmlFor="title">Title:</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component={"p"} />
          <label htmlFor="description">Description:</label>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component={"p"} />
          <label htmlFor="userId">Select User ID:</label>
          <Field as="select" name="userId" required>
            <option value="" disabled>Users ID:</option>
            {
              usersId.map(id => {
                return (
                  <Fragment key={id}>
                    <option value={id}>{id}</option>
                  </Fragment>
                )
              })
            }
          </Field>
          <button type='submit'>Add Todo</button>
        </Form>
      </Formik>
    </div>
  )
}
