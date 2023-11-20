import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEditSquare } from 'react-icons/md';
import { TbTrashFilled } from 'react-icons/tb';
import { RiUserAddFill } from 'react-icons/ri';
import { Modal, SignForm } from '../../components';
import ROUTES from '../../routes/routes';
import './Users.scss';

export default function Users({ users, setUsers, setRemovedUserId, editablePostId, setEditablePostId }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const navigate = useNavigate();

	const handleDelete = (id) => {
		axios(`http://localhost:3000/users/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setRemovedUserId(id);
			})
			.catch((err) => console.log('Error:', err));
	};

	const handleSubmit = (values, resetForm) => {
		const { profile_image, firstname, lastname, email, username, password, birthplace, birthdate, knownAs, about } =
			values;

		axios
			.patch(`http://localhost:3000/users/${editablePostId}`, {
				profile_image: profile_image.match(/(?<=fakepath\\).*$/)?.[0],
				firstname,
				lastname,
				email,
				username,
				password,
				birthplace,
				birthday: birthdate.slice(8),
				birthmonth: new Date(birthdate).toLocaleString('en-US', { month: 'long' }),
				birthyear: birthdate.slice(0, 4),
				knownAs,
				about,
			})
			.then(() => setUsers([]))
			.catch((err) => console.log('Error:', err));

		toggleModal();
		resetForm();
	};

	const toggleModal = () => setModalIsOpen(!modalIsOpen);
	const editPost = (id) => {
		setEditablePostId(() => id);
	};

	return (
		<div className="Users">
			{modalIsOpen && (
				<Modal toggleModal={toggleModal}>
					<SignForm actionName="Save" handleFormSubmit={handleSubmit} />
				</Modal>
			)}
			<ul>
				{users.map((user) => {
					return (
						<li className="Users-userWrapper" key={user.id}>
							<div className="Users-imageWrapper">
								<Link to={`${user.id}`}>
									<img src={`/${user.profile_image}`} alt="profile image" />
								</Link>
							</div>
							<h2 className="Users-name Users-textInfo">
								{user.firstname} {user.lastname}
							</h2>
							<p className="Users-knownAs Users-textInfo">{user.known_as}</p>
							<button
								className="Users-edit userBtn"
								title="edit"
								onClick={() => {
									toggleModal();
									editPost(user.id);
								}}
							>
								<MdEditSquare />
							</button>
							<button
								className="Users-delete userBtn"
								title="delete"
								onClick={() => {
									handleDelete(user.id);
								}}
							>
								<TbTrashFilled />
							</button>
						</li>
					);
				})}
				<li className="Users-addBtnWrapper">
					<button
						className="Users-addUser"
						title="add user"
						onClick={() => navigate({ pathname: `/${ROUTES.SIGNUP}` })}
					>
						<RiUserAddFill />
					</button>
				</li>
			</ul>
		</div>
	);
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	setUsers: PropTypes.func.isRequired,
	setRemovedUserId: PropTypes.func.isRequired,
	editablePostId: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
	setEditablePostId: PropTypes.func.isRequired,
};
