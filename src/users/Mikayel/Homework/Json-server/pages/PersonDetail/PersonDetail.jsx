import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ROUTES from '../../routes/routes';
import './PersonDetail.scss'

export default function PersonDetail({ updatePeopleList }) {
  const { id } = useParams();
  console.log({id});
  const [person, setPerson] = useState(null);
  console.log(person);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/people/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };
    fetchPersonDetails();
  }, [id]);

  const handleEditClick = () => {
    // Navigate to the edit page for the current person
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/people/${id}`);

      updatePeopleList();
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (

    <div className="person-detail-container">
      <div className="options-container">
        <div className="option" onClick={handleEditClick}>
          Edit
        </div>
        <div className="option" onClick={handleDeleteClick}>
          <Link to={`/${ROUTES.PEOPLE_LIST}`}>
            Delete
          </Link>
        </div>
      </div>
      <div className="information-container">
        <h1>Person Details</h1>
        <div>
          <strong>Name:</strong> {person.firstname} {person.lastname}
        </div>
        <div>
          <strong>Email:</strong> {person.email}
        </div>
        <div>
          <strong>Birthday:</strong> {person.birthday}
        </div>
        <div>
          <strong>Info:</strong> {person.info}
        </div>
        <div>
          <strong>Work Industry:</strong> {person.workIndustry}
        </div>
        <div>
          <strong>Success in Field:</strong> {person.successInField}
        </div>
        <div>
          <strong>Image:</strong> <img src={`/public/${person.image}`} alt={person.lastname} />
        </div>
      </div>
    </div>
  )
}