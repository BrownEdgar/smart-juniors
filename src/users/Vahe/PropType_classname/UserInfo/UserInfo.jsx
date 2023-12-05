import React from 'react'
import PropTypes from 'prop-types'
import "../App.scss";

export default function UserInfo({ users, chooseedId }) {

  const chooseedUser = users.find(user => user.id === chooseedId)

  return (
    <div className='UserInfo'>
      <h2>{chooseedUser.name}</h2>
      <p>&#9993;:  
        <a href={`mailto:${chooseedUser.email}`}>
          {chooseedUser.email}
        </a>
      </p>
      <p>&#128392;: 
        <a href={`https://www.google.com/maps/place/${chooseedUser.address.street},+${chooseedUser.address.city},+${chooseedUser.address.zipcode}`}>
          {chooseedUser.address.street}, {chooseedUser.address.city}, {chooseedUser.address.zipcode}
        </a>
      </p>
      <p>&#9990;: 
        <a href={`tel:${chooseedUser.phone}`}>
          {chooseedUser.phone}
        </a>
      </p>
      <p>&#127760;: 
        <a href={`https://www.${chooseedUser.website}`}>
          {chooseedUser.website}
        </a>
      </p>
      <p>🏢: 
        <a href={`https://www.google.com/search?q=${chooseedUser.company.name}`}>
          {chooseedUser.company.name}
        </a>
      </p>
      <p>Catch Phrase: {chooseedUser.company.catchPhrase}</p>
      <p>BS: {chooseedUser.company.bs}</p>
    </div>
  );
}

UserInfo.propTypes = {
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