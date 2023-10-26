import React from 'react'
import PropTypes from 'prop-types'
import "../App.scss";

export default function UserList({ users, selectedUserId }) {

  const selectedUser = users.find(user => user.id === selectedUserId)

  if (!selectedUser) {
    return <p>No user found with the specified ID.</p>
  }

  return (
    <div className='UserList'>
      <h2>{selectedUser.name}</h2>
      <p><strong>Email:</strong> {selectedUser.email}</p>
      <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
      <p><strong>Phone:</strong> {selectedUser.phone}</p>
      <p><strong>Website:</strong> {selectedUser.website}</p>
      <p><strong>Company:</strong> {selectedUser.company.name}</p>
      <p><strong>Catch Phrase:</strong> {selectedUser.company.catchPhrase}</p>
      <p><strong>BS:</strong> {selectedUser.company.bs}</p>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }).isRequired,
    })
  )
};