
import { Field, Formik,Form, ErrorMessage } from 'formik'
import { object,string} from 'yup'
import React from 'react'


const validationSchema = object({
    username:string().required(),
    name: string().required(),
    lastname:string().matches(/^[A-Z]/).required(),
    password:string().min(4).max(14).required(),
    email: string().email(),
})


export default function Register() {
    const initialValues={
        username:"",
        name:"",
        lastname:"",
        password: '',
        email:"",
    }
   
    const handleSubmit=(values,{resetForm})=>{
        console.log(values);
        resetForm()
    }

  return (
    <div>
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
                       <div>
                        <Field type='usernam'   name='username' placeholder='Username' id='username'/>
                        <ErrorMessage name='username' component={'p'}/>
                       </div>
                       <div>
                        <Field type='name'      name='name'     placeholder='Name' id='name' />
                        <ErrorMessage name='name' component={'p'}/>
                       </div>
                       <div>
                        <Field type='lastname'  name='lastname' placeholder='Lastname'id='lastname'  />
                        <ErrorMessage name='lastname' component={'p'}/>
                       </div>
                       <div>
                        <Field type='password'  name='password' placeholder='Password' id='password'  />
                        <ErrorMessage name='password' component={'p'}/>
                       </div>
                       <div>
                        <Field type='email'     name='email'    placeholder='Email' id='email' />
                        <ErrorMessage name='email' component={'p'}/> 
                       </div> 
                       <br />
                        <Field type='submit'    value='Register'/>
                    </Form>
                    )
                }
            }
      </Formik>
    </div>
  )
}
