import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncPosts, getPosts } from '../../features/posts/postsSlice';
import PageNumbers from '../PageNumbers/PageNumbers';
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
	}, []);

	const changePage = (page) => {
		setOptions((preOptions) => {
			console.log({ ...preOptions, page });

			return {
				...preOptions,
				page,
			};
		});
	};

	return (
		<section className="Posts">
			<h2 className="Posts-title">Posts</h2>
			<div className="Posts-postWrapper">
				{posts.status === 'pending' ? (
					<h2 className="pending">
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</h2>
				) : (
					posts.data.map((post) => {
						return (
							<div className="Posts-post" key={post.id}>
								<div className="Posts-backPostWrapper">NO DATA</div>
								<div className="Posts-frontPostWrapper">{post.title}</div>
							</div>
						);
					})
				)}
			</div>
			<PageNumbers totalPosts={totalPosts} perPage={options.perPage} changePage={changePage} />
		</section>
	);
}
