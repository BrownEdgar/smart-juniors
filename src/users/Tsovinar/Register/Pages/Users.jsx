import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Users({users}) {
  
  return (
    <div className='users'>
     <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        {
          users.map((user, index) =>{
            return(
              <tr key={index}>
                <td>
                  <Link to={`${user.FirstName}`}>
                    {user.FirstName}
                  </Link>
                </td>
                <td>{user.LastName}</td>
                <td>{user.age}</td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
            

export default function Users({ users }) {
  return (
    <div className='users'>
      <h2>Users list </h2>
      {
        users.length != 0 ? (
          users.map((elm, ind) => {
            return (
              <li key={ind} className='userlist' >
                firstname : {elm.FirstName},
                lastname:{elm.LastName},
                age : {elm.age}
              </li>
            )
          })
        ) : null
      }
    </div>
  )
}
