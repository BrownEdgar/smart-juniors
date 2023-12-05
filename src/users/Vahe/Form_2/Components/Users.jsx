import React from 'react'

export default function Users(props) {
  
  const deleteById = (index) => {
    props.setUsers(props.users.toSpliced(index, 1)) 
  }

  return (
    <div className='Users' >
      <h1 className="forumtext">Users List</h1>
      <ul className='myUl' >
        {
          props.users.map( (elem,index) => <li key={index} >
            Name: {elem.username} | Email: {elem.email} <br></br>
            Phone: {elem.tel} | Password: {elem.password} |
            Id: {elem.id}
            <span onClick={ () => { deleteById(index) } } className='delete' >&#128465;</span>
          </li> )
        }
      </ul>
    </div>
  )
}
