import { Link } from 'react-router-dom'
import './PeopleList.scss'
import ROUTES from '../../routes/routes'

export default function PeopleList({ people }) {
  return (
    <div className='PeopleList'>
      <h1>Famous People</h1>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Fullname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
                <td><Link to={`/${ROUTES.PEOPLE_LIST}/${person.id}`}><img src={person.image} alt={person.lastname} /></Link></td>
                <td><Link to={`/${ROUTES.PEOPLE_LIST}/${person.id}`}>{person.firstname} {person.lastname}</Link></td>
                <td><Link to={`/${ROUTES.PEOPLE_LIST}/${person.id}`}>{person.email}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}