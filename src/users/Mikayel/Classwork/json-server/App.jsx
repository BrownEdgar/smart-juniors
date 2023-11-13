import { useState, useEffect } from 'react'
import Modal from '../props_children/Modal'
import { Formik, Form, Field } from "formik";
import axios from 'axios'
import './App.scss'

export default function App() {
  const [posts, setPosts] = useState([])
  const [deletedPostId, setDeletedPostId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [editedPostId, setEditedPostId] = useState(null)

  useEffect(() => {
    axios("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [deletedPostId], [posts.length])

  const handleDelete = (postId) => {
    setDeletedPostId(postId)
    axios(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE'
    })
      .catch(err => console.log(err))
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const addPost = () => {
    const newPost = {
      "userId": 10,
      "id": 21,
      "title": "Lorem ispum dolor sit.",
      "body": "ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec"
    }
    axios.post(`http://localhost:3000/posts`, newPost)
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  }

  const editPost = (id) => {
    setEditedPostId(id)
  }

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    axios.patch(`http://localhost:3000/posts/${editedPostId}`, values)
      .then(() => setPosts([]))
      .catch(err => console.log(err))
    toggleModal()
    resetForm()
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
      <button onClick={addPost}>Add Post</button>
      <div className='Posts'>
        {posts.map(post => {
          return (
            <div className='Posts-item' key={post.id}>
              <span onClick={() => handleDelete(post.id)}>&#10006;</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => {
                toggleModal()
                editPost(post.id)
              }}>Edit</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
