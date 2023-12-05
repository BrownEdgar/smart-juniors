import { Fragment, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import useRandom from './Components/Hooks/useRandom'
import "./App.scss"

export default function App() {
  const [random, setRandom] = useRandom(0, 'number')
  const [strSelected, setStrSelected] = useState(true)
  

  const submitForm = (formik) => {
    const { count, selectType, stringType } = formik;
    // setStrSelected(selectType !== 'string' ? false : true)
    if (+count > 0)
      setRandom(+count, selectType, stringType)
  }

  return (
    <div className='App'>
      <h1>Letters or numbers randomizer</h1>
      <Formik 
        initialValues={{
          count: '',
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
                <Field  type="number" name="count" placeholder="Count"  min={1} max={10000} required />
                <Field as="select" name="selectType" onChange={(e) => {
                    setStrSelected(e.target.value !== 'string' ? false : true)
                    formik.handleChange(e) 
                  }}>
                  <option value="string">String</option>
                  <option value="number">Number</option>
                </Field>
                <Field as="select" name="stringType" id="stringType">
                  <option value="lower">ToLowerCase</option>
                  <option value="upper">ToUpperCase</option>
                </Field>
                <button type='submit'>Generate</button>
              </Form>
            )
          }
        }
      </Formik>
      <div className='arr'>
        {
          random.length > 0
            ? random.map((block, index) => {
              return (
                <Fragment key={index}>
                  <span className='block'>{block}</span>
                </Fragment>
              )
            })
            : null
        }
      </div>
    </div>
  )
}
