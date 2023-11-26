import { useReducer } from 'react'
import reducer, { initialState } from './Copmonents/reducer/reducer'
import * as actions from "./Copmonents/reducer/actionTypes" 
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Modal from './Copmonents/Modal/Modal'
import './App.scss'
import List from './Copmonents/List/List'
import { object,string } from 'yup'

const validationSchema1 = object({
  name: string().max(86)
});

const validationSchema2 = object({
  changeName: string().max(86)
});


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className='App' >
        <div className="Todo">
          <Formik
            initialValues={{ name: '' }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={validationSchema1}
            onSubmit={(formik) => dispatch({ type: actions.ADD_TODO, payload: { name: formik.name } })}
          >
          <Form>
            <h1>My To Do List</h1>
            <Field type="text" name="name" id="name" placeholder='Title...' autoComplete="off" required/>
            <button type="submit">Add Title</button>
            <ErrorMessage name='name' component={'p'}/>
          </Form>
        </Formik>
        <List todo={state.todo} dispatch={dispatch} />
        </div>
      {
       state.isopen 
              ?(
                <Modal dispatch={dispatch} >
                  <Formik
                    initialValues={{ changeName: '' }}
                    validateOnChange={false}
                    validateOnBlur={true}
                    validationSchema={validationSchema2}
                    onSubmit={(formik) => dispatch({ type: actions.CHANGE_NAME, payload: { changeName: formik.changeName } })}
                  >
                    <Form>
                      <h1>Change this title</h1>
                      <hr />
                      <br />
                      <Field type="text" name="changeName" id="name" placeholder='Title...' autoComplete="off"/>
                      <ErrorMessage name='changeName' component={'p'}/>
                      <br />
                      <button type="submit">Confirm</button>
                      <span onClick={() =>  dispatch( {type: actions.CLOSE_MODAL } )} >Cancel</span>
                    </Form>
                  </Formik>
                </Modal> 
              ): null 
      }
      </div>
    </>
  )
}
