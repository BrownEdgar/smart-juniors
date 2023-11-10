
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import {object, string, number} from "yup"

const validationSchema = object({
    FirstName: string().matches(/^[A-Za-z]/, "The FirstName should start with uppercase").required("The field is required!"),
    LastName: string().matches(/^[A-Za-z]/, "The LastName should start with uppercase").required("The field is required!"),
    age: number().required()
})

export default function Register(props) {

    const initialValues= {
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        age: ""
    }

    const handleSubmit = (values, {resetForm}) => {
        props.setUsers([...props.users, values])
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
                            <h1>Registration form</h1>
                            <Field type="text"  name='FirstName' placeholder='First Name'/>
                            <ErrorMessage  name='FirstName' component ={'p'}/>
                            <Field type="text"  name='LastName' placeholder='Last Name'/>
                            <ErrorMessage  name='LastName' component ={'p'}/>
                            <Field type="number" name="age" placeholder="age" />
                            <ErrorMessage  name='age' component ={'p'}/>
                            <Field type="file"  name="img" accept= "image/*"/>
                            <input className="submit" type="submit" placeholder='Submit'/>
                        </Form>
                            )
                            }
            }
        </Formik>
    </div>
  )
}
