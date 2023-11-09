import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ROUTES from '../routes/routes';
import axios from 'axios';

export default function Post() {
	const { id } = useParams();
	const [post, setPost] = useState({});

	useEffect(() => {
		if (id <= 200) {
			axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((res) => setPost(res.data))
				.catch((err) => console.log(err));
		}
	}, [id]);

	if (isNaN(id) || id > 200) {
		return (
			<>
				<h1>Posts N {id} not found</h1>
				<Link to={`/${ROUTES.POSTS}`}>All posts</Link>
			</>
		);
	}

	return (
		<div>
			<Link to={`/${ROUTES.POSTS}`}>All posts</Link>
			<h1>Welcome to the post N {id}</h1>
			<div className="postWrapper">
				<h3 className="userId">{post?.userId}</h3>
				<h4 className="id">{post?.id}</h4>
				<p className="title">{post?.title}</p>
				<p className="body">{post?.body}</p>
			</div>
		</div>
	);
}
