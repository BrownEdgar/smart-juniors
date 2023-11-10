import { useParams } from 'react-router-dom';
import './UserDetail.scss'

export default function UserDetail({ users }) {
  const { id } = useParams();
  const user = users[parseInt(id)];

  if (!user) {
    return <div>User not found</div>;
  }

  console.log(user);
  return (
    <div className='user-detail-container'>
      <h2>{user.firstName} {user.lastName}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>About:</strong> {user.about}</p>
      <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
    </div>
  );
}