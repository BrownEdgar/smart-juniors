import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import './Posts.scss';

export default function Posts() {
	const posts = useLoaderData();
	console.log(posts);

	return (
		<div className="Posts">
			{posts.map((post) => {
				return (
					<Link key={post.id} to={`${post.id}`}>
						{post.title}
					</Link>
				);
			})}
		</div>
	);
}

const postLoader = async ({ request, params }) => {
	return axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then((res) => res.data)
		.catch((err) => err);
};

export { postLoader };
