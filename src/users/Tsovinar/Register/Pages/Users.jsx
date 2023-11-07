import React from 'react'

export default function Users({users}) {
  return (
    <div className='users'>
      <h2>Users list </h2>
      {
        users.length!=0 ? 
        users.map((elm, ind) => <li key={ind} className='userlist'> firstname: {elm.FirstName}, lastname:{elm.LastName} , age: {elm.age}</li> )
        :
        null
      }   
    </div>
  )
}
