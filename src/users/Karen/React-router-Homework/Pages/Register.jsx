import {Formik,Form, Field} from 'formik'

export default function Register() {

    const initialValues={
      name:'',
      username:'',
      email:'',
      street:'',
      suite:'',
      city:'',
      phone:'',
      website:'',
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
        validateOnBlur={true}
        validateOnChange={false}
        >
              <Form>
                    <div>
                      <Field type="text" name='name' placeholder='name'/>
                      <Field type="username" name='username' placeholder='username'/>
                      <Field type="email" name='email' placeholder='email'/>
                      <Field type="street" name='street' placeholder='street'/>
                      <Field type="suite" name='suite' placeholder='suite'/>
                      <Field type="city" name='city' placeholder='city'/>
                      <Field type="phone" name='phone' placeholder='phone'/>
                      <Field type="website" name='website' placeholder='website'/>
                      <input type="submit" name='Add user' />
                    </div>
              </Form>
        </Formik>
    </div>
  )
}




 