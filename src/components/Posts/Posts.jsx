import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncPosts, getPosts } from '../../features/posts/postsSlice';
import PageNumbers from '../PageNumbers/PageNumbers';
import Post from '../Post/Post';
import { ThreeDots } from '../Loaders';
import './Posts.scss';

const totalPosts = 100;

export default function Posts() {
	const [options, setOptions] = useState({
		page: 1,
		perPage: 10,
	});
	const posts = useSelector(getPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAsyncPosts(options));
	}, [options, dispatch]);

	const changePage = (page) => {
		setOptions((preOptions) => {
			return {
				...preOptions,
				page,
			};
		});
	};

	return (
		<section className="Posts">
			<h2 className="Posts-title">POSTS</h2>
			<div className="Posts-postWrapper">
				{posts.status === 'pending' ? (
					<ThreeDots />
				) : (
					posts.data.map((post) => {
						return <Post post={post} key={post.id} />;
					})
				)}
			</div>
			<PageNumbers totalPosts={totalPosts} perPage={options.perPage} changePage={changePage} />
		</section>
	);
}
