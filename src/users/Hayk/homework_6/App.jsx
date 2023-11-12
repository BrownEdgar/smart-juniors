import { useEffect, useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer/reducer.js'
import axios from 'axios'
import * as Actions from "./reducer/ActionTypes.js";
import Posts from './components/Posts/Posts';
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik';
import { string, object } from "yup";
import Modal from './components/Modal/Modal.jsx';
import Lists from './components/Lists/Lists.jsx';

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "posts",
      params: {
        _limit: 10,
      }
    }).then(posts => dispatch({
      type: Actions.GET_POSTS, payload: {
        posts: posts.data
      }
    })).catch(error => console.log(error))
  }, [])

  return (
    <div className='App'>
      {
        state.postModal
          ? <Modal dispatch={dispatch}>
            <div>
              <h2>Are you sure?</h2>
              <div className='btnGroup'>
                <button onClick={() => dispatch({ type: Actions.DELETE_POST })}>yes</button>
                <button onClick={() => dispatch({ type: Actions.CLOSE_POST_MODAL })}>no</button>
              </div>
            </div>
          </Modal>
          : null
      }
      <div className='App-sidebar'>
        <button onClick={() => dispatch({ type: Actions.SHUFFLE_ARRAY, payload: { count: 15 } })}>shuffle</button>
        <button onClick={() => dispatch({ type: Actions.REPLACE_POST_ID })}>replace post id</button>
        <Formik
          initialValues={{ name: '' }}
          validateOnChange={false}
          validateOnBlur={true}
          validationSchema={object({
            name: string()
            .matches(/^[A-Z]/, "First symbol must be a upper case")
            .min(2)
            .required()
          })}
          onSubmit={(formik) => dispatch({ type: Actions.ADD_DEVELOPER, payload: { name: formik.name } })}
        >
          <Form>
            <Field type="text" name="name" id="name" placeholder='Developer Name' autoComplete="off"/>
            <ErrorMessage name='name' component={'p'}/>
            <button type="submit">add developer</button>
          </Form>
        </Formik>
        <Lists list={state.developers} dispatch={dispatch}/>
      </div>
      <div className='App-grid'>
        {
          state.posts.length > 0
            ? <Posts posts={state.posts} dispatch={dispatch} />
            : null
        }
      </div>
    </div>
  )
}
