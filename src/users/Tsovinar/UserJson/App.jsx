import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.scss'
import Modal from '../../Edgar/props_children/Modal'
import {Formik, Form, Field} from "formik"

export default function App() {
    const [users, setUsers] = useState([])
    const [deletedId, setDeletedId] = useState(null)
    const [editableUserid, seteditableUserid] = useState(null)
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
      axios('http://localhost:3000/users')
      .then(res => setUsers(res.data))
    
    }, [ deletedId, users.length])
    
const deleteUser = (id) =>{
    axios(`http://localhost:3000/users/${id}`,{
        method: 'DELETE'
    })
    .then(() => setDeletedId(null))

}
const deletedUserId = (id) =>{
    setDeletedId(id)
}

const editedUserid = (id) =>{
    seteditableUserid(id)
}

const toggleModal =() => {
    setisOpen(!isOpen)
}

const handleSubmit =(values, {resetForm}) =>{
    resetForm()
    toggleModal()
   axios.patch(`http://localhost:3000/users/${editableUserid}`, values)
    .then(() => setUsers([]))
} 


  return (
    <div>
        <>
        { 
    isOpen && <Modal toggleModal={toggleModal}>
        <Formik initialValues = {{about: ''}}
            validateOnBlur ={true}
            validateOnChange ={false}
            onSubmit ={handleSubmit}
            >  
            <Form>
                <Field type= "text" name= "about" placeholder="biology" ></Field>
                <Field type= "text" name= "name" placeholder="name" ></Field>
                <input type="submit" />

            </Form>
        </Formik>
    </Modal>
    
    }
        <button className='addNew' >Add new</button>
        <h1>FAMOUS PAINTERS</h1>
        <div className='App'>
            {
                users.map(elm => {
                    return <div key={elm.id} className='App-painters'>
                        <h2>{elm.name}</h2>
                         <img src={elm.pic}></img>
                         <h3>Life : {elm.life}</h3>
                        <h3>Country: {elm.Country}</h3>
                        <p>Biology: {elm.about}</p>
                        <button className='App-painters App-painters_delete' onClick={() => {
                            deleteUser(elm.id)
                            deletedUserId(elm.id)} }>X</button>
                        <button className='App-painters App-painters_edit' onClick={() =>{
                            editedUserid(elm.id)
                            toggleModal()
                        }}>Edit
                        </button>
                    </div>
                })
            }
            </div>
            </>
            
    </div>
  )
}
