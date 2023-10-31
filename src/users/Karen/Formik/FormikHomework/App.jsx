
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object,string } from 'yup'
import './App.scss'


const validationSchema = object({
      'First Name': string().matches(/^[A-Z]/,"Enter your name with uppercase ").required("Requierd"),
      'Email Address':string().email(),
      'Last Name':string().matches(/^[A-Z]/,"Enter your name with uppercase ").required(),
      'Website Name':string().required(),
      'Write your message': string(),
})


export default function App() {
    const initialValues={
        'First Name':'',
        'Email Address':'',
        'Last Name':'',
        'Website Name':'',
        'Write your message':'',
    }
    
    const handleSubmit=(values,{resetForm})=>{
        resetForm()
        console.log(values);
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
        {
            (formik)=>{
                return(
         <Form>
            <label htmlFor="text" className='Lable'>Responsive Contact us Form</label>
            <Field type="text" name="First Name" placeholder="First Name" className="First" />
            {/* <ErrorMessage name='First Name' component={'p'}/> */}
            <Field type="text" name="Last Name" placeholder="Last Name" className="Last" />
            <Field type="email" name="Email Address" placeholder="Email Address" className="Email"/>
            <Field type="text" name="Website Name" placeholder="Website Name"  className="Website"/>
            <Field type="text" name="Write your message" placeholder="Write your message" className="Write" />
            <Field type="submit" name="submit" value="SUBMIT"  className="Submit"/>
        </Form>
                )
            }
        }
     </Formik>
    </div>
  )
}



 