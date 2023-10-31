import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import './App.scss'



const validationSchema = object({
  email: string().email().required('Required!'),
  password: string()
    .min(8, "8-ic avel")
    .max(18, 'es ur?')
    .matches(/^[A-Z]/, "Must by start with uppercase!")
    .required("Required"),
})

export default function App() {
  const initialValues = {
    email: 'example@gmail.com',
    password: ''
  }

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }

  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
        validationSchema={validationSchema}
      >
        {
          (formik) => {
            return (
              <Form>
                <Field type='email' name="email" placeholder='email' />
                <ErrorMessage name="email" component={'p'} />
                <Field type='password' name="password" placeholder='password' />
                <ErrorMessage name="password" component={'p'} />
                <input type="submit" value='add user' />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
