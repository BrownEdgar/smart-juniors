import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import { string, object } from 'yup';
import './Registration.scss'

export default function Registration({ addUser }) {
  let navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = object({
    firstName: string().required('Required'),
    lastName: string().required('Required'),
    email: string().email('Invalid email address').required('Required'),
  });

  const onSubmit = (values) => {
    addUser(values);
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
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  )
}