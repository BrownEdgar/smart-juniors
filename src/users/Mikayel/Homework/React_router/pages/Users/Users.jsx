import React from 'react';
import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routes';
import './Users.scss'

export default function Users({ users }) {
  return (
    <div className="users-container">
      <h2>Users</h2>
      {users.length > 0
        ? (
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td><Link to={ROUTES.REGISTRATION}>{`${user.firstName} ${user.lastName}`}</Link></td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : (
          <div className="empty-message">No registered users.</div>
        )}
    </div>
  )
}