import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import {object, string} from "yup"
import "./Forms.scss"


const validationSchema = object({
    FirstName: string().matches(/^[A-Z]/, "The FirstName should start with uppercase").min(4, "min char numbers is 4").max(16, "Max char numbers is 16").required("The field is required!"),
    LastName: string().matches(/^[A-Z]/, "The LastName should start with uppercase").min(6,"min char numbers is 6").max(20, "Max char numbers is 20").required("The field is required!"),
    EmailAddress: string().email().required("The field is required!")
})

export default function Forms() {
    const initialValues= {
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        WebsiteName: "",
        Message: ""
    }

    const handleSubmit = (values, {resetForm}) =>{
        console.log(values)
        resetForm()
    }

  return (
    <div className='App'>   
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validationSchema}
        > 
            {
                (formik)=> {
                    return(
                        <Form className = "Form" >
                            <h1>Responsive contact us Form</h1>
                            <div className='div'>
                            <Field type="text"  name='FirstName' placeholder='First Name'/>
                            <ErrorMessage  name='FirstName' component ={'p'}/>
                            <Field type="text"  name='LastName' placeholder='Last Name'/>
                            <ErrorMessage  name='LastName' component ={'p'}/>
                            <Field type="email"  name='EmailAddress' placeholder='Email address'/>
                            <ErrorMessage  name='EmailAddress' component ={'p'}/>
                            <Field type="text"  name='WebsiteName' placeholder='Website Name'/>
                            </div>
                            <Field  className="message" type="text"  name='Message'placeholder='You meaasge here'/>
                            
                            <input className="submit" type="submit" placeholder='Submit'/>
                        </Form>
                            )
                            }
            }
        </Formik>
    </div>
  )
}