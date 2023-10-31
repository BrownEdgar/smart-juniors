import React, {useState, useEffect} from 'react'
import "./App.scss"
import { ErrorMessage, Field, Form, Formik} from "formik"
import { object, string,} from 'yup';


const validationSchema = object({
  firstName: string("Use String").min(3, "min 3").max(20, "max 20").required("Required"),
  lastName: string("").min(3,"min3").max(15,"max 15").required("Required"),
  email:string("").email().required("Required"),
  websiteName:string("").required("Required"),
  message:string("").required("Required"), 
  password: string().min(8, "min 8").max(18, "max 18").required("Required")
})



export default function App() {
  const [users, setUsers] = useState([])
  const initialValues = {
    firstName: "",
    lastName:"",
    email:"",
    websiteName:"",
    message:"",
    password:"",
  }
  const handleSubmit = (values,{resetForm}) =>{
    console.log(values)
    const updateusers =  setUsers((prevUsers)=>[...prevUsers,values])
    resetForm()
    return updateusers
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
       {(formik) => {
        return (
           <Form >
            <h1>Responsive Contact us Form</h1>
            <Field type="email" name='email' id="email" placeholder="email"/>
            <ErrorMessage  name='email' component={"p"}/>
            <Field type="text" name="firstName" id="firstName" placeholder="firstName"/>
            <ErrorMessage  name='firstName' component={"p"}/>
            <Field type="text" name="lastName" id="lastName"
            placeholder="lastName" />
            <ErrorMessage  name='lastName' component={"p"}/>
            <Field type="text" name="websiteName" id="websiteName"
            placeholder="websiteName"/>
            <ErrorMessage  name='websiteName' component={"p"}/>
            <Field type="text" name="message" id="message"
            placeholder="message"/>
            <ErrorMessage  name='message' component={"p"}/>
            <Field type="password" name="password"
            id="password" 
            placeholder="password" />
            <ErrorMessage  name='password' component={"p"}/>
          <input type="submit" value="SUBMIT" id="button"/>
        </Form>
        )
       }}
      </Formik>
      <div>
        <ul>
          {users.map((user,index)=>(
            <li key={index}>
              <strong>Name :</strong> {user.firstName} {user.lastName},
              <strong>Email :</strong> {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
