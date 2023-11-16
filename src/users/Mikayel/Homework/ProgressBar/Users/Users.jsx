import React from 'react';
import './Users.scss'

export default function Users({ users }) {
  return (
    <div className="user-list">
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}<br />
            {user.address && (
              <span>
                Address: {user.address.street}, {user.address.suite}, {user.address.city}<br />
              </span>
            )}
            {user.phone && <span>Phone: {user.phone}<br /></span>}
            {user.website && <span>Website: {user.website}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
