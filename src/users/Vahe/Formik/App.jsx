import React, { useState } from 'react'
import './App.scss'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { object,string } from 'yup'

const validationSchema = object({
  firstName: string().min(3).max(16).required(),
  lastName: string().min(3).max(16).required(),
  email: string().email().required(),
  webSiteName: string().required(),
  message: string().required(),
});

function App() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    webSiteName: '',
    message: '',
  }

  const [users, setUsers] = useState([])

  const handleSubmit = (values,{ resetForm }) => {
    setUsers([...users,values])
    resetForm()
  }
  
  return (
    <div className="container">
        <div className="text">Responsive Contact us Form</div>
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
                  <div className="form-row">
                    <div className="input-data">
                       <Field name='firstName' type='text' required />
                       <ErrorMessage name='firstName' component={'p'} />
                       <div className="underline"></div>
                       <label>First Name</label>
                    </div>
                    <div className="input-data">
                       <Field name='lastName' type='text' required />
                       <ErrorMessage name='lastName' component={'p'} />
                       <div className="underline"></div>
                       <label>Last Name</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-data">
                       <Field name='email' type='text' required />
                       <ErrorMessage name='email' component={'p'} />
                       <div className="underline"></div>
                       <label>Email Address</label>
                    </div>
                    <div className="input-data">
                       <Field name='webSiteName' type='text' required />
                       <ErrorMessage name='webSiteName' component={'p'} />
                       <div className="underline"></div>
                       <label>Website Name</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-data textarea">
                       <Field name='message' type='text' required />
                       <ErrorMessage name='message' component={'p'} />
                       <br />
                       <div className="underline"></div>
                       <label>Write your message</label>
                    </div>
                  </div>
                  <br />
                  <div className="form-row submit-btn">
                    <div className="input-data">
                    <div className="inner"></div>
                      <input type="submit" value="submit"/>
                    </div>
                  </div>
                </Form>
              )
            }
          }
        </Formik>
     </div>
  )
}

export default App
