import { useDispatch, useSelector } from "react-redux"
import { addCompany } from "./features/users/usersSlice"
import { Form, Formik, Field, ErrorMessage } from "formik"
import { object,string } from "yup";
import './App.scss'

const validationSchema = object({
  name: string().matches(/^[A-Z]/).min(3).required(),
  phone: string().matches(/\d{9}/).max(9).required(),
  address: string().min(3).required(),
  email: string().email().required(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: ""
}

export default function App() {
  
  const users = useSelector((state) => state.users.data)
  const dispathch = useDispatch()
  
  const handleSubmit = (values,{ resetForm }) => {
    const value = {
        name: values.name,
        contact: {
          email: values.email,
          phone: values.phone,
          address: values.address
        }
      }
    dispathch(addCompany(value))
    resetForm()
  }
  

  return (
    <div>
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
                       <Field name='name' type='text' required />
                       <ErrorMessage name='name' component={'p'} />
                       <div className="underline"></div>
                       <label>Company name</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-data">
                       <Field name='phone' type='text' required />
                       <ErrorMessage name='phone' component={'p'} />
                       <div className="underline"></div>
                       <label>Phone</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-data">
                       <Field name='address' type='text' required />
                       <ErrorMessage name='address' component={'p'} />
                       <div className="underline"></div>
                       <label>Address</label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-data">
                       <Field name='email' type='text' required />
                       <ErrorMessage name='email' component={'p'} />
                       <div className="underline"></div>
                       <label>Email Address</label>
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
     <div className="screen">
      {
        users.map((user,index) => 
          <div className="company" key={index} >
            <h2>{user.name}</h2>
            <p>id: {user.id}</p>
            <p>address: {user.contact.address}</p>
            <p>phone: {user.contact.phone}</p>
            <p>email: {user.contact.email}</p>
            <p id="added" >Added: {user.added}</p>
          </div>
        )
      }
     </div>
    </div>
  )
}
