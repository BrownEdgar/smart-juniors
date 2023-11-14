import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Formik, Form, Field } from 'formik'
import axios from 'axios';

import CustomField from "../../components/CustomField/CustomField";

import "./UserSettings.scss"


export default function UserSettings() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const image = useRef(null)
  const navigate = useNavigate()

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName
  }

  useEffect(() => {
    axios(`users/${id}`)
      .then(res => setUser(res.data))
  }, [])

  const submitForm = (values) => {
    axios.patch(`users/${id}`, values)
    navigate(`..`)
  }

  return (
    <div className='UserSettings'>
      {
        user?.firstName
          ? <Formik
            initialValues={initialValues}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={submitForm}
          >
            {
              (formik) => (
                <Form>
                  <CustomField label="First Name:" type="text" name="firstName" placeholder="Change your first name..." />
                  <CustomField label="Last Name:" type="text" name="lastName" placeholder="Change your last name..." />
                  <Field type="file" name="fileName" onChange={(e) => {
                    image.current.src = `/${e?.target?.files?.[0].name}`
                    formik.setFieldValue("profile_image", `${e?.target?.files?.[0].name}`)
                  }
                  } />
                  <div className='_imgBox'>
                    <img src={`/${user?.profile_image}`} alt="" ref={image} />
                  </div>
                  <div className='_saveBtn-box'>
                    <button type='submit'>Save Settings</button>
                  </div>
                </Form>
              )
            }
          </Formik>
          : null
      }
    </div>
  )
}
