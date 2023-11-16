import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string, mixed } from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AddPersonForm.scss'
import ROUTES from '../../routes/routes';

const initialValues = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  info: '',
  workIndustry: '',
  successInField: '',
  image: '',
};

const validationSchema = object().shape({
  firstname: string().required('First name is required'),
  lastname: string().required('Last name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  birthday: string().required('Birthday is required'),
  info: string().required('Info is required'),
  workIndustry: string().required('Work Industry is required'),
  successInField: string().required('Success in Field is required'),
  image: mixed().required('Image is required'),
});

const extractFileName = (filePath) => {
  return filePath.split('\\').pop().split('/').pop();
};

export default function AddPersonForm({ updatePeopleList }) {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      values.image = extractFileName(values.image);

      const response = await axios.post('http://localhost:3000/people', values);
      console.log('New person added:', response.data);

      updatePeopleList();

      resetForm(initialValues);
    } catch (error) {
      console.error('Error adding a new person:', error);
    } finally {
      setSubmitting(false);
      navigate({pathname: ROUTES.HOME})
    }
  };

  return (
    <div className='AddPersonForm'>
      <h1>Add New Person</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form-container'>
          <div className='left-section'>
            <div className="form-field">
              <label className="label" htmlFor="firstname">First Name:</label>
              <Field className="input-field" type="text" id="firstname" name="firstname" />
              <ErrorMessage className="error-message" name="firstname" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="lastname">Last Name:</label>
              <Field className="input-field" type="text" id="lastname" name="lastname" />
              <ErrorMessage className="error-message" name="lastname" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="email">Email:</label>
              <Field className="input-field" type="text" id="email" name="email" />
              <ErrorMessage className="error-message" name="email" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="birthday">Birthday:</label>
              <Field className="input-field" type="text" id="birthday" name="birthday" />
              <ErrorMessage className="error-message" name="birthday" component="div" />
            </div>
          </div>

          <div className='right-section'>
            <div className="form-field">
              <label className="label" htmlFor="info">Info:</label>
              <Field className="input-field" type="text" id="info" name="info" />
              <ErrorMessage className="error-message" name="info" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="workIndustry">Work Industry:</label>
              <Field className="input-field" type="text" id="workIndustry" name="workIndustry" />
              <ErrorMessage className="error-message" name="workIndustry" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="successInField">Success in Field:</label>
              <Field className="input-field" type="text" id="successInField" name="successInField" />
              <ErrorMessage className="error-message" name="successInField" component="div" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="image">Image:</label>
              <Field className="input-field" type="file" id="image" name="image" />
              <ErrorMessage className="error-message" name="image" component="div" />
            </div>
          </div>

          <div className="button-container">
            <button className="button" type="submit">Add Person</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
