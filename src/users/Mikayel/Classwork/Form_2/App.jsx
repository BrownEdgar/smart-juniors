import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string, number } from 'yup'
import './App.scss'

const validationSchema = object({
    email: string().email().required(),
    password: string()
    .min(8, "8-ic avel")
    .max(18, "es ur?")
    .matches(/^[A-Z]/, "Must be start with Uppercase!")
    .required("Required"),
    age: number()
    .moreThan(18)
    .lessThan(80)
    .positive()
    .integer()
    .required(),
})

export default function App() {
    const initialValues = {
        email: 'example@example.com',
        password: '',
        age: ''
    }

const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
                            <Field type='email' name='email' placeholder='email' />
                            <ErrorMessage name='email' component={'p'}/>
                            <Field type='password' name='password' placeholder='password' />
                            <ErrorMessage name='password' component={'p'}/>
                            <Field type='number' name='age' placeholder='age' />
                            <ErrorMessage name='age' component={'p'}/>
                            <input type="submit" value='Add User' />
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}
