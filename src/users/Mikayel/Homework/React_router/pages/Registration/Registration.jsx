import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import { object, string, mixed } from 'yup';
import './Registration.scss'

export default function Registration({ addUser }) {
  let navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    photo: null,
    about: '',
  };

  const validationSchema = object({
    firstName: string().required('Required'),
    lastName: string().required('Required'),
    email: string().email('Invalid email address').required('Required'),
    photo: mixed().required('Required'),
    about: string().required('Required'),
  });

  const onSubmit = (values) => {
    addUser(values);
    console.log(values);
    navigate("/users");
  };

  return (
    <div className='container'>
      <h2>Registration</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className='input'>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" autoComplete="off" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className='input'>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" autoComplete="off" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className='input'>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" autoComplete="off" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className='input'>
            <label htmlFor="photo">Upload Photo</label>
            <Field type="file" id="photo" name="photo" autoComplete="off" />
            <ErrorMessage name="photo" component="div" className="error" />
          </div>
          <div className='input'>
            <label htmlFor="about">About Yourself</label>
            <Field as="textarea" id="about" name="about" autoComplete="off" />
            <ErrorMessage name="about" component="div" className="error" />
          </div>
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  )
}