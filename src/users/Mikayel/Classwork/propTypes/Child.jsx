import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ count, name, albums, users }) {
  return (
    <div>
        <h2>Count {count}</h2>
        <h2>{name.toUpperCase()}</h2>
        <ul>
            {albums.map(album => (
                <li key={album.id}>{album.userId} - {album.title}</li>
            ))}
        </ul>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <strong>{user.name}</strong>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

Child.defaultProps = {
    name: "Karen"
}

Child.propTypes = {
    // handleClick: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']).isRequired,
    age: PropTypes.oneOf([
        PropTypes.number,
        PropTypes.string
    ]),
    obj: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            userId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })
    ),
    albums: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}


const UserPropTypes = PropTypes.shape({
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
});