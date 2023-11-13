import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.scss"
import Modal from '../../Edgar/props_children/Modal'
import {Formik, Form, Field} from "formik"

export default function App() {
    const [post, setPost] = useState([])
    const [deletedId, setdeletedId] = useState(null)
    const [editablePostid, seteditablePostid] = useState(null)
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
      axios("http://localhost:3000/posts")
      .then(res => setPost(res.data))
    
    }, [deletedId, post.length])


    const deletePost = (id) => {
       axios(`http://localhost:3000/posts/${id}`,{
        method: "DELETE"
       })
    }

    const deletedPostId = (id) => {
        setdeletedId(id)
    }

    const addNewpost = () => {
        const newPost = 
        {
            "userId": 2,
            "id": 11,
            "title": "lorem",
            "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
          }

        axios.post(`http://localhost:3000/posts`, newPost)
        .then(() => setPost([]))
      
       
     }
        const editPost =(editedid) =>{
            seteditablePostid(editedid)
            }
        const toggleModal =() => {
                setisOpen(!isOpen)
            }

        const handleSubmit =(values, {resetForm}) =>{
                console.log(values)
                resetForm()
                toggleModal()
               axios.patch(`http://localhost:3000/posts/${editablePostid}`, values)
                .then((res) => setPost([]))
            } 
        
        
  return (
    <>
   { 
    isOpen && <Modal toggleModal={toggleModal}>
        <Formik initialValues = {{userId: '', title: '', body: ''}}
            validateOnBlur ={true}
            validateOnChange ={false}
            onSubmit ={handleSubmit}
            >  
            <Form>
                <Field type= "number" name= "userId" placeholder="user id" min={1} max ={5} ></Field>
                <Field type= "text" name= "title" placeholder="title" ></Field>
                <Field type= "text" name= "body" placeholder="body" ></Field>
                <input type="submit" />

            </Form>
        </Formik>
    </Modal>
    
    }

    
        <button onClick={addNewpost}>Add new post</button>
        <div className='posts'>
        {
            post.map(elm =>{
                return <div className='posts-item' key={elm.id}>
                    <span onClick={() => {deletePost(elm.id) 
                    deletedPostId(elm.id)}}>&#10006;</span>
                    <h2>{elm.title}</h2>
                    <p>{elm.body}</p>
                    <button onClick={() => {
                        toggleModal(elm.id)
                        editPost(elm.id)}}>Edit Post</button>
                         </div>         
                         }
                     )       
        }
         </div>
    
    </>
  )
}
