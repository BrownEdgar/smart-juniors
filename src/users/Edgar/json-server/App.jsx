import axios from 'axios';
import { useState, useEffect } from 'react';

import './App.scss'
import Modal from '../props_children/Modal';
import { Field, Form, Formik } from 'formik';
import PATHS from './phats/serverPaths';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [deletedPostId, setDeletedPostId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [editablePostId, setEditablePostId] = useState(null)

  useEffect(() => {
    axios('http://localhost:3000/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [deletedPostId, posts.length])

  const handleDelete = (postId) => {
    setDeletedPostId(postId)
    axios(PATHS.DELETE_POST_BY_ID.replace(':id', deletedPostId), {
      method: 'DELETE'
    })
      .catch(err => console.log(err))
  }
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  const editPost = (id) => {
    setEditablePostId(id)
  }

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    axios.patch(`http://localhost:3000/posts/${editablePostId}`, values)
      .then(() => setPosts([]))
      .catch(err => console.log(err))
    toggleModal()
    resetForm()
  }

  const addPost = () => {
    const newPost = {
      "userId": 10,
      "id": 21,
      "title": "Lorem ipsum dolor sit.",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio incidunt dolorem tempore eveniet recusandae quae. Ab consectetur cumque fugit exercitationem consequuntur temporibus totam earum error. Accusamus ipsum voluptatum consequuntur natus totam. Incidunt, facere tenetur error sit eveniet aut tempora."
    }
    axios.post(`http://localhost:3000/posts`, newPost)
      .then(() => setPosts([]))
      .catch(err => console.log(err))

  }

  return (
    <>
      {
        isOpen && <Modal toggleModal={toggleModal} >
          <Formik
            initialValues={{ userId: '', title: '', body: '' }}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field type="text" name="title" />
              <Field type="text" name="body" />
              <Field type="number" name="userId" min={1} max={10} />
              <input type="submit" />
            </Form>
          </Formik>
        </Modal>
      }

      <button onClick={addPost}>Add post</button>
      <div className='Posts'>
        {posts.map(elem => {
          return (
            <div className="Posts-item" key={elem.id}>
              <span onClick={() => handleDelete(elem.id)}>&#10006;</span>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <button onClick={() => {
                toggleModal();
                editPost(elem.id)
              }}>edit</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
