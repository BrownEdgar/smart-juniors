import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsSelector, getAsyncPosts } from '../../features/posts/postsSlice';
import { Post } from '../../components';
import './Posts.scss';

export default function Posts() {
	const posts = useSelector(getAllPostsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAsyncPosts());
	}, []);

	return (
		<section className="Posts">
			<h1 className="pageTitle">Posts</h1>
			{posts.status === 'pending' ? (
				<h2 className="pending">
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</h2>
			) : (
				<div className="Posts-content">
					{posts.data.map((post) => {
						return <Post post={post} key={post.id} />;
					})}
				</div>
			)}
		</section>
	);
}
