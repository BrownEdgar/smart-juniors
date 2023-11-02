import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import './App.scss';

const validationSchema = object({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  website: string().required('Website Name is required'),
  message: string().required('Message is required'),
});

export default function App() {
  const [focusedField, setFocusedField] = useState(null);
  //   const [currentFieldName, setCurrentFieldName] = useState(null);
  const [placeholders, setPlaceholders] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    website: 'Website Name',
    message: 'Write your message'
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: '',
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    setPlaceholders({ ...placeholders, [fieldName]: '' });
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setPlaceholders({
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      website: 'Website Name',
      message: 'Write your message',
    });

  }

  function handleBlur(fieldName, fieldValue) {
    setFocusedField('');
    if (!fieldValue) {
      setPlaceholders({ ...placeholders, [fieldName]: fieldName });
    }
  }

  return (
    <div className="form-container">
      <h1>Responsive Contact us Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {
          (formik) => {
            console.log(formik)
            return (
              <Form>
                <div className="form-row">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder={placeholders.firstName}
                    autoComplete="off"
                    onFocus={() => handleFocus('firstName')}
                    onBlur={(e) => handleBlur('firstName', e.target.value)}
                  />
                  <label className={`${(focusedField === 'firstName' || formik.values.firstName !== '') ? 'visible ' : ''}left`}>First Name</label>
                  <ErrorMessage name='firstname' component={'p'} />
                  <Field
                    type="text"
                    name="lastName"
                    placeholder={placeholders.lastName}
                    autoComplete="off"
                    onFocus={() => handleFocus('lastName')}
                    onBlur={(e) => handleBlur('lastName', e.target.value)}
                  />
                  <label className={`${(focusedField === 'lastName' || formik.values.lastName !== '') ? 'visible ' : ''}right`}>Last Name</label>
                  <ErrorMessage name='lastName' component={'p'} />
                </div>
                <div className="form-row">
                  <Field
                    type="email"
                    name="email"
                    placeholder={placeholders.email}
                    autoComplete="off"
                    onFocus={() => handleFocus('email')}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                  />
                  <label className={`${(focusedField === 'email' || formik.values.email !== '') ? 'visible ' : ''}left`}>Email</label>
                  <ErrorMessage name='email' component={'p'} />
                  <Field
                    type="text"
                    name="website"
                    placeholder={placeholders.website}
                    autoComplete="off"
                    onFocus={() => handleFocus('website')}
                    onBlur={(e) => handleBlur('website', e.target.value)}
                  />
                  <label className={`${(focusedField === 'website' || formik.values.website !== '') ? 'visible ' : ''}right`}>Website Name</label>
                  <ErrorMessage name='website' component={'p'} />
                </div>
                <div className="form-row">
                  <Field
                    className='wide'
                    type="text"
                    name="message"
                    placeholder={placeholders.message}
                    autoComplete="off"
                    onFocus={() => handleFocus('message')}
                    onBlur={(e) => handleBlur('message', e.target.value)}
                  />
                  <label className={`${(focusedField === 'message' || formik.values.message !== '') ? 'visible ' : ''}left`}>Write your message</label>
                  <ErrorMessage name='message' component={'p'} />
                </div>
                <div className="form-row">
                  <button type="submit">SUBMIT</button>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

