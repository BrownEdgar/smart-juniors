import Post from '../Post/Post';
import NoDataLogo from '../../NoDataLogo/NoDataLogo';
import './Container.scss';
import axios from 'axios';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Container({ isEmpty, posts, setPosts, toggleModal, setCurrentIndex }) {
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

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		console.log(posts);
	// 		if (posts.every(() => 6 < 5)) {
	// 			setIsEmpty(true);
	// 		}
	// 	}, 2000);
	// }, [posts.length]);

	return (
		<div className="Container">
			{!isEmpty ? (
				posts.map((post, index) => {
					return (
						<Post
							post={{ value: post, index: index }}
							toggleModal={toggleModal}
							setCurrentIndex={setCurrentIndex}
							key={post.id}
						/>
					);
				})
			) : (
				<NoDataLogo />
			)}
		</div>
	);
}

Container.propTypes = {
	isEmpty: PropTypes.bool.isRequired,
	posts: PropTypes.array.isRequired,
	setPosts: PropTypes.func.isRequired,
	toggleModal: PropTypes.func.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
};
