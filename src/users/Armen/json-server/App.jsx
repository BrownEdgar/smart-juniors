import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../props_children/Modal';
import { Field, Form, Formik } from 'formik';

import './App.scss';

export default function App() {
	const [posts, setPosts] = useState([]);
	const [deletedPostId, setDeletedPostId] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [editablePostId, setEditablePostId] = useState(null);

	useEffect(() => {
		axios('http://localhost:3000/posts')
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	}, [deletedPostId]);

	const handleDelete = (postId) => {
		setDeletedPostId(postId);
		axios(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	};

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	const editPost = (id) => {
		setEditablePostId(id);
	};

	const handleSubmit = (values, { resetForm }) => {};
	console.log(values);
	toggleModal();
	resetForm();

	return (
		<>
			{isOpen && (
				<Modal toggleModal={toggleModal}>
					<Formik
						initialValues={{ userId: '', title: '', body: '' }}
						validateOnBlur={true}
						validateOnChange={false}
						onSubmit={handleSubmit}
					>
						<Form>
							<Field type="text" name="title" />
							<Field type="text" name="body" />
							<Field type="number" name="userId" />
							<input type="submit" />
						</Form>
					</Formik>
				</Modal>
			)}

			<div className="Posts">
				{posts.map((elem) => {
					return (
						<div className="Posts-item" key={elem.id}>
							<span onClick={() => handleDelete(elem.id)}>&#10006;</span>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
							<button onClick={() => editPost(elem.id)}>edit</button>
						</div>
					);
				})}
			</div>
		</>
	);
}
