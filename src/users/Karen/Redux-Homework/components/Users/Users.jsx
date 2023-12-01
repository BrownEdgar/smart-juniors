import {useDispatch, useSelector} from "react-redux"
import {getAllUsersData, userDelet} from "../../feauters/users/usersSlice"
import classNames from 'classnames'
import './Users.scss'

export default function Users() {
    const users = useSelector(getAllUsersData)
    const dispatch = useDispatch()

    const handleDelete = (userIndex) => {
        dispatch(userDelet(userIndex))
    }
    return (
        <div>
            <div>
                <ul className="Posts">
                    {users.map((user, index) => {
                        return (
                            <li key={user.id}>
                                <div>
                                    <span onClick={() => handleDelete(index)}>&#10006;</span>
                                    <h2>{user.name}</h2>
                                    <h3>Username: {user.username}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Website: {user.website}</p>
                                </div>
                            </li>
                        )
                    })
}
                </ul>
            </div>
        </div>
    )
}
