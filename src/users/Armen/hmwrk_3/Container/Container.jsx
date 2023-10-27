import './Container.scss';
import axios from 'axios';
import Post from '../Post/Post';
import { useState, useEffect } from 'react';

export default function Container() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			url: 'posts',
			params: {
				_limit: 5,
			},
		})
			.then((res) => setPosts(res.data))
			.catch((err) => console.log('error: ', err));
	}, []);

	return (
		<div className="Container">
			{posts.map((post) => {
				return <Post post={post} key={post.id} />;
			})}
		</div>
	);
}
