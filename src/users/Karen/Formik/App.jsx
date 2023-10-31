import { useEffect, useState } from "react"
// import { BsFillAirplaneFill } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { object, string,number } from "yup"

import './App.scss'


const validationSchema = object({
  email:string().email().required("Required"),
  password:string().min(8,).max(18).matches(/^[A-Z]/,"Must be started to uppercase").required("Required"),
  age: number().min(18).max(55).required(),

})

export default function App() {
  const initialValues={
    email:'',
    password:'',
    age:''
  }
  const handleSubmit=(values,{resetForm})=>{
    console.log(values);
    resetForm()
  }

  return (
    <div className="App">
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={true}
      validationSchema={validationSchema}
      >
       {
        (formik)=>{
         return(
         <Form>
           <Field type="email" name="email" placeholder="email"/>
           <ErrorMessage name="email" component={'p'}/>
           <Field type="password" name="password" placeholder="password"/>
           <ErrorMessage name="password" component={'p'}/>
           <Field type="number" name="age" placeholder="age" />
           <ErrorMessage name="age" component={'p'}/> 
           <input type="submit" value="add user"/>
         </Form>
         )
        }
       }
      </Formik>
    </div>

  )
}
