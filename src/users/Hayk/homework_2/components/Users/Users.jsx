import { useState } from 'react'
import PropTypes from "prop-types";
import User from '../User/User';
import "./Users.scss"
import classNames from 'classnames';

export default function Users({ users, setProfile }) {
  const [selected, setSelected] = useState(null)

  return (
    <ul className='Users'>
      {
        users.map(user => {
          return (
            <li key={user.id} className={classNames('Users-child', {
              [`Users-child_active`]: user.id === selected
            })} onClick={() => {
              setProfile(user)
              setSelected(user.id)
            }}>
              <User user={user} />
            </li>
          )
        }
        )
      }
    </ul>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.exact({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.exact({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        })
      }),
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.exact({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired
      })
    })
  )
}


