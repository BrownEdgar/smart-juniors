import { useEffect, useReducer,useState,Fragment } from 'react'
import reducer, { initialState } from './Copmonents/reducer/reducer'
import { FILL_POSTS, DELETE_BY_ID, CLOSE_MODAL, OPEN_MODAL, ADD_DEV, SHUFFLE_ARR, REPLACE_POST_ID } from './Copmonents/reducer/actionTypes'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { string, object } from "yup"
import axios from 'axios'
import Modal from './Copmonents/Modal/Modal'
import './App.scss'
import List from './Copmonents/List/List'

const validationSchema = object({
  name: string().matches(/^[A-Z]/, 'The developer name must be capitalized').min(3).max(18).required()
});

export default function App() {
  const [currentIndex, setcurrentIndex] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "posts",
      params: {
        _limit: 10,
      }
    }).then(posts => dispatch({
      type: FILL_POSTS, payload: {
        posts: posts.data
      }
    })).catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className='App' >
        <div className="sidebar">
          <button onClick={() => dispatch({ type: SHUFFLE_ARR })}>shuffle</button>
          <button onClick={() => dispatch({ type: REPLACE_POST_ID })}>replace post id</button>
          <Formik
            initialValues={{ name: '' }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={validationSchema}
            onSubmit={(formik) => dispatch({ type: ADD_DEV, payload: { name: formik.name } })}
          >
          <Form>
            <Field type="text" name="name" id="name" placeholder='Developer Name' autoComplete="off"/>
            <ErrorMessage name='name' component={'p'}/>
            <button type="submit">Add Developer</button>
          </Form>
        </Formik>
        <List developers={state.developers} dispatch={dispatch} />
        </div>
      {
       state.isopen 
              ?(
                <Modal dispatch={dispatch} >
                  <h1>&#9888; Warning</h1>
                  <hr />
                  <br />
                  <h2>Are you sure?</h2>
                  <button onClick={() =>  dispatch( {type: DELETE_BY_ID, payload: {lastIndexForDel: currentIndex} } )}>Yes</button>
                  <button onClick={() =>  dispatch( {type: CLOSE_MODAL, payload: {isopen: !state.isopen} } )} >No</button>
                </Modal> 
              ): null 
      }
        <div className="todos">
          {
            state.posts.map((todo,index) => {
              return (
                <Fragment key={todo.id}>
                  <div>
                    <button onClick={() => {
                      dispatch({type: OPEN_MODAL});
                      setcurrentIndex(index);
                    }} >&#215;</button>
                    <p>{todo.title}</p>
                    <br />
                    <p>{todo.body}</p>
                    <p id='id' >Id. {todo.id}</p>
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
