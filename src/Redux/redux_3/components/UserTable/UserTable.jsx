import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../features/users/usersSlice';
import './UserTable.scss'

const UserTable = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleDelete = userId => {
    dispatch(deleteUser(userId));
  };

  const renderUserRows = () => {
    return users.map(user => (
      <tr key={user.userId}>
        <td><img src={user.photo} /></td>
        <td>{user.userId}</td>
        <td>{user.userName}</td>
        <td>{user.surname}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={() => handleDelete(user.userId)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>UserId</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{renderUserRows()}</tbody>
    </table>
  );
};

export default UserTable;
