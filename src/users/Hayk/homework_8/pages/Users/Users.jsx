import { Link } from 'react-router-dom'

import "./Users.scss"

export default function Users({ users }) {
  return (
    <div className='Users'>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthday</th>
          </tr>
          {
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link key={user.id} to={`${user.id}`}>
                      {user.firstName}
                    </Link>
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{`${user?.day} ${user?.month} ${user?.year}`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
