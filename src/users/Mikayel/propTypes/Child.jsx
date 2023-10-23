import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ count, name, albums }) {
  return (
    <div>
        <h2>Count {count}</h2>
        <h2>{name.toUpperCase()}</h2>
        <ul>
            {albums.map(album => (
                <li key={album.id}>{album.userId} - {album.title}</li>
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
