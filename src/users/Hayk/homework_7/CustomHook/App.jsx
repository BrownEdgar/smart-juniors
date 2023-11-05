import React, { Fragment, useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'

import useRandom from './Hooks/useRandom'

import "./App.scss"

export default function App() {
  const [random, setRandom] = useRandom(12, 'number')
  const [strSelected, setStrSelected] = useState(true)

  useEffect(() => {
    const { stringType } = document.forms[0]
    if (!strSelected) {
      stringType.setAttribute("disabled", '')
    } else {
      stringType.removeAttribute("disabled")
    }
  }, [strSelected])


  const submitForm = (formik) => {
    const { textInput, selectType, stringType } = formik;
    setStrSelected(selectType !== 'string' ? false : true)
    if (+textInput > 0)
      setRandom(+textInput, selectType, stringType)
  }

  return (
    <div className='App'>
      <h1>Generate Random letters or numbers</h1>
      <Formik
        initialValues={{
          textInput: '',
          selectType: 'string',
          stringType: 'lower',
        }}
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={(e) => submitForm(e)}
      >
        {
          (formik) => {
            return (
              <Form>
                <Field
                  type="number"
                  name="textInput"
                  id="textInput"
                  placeholder="Enter a count"
                  min={1}
                  max={5000}
                  required />
                <Field
                  as="select"
                  name="selectType"
                  onChange={(e) => {
                    /* disable letters convert select-box when type is number*/
                    setStrSelected(e.target.value !== 'string' ? false : true)
                    formik.handleChange(e) // call default formik handleChange function
                  }}>
                  <option value="string">String</option>
                  <option value="number">Number</option>
                </Field>
                {/* letters convert select-box */}
                <Field as="select" name="stringType" id="stringType">
                  <option value="lower">To LowerCase</option>
                  <option value="upper">To UpperCase</option>
                </Field>
                <button type='submit'>Generate</button>
              </Form>
            )
          }
        }
      </Formik>
      <div className='App-container'>
        {
          random.length > 0
            ? random.map((item, index) => {
              return (
                <Fragment key={index}>
                  <span className='App-container_item'>{item}</span>
                </Fragment>
              )
            })
            : null
        }
      </div>
    </div>
  )
}
